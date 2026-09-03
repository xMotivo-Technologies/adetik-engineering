import React from "react";
import { Link } from "react-router";
import Reveal from "../components/Reveal";

const AboutPage = () => {
  return (
    <main className="overflow-hidden bg-white pt-10">
      {/* Page hero */}
      <section className="relative isolate min-h-[420px] overflow-hidden px-6 py-20 md:px-16 lg:px-32">
        <img
          src="/images/about.jpg"
          alt="Engineering and construction project"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-customBlue/80" />

        <Reveal className="mx-auto flex min-h-[260px] max-w-[1440px] flex-col justify-end text-white">
          <p className="text-xs font-extrabold tracking-[0.18em] text-customYellow">
            ABOUT US
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] lg:text-5xl">
            Engineering with{" "}
            <span className="text-customYellow">purpose.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Delivering dependable engineering, construction, and technical
            solutions across Nigeria.
          </p>
        </Reveal>
      </section>

      {/* Company profile */}
      <section className="px-6 py-24 md:px-16 lg:px-32 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal x={-40} y={0} className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 bg-customYellow sm:h-32 sm:w-32" />

            <img
              src="/images/building.png"
              alt="Adetik 101 construction project"
              className="relative z-10 h-[400px] w-full object-cover sm:h-[520px]"
            />

            <div className="absolute -bottom-7 -right-3 z-20 max-w-[260px] bg-customGreen p-6 text-white sm:-right-7">
              <p className="text-3xl font-extrabold tracking-[-0.06em]">101</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em]">
                MultiNational Links Limited
              </p>
            </div>
          </Reveal>

          <Reveal x={40} y={0} delay={0.15} className="pt-8 lg:pt-0">
            <p className="mb-4 text-[11px] font-extrabold tracking-[0.16em] text-customBlue">
              ABOUT ADETIK 101
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-black lg:text-5xl">
              Engineering solutions built for{" "}
              <span className="text-customGreen">lasting impact.</span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-black/70 sm:text-base">
              Adetik 101 MultiNational Links Limited provides top-tier
              engineering, construction, and technical solutions. Using
              advanced construction management tools, we deliver projects
              across Nigeria in line with national and international
              standards.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-black/70 sm:text-base">
              We prioritize skilled local labour, enabling technology transfer
              and community goodwill while delivering efficient, cost-effective
              project execution.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex rounded-full border-2 border-customGreen bg-customGreen px-7 py-4 text-xs font-bold text-white transition hover:-translate-y-1 hover:border-customYellow hover:bg-customYellow hover:text-black"
            >
              Work With Us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Vision and mission */}
      <section className="bg-customBlue px-6 py-20 md:px-16 lg:px-32 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="mb-12 max-w-2xl">
            <p className="text-[11px] font-extrabold tracking-[0.16em] text-customYellow">
              WHAT GUIDES US
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white lg:text-5xl">
              Driven by progress and trust.
            </h2>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal as="article" className="relative overflow-hidden bg-white p-8 text-black sm:p-12">
              <span className="absolute -right-3 -top-7 text-[9rem] font-extrabold leading-none text-black/5">
                01
              </span>

              <p className="relative text-[11px] font-extrabold tracking-[0.16em] text-customBlue">
                OUR VISION
              </p>

              <h3 className="relative mt-7 max-w-xl text-2xl font-extrabold leading-tight tracking-[-0.04em] sm:text-3xl">
                Closing critical gaps that drive economic growth.
              </h3>

              <p className="relative mt-6 max-w-xl text-sm leading-relaxed text-black/70 sm:text-base">
                To highlight technical issues in the engineering and supply
                industry and address critical gaps to spur growth across our
                economy.
              </p>

              <div className="relative mt-8 h-1.5 w-14 bg-customYellow" />
            </Reveal>

            <Reveal as="article" delay={0.15} className="relative overflow-hidden bg-customGreen p-8 text-white sm:p-12">
              <span className="absolute -right-3 -top-7 text-[9rem] font-extrabold leading-none text-white/10">
                02
              </span>

              <p className="relative text-[11px] font-extrabold tracking-[0.16em] text-customYellow">
                OUR MISSION
              </p>

              <h3 className="relative mt-7 max-w-xl text-2xl font-extrabold leading-tight tracking-[-0.04em] sm:text-3xl">
                Building trust through excellence and advanced technology.
              </h3>

              <p className="relative mt-6 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
                To maintain goodwill toward all clients through the practice of
                advanced technology, passion for excellence, honesty, and
                integrity.
              </p>

              <div className="relative mt-8 h-1.5 w-14 bg-customYellow" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-24 text-center md:px-16 lg:px-32 lg:py-32">
        <Reveal className="mx-auto max-w-4xl">
          <p className="text-[11px] font-extrabold tracking-[0.16em] text-customBlue">
            OUR PHILOSOPHY
          </p>

          <blockquote className="mt-6 text-3xl font-extrabold leading-tight tracking-[-0.05em] text-black sm:text-4xl lg:text-5xl">
            “Every contract we sign becomes{" "}
            <span className="text-customGreen">the most important task</span>{" "}
            we have ever undertaken.”
          </blockquote>

          <div className="mx-auto mt-8 h-1 w-16 bg-customYellow" />
        </Reveal>
      </section>

      {/* Bottom CTA */}
      <section className="bg-customGreen px-6 py-20 text-center md:px-16 lg:px-32 lg:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <p className="text-[11px] font-extrabold tracking-[0.16em] text-customYellow">
            LET’S WORK TOGETHER
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white lg:text-5xl">
            Have a project in mind?
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-white/85 sm:text-base">
            Speak with our team about an engineering solution built around your
            project needs.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-customYellow px-8 py-4 text-sm font-bold text-black transition hover:bg-white"
          >
            Contact Us Today
          </Link>
        </Reveal>
      </section>
    </main>
  );
};

export default AboutPage;