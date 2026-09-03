import React from "react";
import { Link } from "react-router";
import Reveal from "../components/Reveal";

const services = [
  {
    number: "01",
    title: "Building & Structures",
    description:
      "Design, construction, maintenance, and renovation of commercial, industrial, and residential structures.",
    image: "/images/building.jpg",
    featured: true,
  },
  {
    number: "02",
    title: "Highways & Roads",
    description:
      "Design, construction, and rehabilitation of roads, highways, and drainage systems.",
    image: "/images/road.jpg",
    featured: true,
  },
  {
    number: "03",
    title: "Water Engineering",
    description:
      "Stormwater management, water supply systems, and water resources development.",
  },
  {
    number: "04",
    title: "Telecommunications & IT",
    description:
      "Structured cabling, fibre optics, wireless links, communication radios, masts, system installations, and intranet integrations.",
  },
  {
    number: "05",
    title: "Power Distribution",
    description:
      "Rural and urban electrical lift installations, electrical infrastructure, and procurement.",
  },
  {
    number: "06",
    title: "Oil & Gas Infrastructure",
    description:
      "Engineering facilities for pipeline systems, oil and gas storage, and delivery infrastructure.",
    image: "/images/oilrig.jpg",
    featured: true,
  },
  {
    number: "07",
    title: "Marine & Coastal Engineering",
    description:
      "Jetties, land reclamation, shore protection, dredging, and marine construction works.",
    image: "/images/marine.jpg",
    featured: true,
  },
  {
    number: "08",
    title: "Maintenance Engineering",
    description:
      "Plant maintenance documentation, spare parts optimisation, coding, storage setup, and O&M manual creation.",
  },
  {
    number: "09",
    title: "Consultancy & Project Management",
    description:
      "Engineering manpower provision, project formulation, project coordination, and right-of-way acquisition.",
  },
];

const Services = () => {
  return (
    <main className="overflow-hidden bg-white pt-10">
      {/* Hero */}
      <section className="px-6 pb-20 pt-16 md:px-16 lg:px-32 lg:pb-28">
        <div className="mx-auto grid max-w-[1440px] items-end gap-10 lg:grid-cols-[1fr_0.85fr]">
          <Reveal x={-40} y={0}>
            <p className="text-[11px] font-extrabold tracking-[0.18em] text-customBlue">
              OUR SERVICES
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-black lg:text-5xl">
              Engineering excellence{" "}
              <span className="text-customGreen">at every stage.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base">
              From project planning and technical design to construction,
              commissioning, and ongoing maintenance, we provide practical
              solutions for complex infrastructure needs.
            </p>
          </Reveal>

          <Reveal x={40} y={0} delay={0.15} className="relative hidden lg:block">
            <div className="absolute -left-5 -top-5 h-28 w-28 bg-customYellow" />
            <img
              src="/images/engineer.png"
              alt="Engineer reviewing an infrastructure project"
              className="relative z-10 h-[360px] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Featured visual services */}
      <section className="bg-customGreen px-6 py-20 md:px-16 lg:px-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-extrabold tracking-[0.18em] text-customYellow">
                WHAT WE DO
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white lg:text-5xl">
                Built for complex projects.
              </h2>
            </div>

            <p className="max-w-md text-xs leading-relaxed text-white/85 sm:text-right">
              Technical capability, experienced people, and the right equipment
              to deliver safely and efficiently.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {services
              .filter((service) => service.featured)
              .map((service, index) => (
                <Reveal
                  as="article"
                  key={service.number}
                  delay={(index % 2) * 0.15}
                  className="group relative min-h-[390px] overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />



                  <div className="absolute bottom-0 p-7 text-white sm:p-9">
                    <h3 className="text-2xl font-extrabold tracking-[-0.04em]">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-md leading-relaxed text-white/90">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* All service list */}
      <section className="px-6 py-24 md:px-16 lg:px-32 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-[11px] font-extrabold  text-customBlue">
              FULL CAPABILITIES
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-black lg:text-5xl">
              Solutions tailored to your project.
            </h2>
          </Reveal>

          <div className="grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                as="article"
                key={service.number}
                delay={(index % 3) * 0.08}
                className="group relative min-h-[280px] border-b border-r border-black/15 p-7 transition duration-300 hover:bg-customBlue hover:text-white sm:p-9"
              >
                {/* <span className="absolute right-6 top-4 text-6xl font-extrabold leading-none tracking-[-0.1em] text-black/5 transition group-hover:text-white/10">
                  {service.number}
                </span> */}

                <div
                  className={`h-1 w-12 ${
                    index % 3 === 0
                      ? "bg-customGreen"
                      : index % 3 === 1
                        ? "bg-customBlue"
                        : "bg-customYellow"
                  }`}
                />

                <div className="relative mt-16">
                  <h3 className="text-xl font-extrabold tracking-[-0.04em] text-black transition group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-xs leading-relaxed text-black/65 transition group-hover:text-white/85">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-customGreen/20 pt-10 text-center md:flex-row md:text-left">
            <p className="max-w-xl text-base font-bold leading-relaxed text-black sm:text-lg">
              Have a project in mind? Let’s discuss the right solution.
            </p>

            <Link
              to="/contact"
              className="rounded-full border-2 border-customGreen bg-customGreen px-8 py-4 text-xs font-bold text-white transition hover:-translate-y-1 hover:border-customYellow hover:bg-customYellow hover:text-black"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;