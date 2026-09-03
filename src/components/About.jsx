import React from "react";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white px-6 py-24 md:px-16 lg:px-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Company profile */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal x={-40} y={0} className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 bg-customYellow sm:h-32 sm:w-32" />

            <img
              src="/images/building.png"
              alt="Engineering team at work"
              className="relative z-10 h-[400px] w-full object-cover sm:h-[520px]"
            />

            <div className="absolute -bottom-7 -right-3 z-20 max-w-[260px] bg-customGreen p-6 text-white sm:-right-7">
              <p className="text-3xl font-extrabold tracking-[-0.06em]">
                Adetik 101
              </p>
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
              engineering, construction, and technical solutions. Using advanced
              construction management tools, we deliver projects across Nigeria
              in line with national and international standards.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-black/70 sm:text-base">
              We prioritize skilled local labour, enabling technology transfer
              and community goodwill while delivering efficient, cost-effective
              project execution.
            </p>

            <a
              href="/contact"
              className="mt-9 inline-flex rounded-full border-2 border-customGreen bg-customGreen px-7 py-4 text-xs font-bold text-white transition hover:-translate-y-1 hover:border-customYellow hover:bg-customYellow hover:text-black"
            >
              Work With Us
            </a>
          </Reveal>
        </div>

        {/* Vision and mission */}
        <div className="mt-28 grid gap-5 lg:grid-cols-2">
          <Reveal as="article" className="relative overflow-hidden bg-customBlue p-8 text-white sm:p-12">
            <p className="relative text-[11px] font-extrabold tracking-[0.16em] text-customYellow">
              OUR VISION
            </p>

            <h3 className="relative mt-7 max-w-xl text-2xl font-extrabold leading-tight tracking-[-0.04em] sm:text-3xl">
              Closing critical gaps that drive economic growth.
            </h3>

            <p className="relative mt-6 max-w-xl leading-relaxed text-white/90">
              To highlight technical issues in the engineering and supply
              industry and address critical gaps to spur growth across our
              economy.
            </p>
          </Reveal>

          <Reveal as="article" delay={0.15} className="relative overflow-hidden bg-customGreen p-8 text-white sm:p-12">
            <p className="relative text-[11px] font-extrabold tracking-[0.16em] text-customYellow">
              OUR MISSION
            </p>

            <h3 className="relative mt-7 max-w-xl text-2xl font-extrabold leading-tight tracking-[-0.04em] sm:text-3xl">
              Building trust through excellence and advanced technology.
            </h3>

            <p className="relative mt-6 max-w-xl leading-relaxed text-white/90">
              To maintain goodwill toward all clients through the practice of
              advanced technology, passion for excellence, honesty, and
              integrity.
            </p>
          </Reveal>
        </div>

        {/* Philosophy */}
        <Reveal className="mt-16 py-14 text-center sm:py-20">
          <p className="text-[11px] font-extrabold tracking-[0.16em] text-customBlue">
            OUR PHILOSOPHY
          </p>

          <blockquote className="mx-auto mt-6 max-w-4xl text-2xl font-extrabold leading-tight tracking-[-0.05em] text-black sm:text-3xl lg:text-4xl">
            “Every contract we sign becomes{" "}
            <span className="text-customGreen">the most important task</span> we
            have ever undertaken.”
          </blockquote>

          <div className="mx-auto mt-8 h-1 w-16 bg-customYellow" />
        </Reveal>
      </div>
    </section>
  );
};

export default About;
