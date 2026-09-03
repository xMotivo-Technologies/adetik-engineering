import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect this to your backend, EmailJS, Formspree, or API endpoint.
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="overflow-hidden bg-white ">

      {/* Form and details */}
      <section className="px-6 py-20 md:px-16 lg:px-32 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] overflow-hidden border border-black/10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact information */}
          <div className="bg-customGreen p-8 text-white sm:p-12 lg:p-14">
            <p className="text-xs font-extrabold tracking-[0.16em] text-customYellow">
              GET IN TOUCH
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] lg:text-5xl">
              We are ready to help bring your ideas to life.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
              Reach out to us for engineering, construction, infrastructure,
              consultancy, and project-management enquiries.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <p className="text-xs font-extrabold tracking-[0.14em] text-customYellow">
                  EMAIL
                </p>
                <a
                  href="mailto:info@adetikltd.com"
                  className="mt-2 block text-base font-bold transition hover:text-customYellow"
                >
                  info@adetikltd.com
                </a>
              </div>

              <div>
                <p className="text-xs font-extrabold tracking-[0.14em] text-customYellow">
                  PHONE
                </p>
                <a
                  href="https://wa.me/2349023942560"
                  className="mt-2 block text-base font-bold transition hover:text-customYellow"
                >
                  +234 902 394 2560
                </a>
              </div>

              <div>
                <p className="text-xs font-extrabold tracking-[0.14em] text-customYellow">
                  OFFICE ADDRESS
                </p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/85">
                  1 Akure Street, Area 10, Garki, Abuja-FCT Nigeria.
                </p>
              </div>

              <div>
                <p className="text-xs font-extrabold tracking-[0.14em] text-customYellow">
                  WORKING HOURS
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  Monday – Friday: 8:00 AM – 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="bg-white p-8 sm:p-12 lg:p-14">
            <p className="text-xs font-extrabold tracking-[0.16em] text-customBlue">
              SEND AN ENQUIRY
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-black lg:text-5xl">
              Tell us what you need.
            </h2>

            {submitted ? (
              <div className="mt-8 border-l-4 border-customGreen bg-customGreen/10 p-6">
                <p className="text-lg font-extrabold text-customGreen">
                  Thank you for your enquiry.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-black/70">
                  Your message has been received. Our team will get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-extrabold tracking-[0.1em] text-black"
                    >
                      FULL NAME *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="mt-3 w-full border border-black/20 px-4 py-4 text-sm outline-none transition placeholder:text-black/40 focus:border-customBlue"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="text-xs font-extrabold tracking-[0.1em] text-black"
                    >
                      COMPANY NAME
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Enter company name"
                      className="mt-3 w-full border border-black/20 px-4 py-4 text-sm outline-none transition placeholder:text-black/40 focus:border-customBlue"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-extrabold tracking-[0.1em] text-black"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="mt-3 w-full border border-black/20 px-4 py-4 text-sm outline-none transition placeholder:text-black/40 focus:border-customBlue"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs font-extrabold tracking-[0.1em] text-black"
                    >
                      PHONE NUMBER *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+234..."
                      className="mt-3 w-full border border-black/20 px-4 py-4 text-sm outline-none transition placeholder:text-black/40 focus:border-customBlue"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="text-xs font-extrabold tracking-[0.1em] text-black"
                  >
                    SERVICE REQUIRED *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="mt-3 w-full border border-black/20 bg-white px-4 py-4 text-sm outline-none transition focus:border-customBlue"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Building & Structures</option>
                    <option>Highways & Roads</option>
                    <option>Water Engineering</option>
                    <option>Power Distribution</option>
                    <option>Oil & Gas Infrastructure</option>
                    <option>Marine & Coastal Engineering</option>
                    <option>Consultancy & Project Management</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-extrabold tracking-[0.1em] text-black"
                  >
                    PROJECT DETAILS *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell us about your project or enquiry..."
                    className="mt-3 w-full resize-none border border-black/20 px-4 py-4 text-sm outline-none transition placeholder:text-black/40 focus:border-customBlue"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-customGreen px-7 py-4 text-sm font-bold text-white transition hover:bg-customBlue"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;