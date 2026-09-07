import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Our Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Our Team", link: "/team" },
    { name: "Contact Us", link: "/contact" },
  ];

  const services = [
    "Building & Structures",
    "Highways & Roads",
    "Water Engineering",
    "Power Distribution",
    "Oil & Gas Infrastructure",
    "Marine Engineering",
  ];

  return (
    <footer className="bg-customGreen px-6 pt-16 text-white md:px-16 lg:px-32 lg:pt-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-white/20 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/images/logo.jpeg"
                alt="Adetik 101 MultiNational Links Limited"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-xs text-xs leading-relaxed text-white/85">
              Delivering dependable engineering, construction, and technical
              solutions across Nigeria.
            </p>

            <div className="mt-7 flex gap-3">
              <a
                target="_blank"
                href="https://www.instagram.com/adetikltd/"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center border border-white/30 text-[11px] font-bold transition hover:border-customYellow hover:bg-customYellow hover:text-black"
              >
                <BsInstagram />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[11px] font-extrabold tracking-[0.16em] text-customYellow">
              QUICK LINKS
            </h3>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-xs text-white/85 transition hover:text-customYellow"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-extrabold tracking-[0.16em] text-customYellow">
              SERVICES
            </h3>

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-xs text-white/85 transition hover:text-customYellow"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-extrabold tracking-[0.16em] text-customYellow">
              CONTACT US
            </h3>

            <div className="mt-6 space-y-5 text-xs leading-relaxed text-white/85">
              {/* Replace these placeholders with your real details */}
              <div>
                <p className="mb-1 text-[11px] font-bold tracking-[0.1em] text-white">
                  EMAIL
                </p>
                <div className="flex flex-col">
                  <a
                    href="mailto:adetikltd@gmail.com"
                    className="transition hover:text-customYellow"
                  >
                    adetikltd@gmail.com
                  </a>
                  <a
                    href="mailto:adetikoffice@gmail.com"
                    className="transition hover:text-customYellow"
                  >
                    adetikoffice@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <p className="mb-1 text-[11px] font-bold tracking-[0.1em] text-white">
                  PHONE
                </p>
                <a
                  href="https://wa.me/2348149287397"
                  className="transition hover:text-customYellow"
                >
                  +234 902 394 2560 , +234 814 928 7397
                </a>
              </div>

              <div>
                <p className="mb-1 text-[11px] font-bold tracking-[0.1em] text-white">
                  LOCATION
                </p>
                <div>
                  <p className="text-customYellow font-bold">Office Address</p>
                  <p>21 Iraye Road Epe, Lagos State</p>
                  <p>1 Akure Street, Area 10, Garki, Abuja-FCT Nigeria.</p>
                </div>

                <div>
                  <p className="text-customYellow font-bold">
                    Warehouse Address
                  </p>
                  <p>No. 114 Ikorodu Road, Igbobi, Fadeyi, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-7 text-[11px] text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Adetik 101 MultiNational Links Limited.
            All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              to="/privacy-policy"
              className="transition hover:text-customYellow"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-customYellow">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
