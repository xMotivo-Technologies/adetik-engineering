import React from "react";
import {
  ShieldCheck,
  BadgeCheck,
  ClipboardCheck,
  Handshake,
} from "lucide-react";
import Reveal from "./Reveal";

const values = [
  {
    title: "Integrity",
    text: "Upheld through absolute honesty and ethical standards in all dealings.",
    Icon: ShieldCheck,
    card: "bg-customGreen text-white",
    iconBox: "bg-customYellow text-black",
    line: "bg-customYellow",
    textColor: "text-white/85",
  },
  {
    title: "Reliability",
    text: "Consistently meeting project expectations and engineering standards.",
    Icon: BadgeCheck,
    card: "bg-customYellow text-black",
    iconBox: "bg-customBlue text-white",
    line: "bg-customBlue",
    textColor: "text-black/70",
  },
  {
    title: "Accountability",
    text: "Full responsibility for project safety, execution, and quality.",
    Icon: ClipboardCheck,
    card: "bg-black text-white",
    iconBox: "bg-customGreen text-white",
    line: "bg-customGreen",
    textColor: "text-white/75",
  },
  {
    title: "Customer Relations",
    text: "Fostering strong, lasting relationships through exceptional service delivery.",
    Icon: Handshake,
    card: "bg-customGreen text-white",
    iconBox: "bg-customYellow text-black",
    line: "bg-customYellow",
    textColor: "text-white/85",
  },
];

const Creed = () => {
  return (
    <section className="bg-customBlue px-6 py-24 md:px-16 md:py-32 lg:px-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mx-auto max-w-5xl text-center">
          {/* <p className="mb-5 text-[11px] font-extrabold tracking-[0.16em] text-customYellow">
            OUR CREED
          </p> */}

          <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-white lg:text-5xl">
            Delivering every project{" "}
            <span className="text-customYellow">within budget</span>, on time,
            and with the <span className="text-customYellow">highest quality.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            Our work is guided by a commitment to dependable engineering,
            responsible execution, and lasting client partnerships.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal x={-30} y={0} className="relative min-h-[460px] overflow-hidden lg:min-h-full">
            <img
              src="/images/team.png"
              alt="Engineering team inspecting a construction project"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/70" />

            <div className="absolute bottom-0 left-0 p-8 text-white sm:p-10">
              <span className="block h-1.5 w-14 bg-customYellow" />

              <p className="mt-6 text-xs font-extrabold tracking-[0.18em] text-customYellow">
                ENGINEERED WITH PURPOSE
              </p>

              <p className="mt-3 max-w-sm text-2xl font-extrabold leading-tight tracking-[-0.04em] sm:text-3xl">
                Trusted people. Reliable processes. Quality results.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.Icon;

              return (
                <Reveal
                  as="article"
                  key={value.title}
                  delay={index * 0.1}
                  className={`group relative min-h-[285px] overflow-hidden p-7 transition duration-300 hover:-translate-y-2 sm:p-8 ${value.card}`}
                >
                  <div
                    className={`grid h-14 w-14 place-items-center ${value.iconBox}`}
                  >
                    <Icon size={28} strokeWidth={2.2} />
                  </div>

                  <div className={`mt-7 h-1.5 w-14 ${value.line}`} />

                  <div className="mt-8">
                    <h3 className="text-2xl font-extrabold tracking-[-0.04em]">
                      {value.title}
                    </h3>

                    <p className={`mt-4 text-sm leading-relaxed ${value.textColor}`}>
                      {value.text}
                    </p>
                  </div>

                  <div className={`absolute bottom-0 left-0 h-2 w-full ${value.line}`} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creed;