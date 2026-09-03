import React from "react";
import { Link } from "react-router";

const SolarImportExport = () => {
  return (
    <main className="overflow-hidden bg-white pt-10">
      <section className="relative isolate min-h-[600px] overflow-hidden px-6 py-20 md:px-16 lg:px-32">
        <img
          src="/images/solar.jpg"
          alt="Solar panels"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-customGreen/50" />

        <div className="mx-auto flex min-h-[440px] max-w-[1440px] flex-col justify-center text-white">
          <p className="text-xs font-extrabold tracking-[0.18em] text-customYellow">
            SOLAR ENERGY SOLUTIONS
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-5xl">
            Importers & Exporters of{" "}
            <span className="text-customYellow">Solar Panels.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Adetik 101 MultiNational Links Limited supplies and facilitates the
            import and export of quality solar panels for residential,
            commercial, and industrial energy needs.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/2349023942560"
              className="w-fit rounded-full bg-customYellow px-8 py-4 text-sm font-bold text-black transition hover:bg-white"
            >
              Make an Enquiry
            </a>

            {/* <Link
              to="/contact"
              className="w-fit rounded-full border border-white px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-customGreen"
            >
              Request a Quote
            </Link> */}
          </div>
        </div>
      </section>

      <section className="bg-customBlue px-6 py-16 text-center md:px-16 lg:px-32 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-extrabold tracking-[0.16em] text-customYellow">
            CLEAN ENERGY ACCESS
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            Supplying solar solutions for a brighter future.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            We connect clients with dependable solar-panel products and support
            efficient import and export processes for renewable-energy
            projects.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SolarImportExport;