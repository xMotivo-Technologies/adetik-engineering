import React from "react";
import Reveal from "../components/Reveal";

const leadership = {
  name: "Engr. Adeleke Matthew",
  role: "Managing Director / C.E.O.",
  credentials:
    "B.Sc. Highway First Class, M.Sc. Civil Engineering; over two decades of experience across 44+ major projects.",
  image: "/images/user.jpg",
};

const team = [
  {
    name: "Emmanuel Adebayo",
    role: "Project Manager",
    credentials: "B.Sc. Building Engineering",
    image: "/images/user.jpg",
  },
  {
    name: "Vivian Afoma Ejiofor",
    role: "Secretary",
    credentials:
      "B.Sc., specialist in International Business Relation Laws and Human Relations",
    image: "/images/user.jpg",
  },
  {
    name: "Uzor Wilson",
    role: "Accountant",
    credentials: "B.Sc. Accountancy",
    image: "/images/user.jpg",
  },
  {
    name: "Musibau Afolabi",
    role: "Public Relations Officer",
    credentials: "B.Sc. Economics",
    image: "/images/user.jpg",
  },
  {
    name: "Adesope Malik John",
    role: "Architect",
    credentials: "B.Sc. Architectural Engineering",
    image: "/images/user.jpg",
  },
  {
    name: "Ilesanmi Hakeem Okanlawon",
    role: "Quantity Surveyor",
    credentials: "B.Sc. & M.Sc. Quantity Surveying, NIQS",
    image: "/images/user.jpg",
  },
  {
    name: "Dr. David Olawale",
    role: "Town Planner / Consultant",
    credentials: "TPL, FNITP, CMILT",
    image: "/images/user.jpg",
  },
  {
    name: "Barrister Anthony Erugbale",
    role: "Company Lawyer / Notary Public",
    credentials: "Legal Counsel",
    image: "/images/user.jpg",
  },
  {
    name: "Amos Temidayo Osaade",
    role: "Electrical / Telecom Engineer",
    credentials: "H.N.D. Industrial Maintenance Engineering",
    image: "/images/user.jpg",
  },
];

const Team = () => {
  return (
    <main className="overflow-hidden bg-white pt-10">
      {/* Page heading */}
      <section className="px-6 pb-20 pt-16 md:px-16 lg:px-32 lg:pb-28">
        <Reveal className="mx-auto max-w-[1440px] text-center">
          <p className="text-[11px] font-extrabold tracking-[0.18em] text-customBlue">
            THE PEOPLE BEHIND THE WORK
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-black lg:text-5xl">
            Meet Our <span className="text-customGreen">Team.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base">
            A multidisciplinary team of experienced professionals committed to
            delivering reliable engineering and construction solutions.
          </p>
        </Reveal>
      </section>

      {/* Managing director */}
      <section className="bg-customGreen px-6 py-12 md:px-16 lg:px-32 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal x={-40} y={0} className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute -left-4 -top-4 h-28 w-28 bg-customYellow" />

            <img
              src={leadership.image}
              alt={leadership.name}
              className="relative z-10 aspect-[4/5] w-full object-cover object-top"
            />
          </Reveal>

          <Reveal x={40} y={0} delay={0.15} className="text-white">
            <p className="text-[11px] font-extrabold tracking-[0.18em] text-customYellow">
              LEADERSHIP
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] lg:text-5xl">
              {leadership.name}
            </h2>

            <p className="mt-4 text-base font-bold text-customYellow">
              {leadership.role}
            </p>

            <p className="mt-7 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
              {leadership.credentials}
            </p>

            <div className="mt-9 flex gap-2">
              <span className="h-1.5 w-14 bg-customYellow" />
              <span className="h-1.5 w-7 bg-customBlue" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team grid */}
      <section className="px-6 py-24 md:px-16 lg:px-32 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-extrabold tracking-[0.18em] text-customBlue">
                OUR PROFESSIONALS
              </p>

              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-black lg:text-5xl">
                Built on expertise.
              </h2>
            </div>

            <p className="max-w-sm text-xs leading-relaxed text-black/65 sm:text-right">
              Our people bring specialised knowledge, integrity, and a shared
              commitment to excellent delivery.
            </p>
          </Reveal>

          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team.map((member, index) => (
              <Reveal
                as="article"
                key={member.name}
                delay={(index % 4) * 0.08}
                className="group"
              >
                <div className="relative overflow-hidden bg-customBlue/10">
                  <span className="absolute left-5 top-4 z-10 text-[11px] font-extrabold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute left-0 top-0 z-10 h-12 w-12 bg-customGreen" />

                  <img
                    src={member.image}
                    alt={member.name}
                    className="aspect-[4/5] w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="border-b border-black/15 py-5 transition group-hover:border-customGreen">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-customBlue">
                    {member.role}
                  </p>

                  <h3 className="mt-2 text-lg font-extrabold tracking-[-0.03em] text-black">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-black/65">
                    {member.credentials}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;