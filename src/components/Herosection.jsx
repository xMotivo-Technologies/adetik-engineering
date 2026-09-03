import React from "react";
import Reveal from "./Reveal";

const Herosection = () => {
  return (
    <section className="grid min-h-[690px] grid-cols-1 items-end overflow-hidden bg-gradient-to-br from-customGreen/40 via-customYellow/10 to-customBlue px-6 pt-40 md:grid-cols-2 md:px-16 lg:px-32">
      <Reveal x={-40} y={0} className="z-10 self-center pb-10 md:pb-16">

        <h1 className="text-4xl font-medium leading-[0.92] tracking-[-0.065em] text-black lg:text-5xl">
          Driving Quality  <br />
           Engineering Across  <br />
          <span className="text-customBlue">Nigeria</span>
        </h1>

        <p className="mt-8 max-w-[500px] text-sm leading-relaxed text-black/70 sm:mt-10 sm:text-base">
          an indigenous Civil Engineering, Building Construction, and General
          Contracting company delivering high-quality, technically sound
          solutions on time and within budget.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5">
          <a
            href="/contact"
            className="min-w-[250px] border-2 border-customGreen bg-customGreen px-7 py-5 text-center text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-customYellow hover:bg-customYellow hover:text-black"
          >
            Request A Quote
          </a>

          <a
            href="/services"
            className="min-w-[250px] border-2 border-customBlue bg-white px-7 py-5 text-center text-sm font-bold text-customBlue transition duration-300 hover:-translate-y-1 hover:border-customBlue hover:bg-customBlue hover:text-white"
          >
            See All Services <span className="ml-2 text-lg">→</span>
          </a>
        </div>
      </Reveal>

      <Reveal x={40} y={0} delay={0.15} className="relative flex justify-center self-end md:justify-end">
        <div className="absolute bottom-0 right-0 h-[75%] w-[75%] rounded-tl-[10rem] bg-customBlue/40" />

        <img
          src="/images/hero-img.png"
          alt="Mining engineering team"
          className="relative z-10 max-h-[620px] w-full max-w-[650px] object-contain object-bottom"
        />
      </Reveal>
    </section>
  );
};

export default Herosection;
