import React from "react";
import { Link } from "react-router";
import Reveal from "./Reveal";

const CTA = () => {
  return (
    <>
      <Reveal as="section" className="w-full bg-customGreen px-6 py-20 text-center md:px-16 lg:px-32 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-extrabold tracking-[0.18em] text-customYellow">
            LET’S WORK TOGETHER
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-white lg:text-5xl">
            Ready to build your next{" "}
            <span className="text-customYellow">project?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            Partner with an experienced engineering team committed to quality,
            safety, and dependable project delivery.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-customYellow px-8 py-4 text-xs font-bold text-black transition hover:bg-white"
            >
              Request a Quote
            </Link>

            <Link
              to="/projects"
              className="rounded-full border border-white px-8 py-4 text-xs font-bold text-white transition hover:bg-white hover:text-customGreen"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </Reveal>

      <section className="w-full overflow-hidden">
        <img
          src="/images/cta.jpg"
          alt="Engineering team working at a construction site"
          className="h-[320px] w-full object-cover object-center sm:h-[450px] lg:h-[560px]"
        />
      </section>
    </>
  );
};

export default CTA;