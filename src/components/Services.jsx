import React from "react";
import { Link } from "react-router";
import Reveal from "./Reveal";

const Services = () => {
  return (
    <section
      className="relative isolate min-h-[520px] overflow-hidden bg-cover bg-center px-6 py-20 md:px-16 lg:px-32"
      style={{
        backgroundImage: "url('/images/services-banner.jpg')",
      }}
    >
      {/* Dark image overlay */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      {/* Brand-colour overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-customGreen/45 via-customBlue/20 to-transparent" />

      <Reveal className="mx-auto flex min-h-[360px] max-w-4xl flex-col items-center justify-center text-center">
        <p className="mb-5 text-[11px] font-extrabold tracking-[0.18em] text-customYellow">
          ENGINEERING SOLUTIONS
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.05em] text-white lg:text-5xl">
          From Smart Engineering to{" "}
          <span className="text-customYellow">Seamless Execution.</span>
        </h2>

        <p className="mt-7 max-w-2xl text-sm font-medium leading-relaxed text-white/90 sm:text-base">
          We provide cutting-edge engineering and automation solutions, from
          concept to commissioning, empowering industries with innovation,
          safety, and reliability.
        </p>

        <Link
          to="/services"
          className="mt-10 rounded-2xl border-2 border-customYellow bg-customYellow px-10 py-5 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-customGreen hover:text-white"
        >
          See All Services
        </Link>
      </Reveal>
    </section>
  );
};

export default Services;