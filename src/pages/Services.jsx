import React from "react";
import { Link } from "react-router";
import Reveal from "../components/Reveal";

const services = [
  {
    title: "Architectural Design",
    description:
      "Thoughtful architectural planning and design solutions for residential, commercial, and institutional developments.",
    image: "/images/arch-design.jpg",
  },
  {
    title: "Building Road Networks",
    description:
      "Construction of durable road networks, access roads, drainage systems, and supporting infrastructure.",
    image: "/images/road.jpg",
  },
  {
    title: "5-Star Hotel Construction",
    description:
      "Development and construction of premium hospitality facilities designed for comfort, function, and quality.",
    image: "/images/hotel.jpg",
  },
  {
    title: "International Market Construction",
    description:
      "Planning and construction of modern market spaces built for trade, accessibility, and long-term growth.",
    image: "/images/market.jpg",
  },
  {
    title: "Estate Development",
    description:
      "End-to-end residential estate development, from planning and infrastructure to completed housing projects.",
    image: "/images/estate-devt.jpg",
  },
  {
    title: "Quantity Surveying",
    description:
      "Cost planning, project estimation, tender support, and financial management for construction projects.",
    image: "/images/qs.jpg",
  },
  {
    title: "Land & Property Survey",
    description:
      "Professional land surveying, site measurement, mapping, and property boundary assessment services.",
    image: "/images/landsurvey.jpg",
  },
  {
    title: "Electrical Solutions",
    description:
      "Electrical installation, power infrastructure, distribution systems, and energy solution delivery.",
    image: "/images/electrical.jpg",
  },
  {
    title: "Import & Export Services",
    description:
      "Facilitating trusted importation and exportation services for products, equipment, and business needs.",
    image: "/images/importexport.jpg",
  },
  {
    title: "Cocoa Business",
    description:
      "Cocoa sourcing, trading, supply, and agricultural business support across local and international markets.",
    image: "/images/cocoa.jpg",
  },
  {
    title: "Financing",
    description:
      "Financial support and business financing solutions to help projects and enterprises move forward.",
    image: "/images/financing.jpg",
  },
  {
    title: "Farming & Agriculture",
    description:
      "Agricultural development, farming operations, food production, and agribusiness opportunities.",
    image: "/images/farming.jpg",
  },
  {
    title: "Foreign Business Partnerships",
    description:
      "Connecting businesses to international partners, opportunities, trade networks, and collaborations.",
    image: "/images/partnership.avif",
  },
  {
    title: "Heavy Transport & Equipment",
    description:
      "Heavy truck transportation, equipment logistics, machinery movement, and haulage solutions.",
    image: "/images/tippingtruck.jpg",
  },
  {
    title: "24/7 Electricity Project",
    description:
      "Solar reform, standby power systems, and dependable electricity solutions for homes and businesses.",
    image: "/images/solar.jpg",
  },
  {
    title: "Wine and Beer Products",
    description:
      "",
    image: "/images/wine-beer.avif",
  },
];

const Services = () => {
  return (
    <main className="overflow-hidden bg-white pt-20">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-customGreen px-6 py-20 md:px-16 lg:px-32 lg:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[42px] border-customYellow/30" />

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <Reveal x={-40} y={0}>
            <p className="text-[11px] font-extrabold tracking-[0.18em] text-customYellow">
              OUR SERVICES
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[0.96] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              Diverse solutions.{" "}
              <span className="text-customYellow">One trusted partner.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              Adetik 101 MultiNational Links Limited delivers practical
              solutions across construction, infrastructure, power,
              agriculture, trade, logistics, and business partnerships.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex rounded-full bg-customYellow px-7 py-4 text-xs font-bold text-black transition hover:-translate-y-1 hover:bg-white"
            >
              Make an Enquiry
            </Link>
          </Reveal>

          <Reveal
            x={40}
            y={0}
            delay={0.15}
            className="relative hidden lg:block"
          >
            <div className="absolute -bottom-5 -left-5 h-24 w-24 bg-customBlue" />

            <img
              src="/images/engineer.jpg"
              alt="Engineering and construction team at work"
              className="relative z-10 h-[380px] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 md:px-16 lg:px-32 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-[11px] font-extrabold tracking-[0.18em] text-customBlue">
              OUR CAPABILITIES
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-black sm:text-4xl lg:text-5xl">
              Solutions designed to move your{" "}
              <span className="text-customGreen">business forward.</span>
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                as="article"
                key={service.title}
                delay={(index % 3) * 0.08}
                className="group relative min-h-[360px] overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* <div className="absolute left-0 top-0 bg-customYellow px-4 py-3 text-xs font-extrabold text-black">
                  {String(index + 1).padStart(2, "0")}
                </div> */}

                <div className="absolute bottom-0 left-0 p-7 text-white sm:p-8">
                  <div className="h-1 w-12 bg-customYellow" />

                  <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-[-0.04em]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-customBlue px-6 py-20 text-center md:px-16 lg:px-32 lg:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <p className="text-[11px] font-extrabold tracking-[0.18em] text-customYellow">
            LET’S WORK TOGETHER
          </p>

          <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            Need a solution tailored to your needs?
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-white/85 sm:text-base">
            Speak with our team about your next construction, trade, energy,
            logistics, agricultural, or business project.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-customYellow px-8 py-4 text-xs font-bold text-black transition hover:-translate-y-1 hover:bg-white"
          >
            Contact Us Today
          </Link>
        </Reveal>
      </section>
    </main>
  );
};

export default Services;