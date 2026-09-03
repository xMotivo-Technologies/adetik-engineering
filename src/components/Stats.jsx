import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const useCountUp = (end, duration = 1800) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);

          // Smooth ease-out animation
          const easedProgress = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easedProgress * end));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.4 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return { count, elementRef };
};

const CounterItem = ({ end, label }) => {
  const { count, elementRef } = useCountUp(end);

  return (
    <div ref={elementRef} className="text-center">
      <p className="text-4xl font-medium leading-none tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
        {count}+
      </p>

      {/* <div className="mx-auto mt-3 h-1 w-8 bg-customYellow" /> */}

      <p className="mt-3 text-xs font-medium text-black/70 sm:text-sm">
        {label}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <Reveal as="section" className="bg-black/5 px-6 py-14 md:px-16 lg:px-32">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
        <CounterItem end={75} label="Partners & Clients" />
        <CounterItem end={100} label="Projects Delivered" />
        <CounterItem end={25} label="Expert Engineers" />
      </div>
    </Reveal>
  );
};

export default Stats;