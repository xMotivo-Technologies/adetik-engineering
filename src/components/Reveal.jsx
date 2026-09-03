import React from "react";
import { motion } from "framer-motion";

const Reveal = ({
  children,
  as = "div",
  delay = 0,
  x = 0,
  y = 40,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className = "",
  ...props
}) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;
