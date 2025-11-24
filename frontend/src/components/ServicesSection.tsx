"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const designServices = [
  "Logo and Branding",
  "UI/UX",
  "Graphic Design",
  "Presentation",
  "Social Media Management",
];

const developmentServices = [
  "Website Development",
  "E-commerce Web Development",
  "Custom Software Development",
];

export default function ServicesSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 text-white bg-black">
      <div className="relative mx-auto max-w-5xl">
        {/* Outer Card */}
        <div className="relative overflow-hidden rounded-[48px] bg-[#0a0a0a] p-8 md:p-16 border border-white/5">
          {/* Background Gradient for Outer Card */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-black pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Pill Badge */}
            <div className="mb-8 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white" />
                <span className="text-xs font-medium uppercase tracking-widest text-white/80">Services</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl tracking-tight mb-4">
              Everything You Need to
              <br />
              <span className="text-white">Build a Standout Brand</span>
            </h2>

            {/* Subtitle */}
            <p className="mx-auto max-w-2xl text-center text-sm text-white/40 md:text-base leading-relaxed mb-16">
              We go beyond visuals to craft memorable brand experiences.
              <br className="hidden md:block" />
              By combining design, storytelling, and digital innovation, we help your brand connect, inspire, and stay unforgettable.
            </p>

            {/* Inner Cards Container (Restored) */}
            <div className="grid gap-8 w-full">
              {/* Design Card */}
              <SpotlightCard title="Design" services={designServices} />

              {/* Development Card */}
              <SpotlightCard title="Development" services={developmentServices} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpotlightCard({ title, services }: { title: string; services: string[] }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-[#0a0a0a] p-8 md:p-12 transition-colors duration-500"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(176,0,255,0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            {title}
          </h3>
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
            <ArrowIcon className="w-4 h-4 text-white/50 transition-colors duration-300 group-hover:text-white" />
          </div>
        </div>

        <div className="space-y-2">
          {services.map((service) => (
            <ServiceItem key={service} text={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ text }: { text: string }) {
  return (
    <motion.div
      className="group/item relative flex items-center justify-between py-4 overflow-hidden cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      {/* Light String Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80 group-hover/item:opacity-100 transition-all duration-300" />

      {/* Morphing Background Reveal */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#b000ff]/10 to-transparent"
        variants={{
          initial: { x: "-100%" },
          hover: { x: "0%" },
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Custom easing for "morph" feel
      />

      <motion.span
        className="relative z-10 text-lg md:text-xl text-white/60 transition-colors duration-300 group-hover/item:text-white pl-2"
        variants={{
          initial: { x: 0 },
          hover: { x: 10 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {text}
      </motion.span>

      <motion.div
        className="relative z-10 pr-2"
        variants={{
          initial: { opacity: 0, x: -10 },
          hover: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.2 }}
      >
        <ArrowIcon className="w-4 h-4 text-[#b000ff]" />
      </motion.div>
    </motion.div>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
