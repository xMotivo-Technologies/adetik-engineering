import React from "react";
import { Link } from "react-router";
import Reveal from "../components/Reveal";

const equipment = [
  {
    number: "1",
    category: "Earthmoving & Marine",
    title: "Built for demanding terrain and waterways.",
    image: "/images/swampbuggy.jpg",
    items: [
      "Caterpillar Excavators (Swamp Buggies)",
      'Dredgers (18", 16", 24")',
      "Tug-Boats & Barges",
      "D6 Caterpillar Bulldozers",
    ],
    color: "bg-customGreen",
  },
  {
    number: "2",
    category: "Piling & Lifting",
    title: "Heavy-duty lifting and foundation support.",
    image: "/images/pilingrig.jpg",
    items: [
      "Piling Rigs",
      "Air Hammers",
      "American Hoist Cranes",
      "Grabbing Cranes",
      "Pettibone Pipe Handlers",
    ],
    color: "bg-customBlue",
  },
  {
    number: "3",
    category: "Compaction & Paving",
    title: "Precision equipment for reliable groundworks.",
    image: "/images/rollers.jpg",
    items: [
      "20–30T Vibrating Rollers",
      "Hand-held Rollers",
      "Model 906 Caterpillar Pay Loaders",
    ],
    color: "bg-customYellow",
  },
  {
    number: "4",
    category: "General Site Fleet",
    title: "A versatile fleet for seamless site delivery.",
    image: "/images/tippingtruck.jpg",
    items: [
      "Low Bed Trailers",
      "Tipping Trucks (15T & 30T)",
      "4x4 Pickups",
      "Soil Drilling Tripods",
      "Concrete Mixers",
      "Air Compressors & Welding Plants",
    ],
    color: "bg-customGreen",
  },
];

const PlantEquipment = () => {
  return (
    <main className="overflow-hidden bg-white pt-10">
      {/* Page heading */}
      <section className="px-6 pb-16 pt-16 text-center md:px-16 lg:px-32 lg:pb-24">
        <Reveal className="mx-auto max-w-4xl">
          <p className="text-[11px] font-extrabold tracking-[0.18em] text-customBlue">
            PLANT & EQUIPMENT
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-black lg:text-5xl">
            Equipped to <span className="text-customGreen">deliver.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base">
            Our extensive plant and equipment fleet enables safe, efficient,
            and dependable execution across marine, civil, construction, and
            industrial projects.
          </p>
        </Reveal>
      </section>

      {/* Equipment cards */}
      <section className="px-6 pb-24 md:px-16 lg:px-32 lg:pb-32">
        <div className="mx-auto grid max-w-[1440px] gap-6 md:grid-cols-2">
          {equipment.map((item, index) => (
            <Reveal
              as="article"
              key={item.number}
              delay={(index % 2) * 0.15}
              className="group overflow-hidden border border-black/15 bg-white"
            >
              <div className="relative h-[300px] overflow-hidden sm:h-[370px]">
                <img
                  src={item.image}
                  alt={item.category}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                <span
                  className={`absolute left-0 top-0 px-6 py-4 text-xs font-extrabold text-white ${item.color}`}
                >
                  {item.number}
                </span>

                <div className="absolute bottom-0 left-0 p-7 text-white sm:p-9">
                  <p className="text-[11px] font-extrabold tracking-[0.15em] text-customYellow">
                    {item.category.toUpperCase()}
                  </p>

                  <h2 className="mt-3 max-w-md text-2xl font-semibold leading-tight tracking-[-0.04em] lg:text-3xl">
                    {item.title}
                  </h2>
                </div>
              </div>

              <div className="p-7 sm:p-9">
                <div className={`mb-6 h-1 w-14 ${item.color}`} />

                <ul className="space-y-3">
                  {item.items.map((equipmentItem) => (
                    <li
                      key={equipmentItem}
                      className="flex items-start gap-3 text-xs leading-relaxed text-black/70 sm:text-sm"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-customBlue" />
                      {equipmentItem}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-customGreen/20 pt-10 text-center md:flex-row md:text-left">
          <p className="max-w-xl text-base font-bold leading-relaxed text-black sm:text-lg">
            Need specialised plant and equipment for your next project?
          </p>

          <a
            href="https://wa.me/2349023942560"
            target="_blank`"
            className="rounded-full border-2 border-customGreen bg-customGreen px-8 py-4 text-xs font-bold text-white transition hover:-translate-y-1 hover:border-customYellow hover:bg-customYellow hover:text-black"
          >
            Request a Quote
          </a>
        </Reveal>
      </section>
    </main>
  );
};

export default PlantEquipment;