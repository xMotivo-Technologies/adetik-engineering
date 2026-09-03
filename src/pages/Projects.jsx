import React from "react";
import { Link } from "react-router";
import Reveal from "../components/Reveal";

const projects = [
  {
    number: "1",
    title: "Dam Construction",
    category: "Water Infrastructure",
    image: "/images/dam.png",
  },
  {
    number: "2",
    title: "Residential Construction",
    category: "Building & Structures",
    image: "/images/residential.png",
  },
  {
    number: "3",
    title: "Estate Construction",
    category: "Real Estate Development",
    image: "/images/estate.png",
  },
  {
    number: "4",
    title: "Road Construction",
    category: "Highways & Roads",
    image: "/images/road2.png",
  },
  {
    number: "5",
    title: "Power House Construction",
    category: "Power Infrastructure",
    image: "/images/powerhouse.png",
  },
  {
    number: "6",
    title: "Office Construction",
    category: "Commercial Development",
    image: "/images/office.png",
  },
  {
    number: "7",
    title: "Bridge Construction",
    category: "Civil Infrastructure",
    image: "/images/bridge.png",
  },
  {
    number: "8",
    title: "Luxury Residential Construction",
    category: "Premium Development",
    image: "/images/luxury-residential.png",
  },
  {
    number: "9",
    title: "Educational Building Construction",
    category: "Education Development",
    image: "/images/education.png",
  },
];

const Projects = () => {
  return (
    <main className="overflow-hidden bg-white pt-10">
      {/* Page intro */}
      <section className="px-6 pb-16 pt-16 text-center md:px-16 lg:px-32 lg:pb-24">
        <Reveal className="mx-auto max-w-4xl">
          <p className="text-[11px] font-extrabold tracking-[0.18em] text-customBlue">
            OUR PROJECTS
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-black lg:text-5xl">
            Built to make a{" "}
            <span className="text-customGreen">lasting impact.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base">
            We deliver quality infrastructure, commercial developments, and
            residential projects with precision, safety, and lasting value.
          </p>
        </Reveal>
      </section>

      {/* Featured project */}
      <Reveal as="section" className="px-6 pb-20 md:px-16 lg:px-32 lg:pb-28">
        <div className="mx-auto grid max-w-[1440px] overflow-hidden bg-customGreen lg:grid-cols-2">
          <div className="relative min-h-[380px]">
            <img
              src="/images/featuredproject.png"
              alt="Large scale civil engineering project"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          </div>

          <div className="flex flex-col justify-center p-8 text-white sm:p-14 lg:p-16">
            <p className="text-[11px] font-extrabold tracking-[0.18em] text-customYellow">
              FEATURED PROJECT
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] lg:text-5xl">
              Engineering progress from the ground up.
            </h2>

            <p className="mt-7 max-w-lg leading-relaxed text-white/90">
              Our multidisciplinary capability allows us to manage complex
              projects from planning and design through construction, delivery,
              and long-term maintenance.
            </p>

            <Link
              to="/contact"
              className="mt-9 w-fit rounded-full border-2 border-customYellow bg-customYellow px-7 py-4 text-xs font-bold text-black transition hover:-translate-y-1 hover:bg-customBlue hover:text-white"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Project gallery */}
      <section className="px-6 py-16 md:px-16 lg:px-32 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-extrabold tracking-[0.18em] text-customBlue">
                PROJECT PORTFOLIO
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-black lg:text-5xl">
                Work that speaks for itself.
              </h2>
            </div>

            <p className="max-w-md text-xs leading-relaxed text-black/65 sm:text-right">
              Explore the sectors where our people, equipment, and technical
              expertise create practical results.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal
                as="article"
                key={project.number}
                delay={(index % 3) * 0.1}
                className="group relative min-h-[390px] overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <span className="absolute left-0 top-0 bg-customYellow px-5 py-3 text-xs font-extrabold text-black">
                  {project.number}
                </span>

                <div className="absolute bottom-0 left-0 p-7 text-white sm:p-8">
                  <p className="text-[11px] font-extrabold tracking-[0.14em] text-customYellow">
                    {project.category.toUpperCase()}
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.04em]">
                    {project.title}
                  </h3>

                  <span className="mt-5 inline-block border-b-2 border-customYellow pb-1 text-xs font-bold transition group-hover:text-customYellow">
                    View Project
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team on site */}
      <section className="mt-24 bg-customBlue px-6 py-20 md:px-16 lg:px-32 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal x={-40} y={0} className="text-white">
            <p className="text-[11px] font-extrabold tracking-[0.18em] text-customYellow">
              OUR PEOPLE ON SITE
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1] tracking-[-0.05em] lg:text-5xl">
              The right team behind every successful project.
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
              From engineers and project managers to skilled site personnel,
              our team works collaboratively to deliver projects safely, on
              schedule, and to the highest standard.
            </p>

            <Link
              to="/team"
              className="mt-9 inline-flex rounded-full border-2 border-customYellow bg-customYellow px-7 py-4 text-xs font-bold text-black transition hover:-translate-y-1 hover:bg-customGreen hover:text-white"
            >
              Meet Our Team
            </Link>
          </Reveal>

          <Reveal x={40} y={0} delay={0.15} className="relative">
            <div className="absolute -bottom-5 -right-5 h-32 w-32 bg-customYellow" />
            <img
              src="/images/teamwork.png"
              alt="Engineering team at a construction site"
              className="relative z-10 h-[400px] w-full object-cover sm:h-[500px]"
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Projects;