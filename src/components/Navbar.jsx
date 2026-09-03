import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Team", link: "/team" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Equipment", link: "/equipment" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-customGreen/15 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="shrink-0"
        >
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.jpeg"
              alt="Company logo"
              className="h-12 w-auto object-contain md:h-14"
            />

          </Link>
        </motion.div>

        <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
          {menu.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={item.link}
                className="relative text-[10px] font-bold uppercase tracking-[0.1em] text-black transition-colors hover:text-customBlue after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-customYellow after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block"
        >
          <Link
            to="/contact"
            className="inline-flex rounded-full border-2 border-customGreen bg-customGreen px-6 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-customYellow hover:bg-customYellow hover:text-black"
          >
            Request a Quote
          </Link>
        </motion.div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-full border border-customGreen/30 text-customGreen lg:hidden"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <motion.path
              animate={
                open
                  ? { d: "M6 18L18 6M6 6l12 12" }
                  : { d: "M4 6h16M4 12h16M4 18h16" }
              }
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-customGreen/15 bg-white lg:hidden"
          >
            <ul className="mx-auto flex max-w-[1440px] flex-col gap-5 px-6 py-7">
              {menu.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className="block text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:text-customBlue"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-customGreen px-6 py-4 text-center text-[11px] font-bold uppercase tracking-[0.1em] text-white transition hover:bg-customBlue"
              >
                Request a Quote
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;