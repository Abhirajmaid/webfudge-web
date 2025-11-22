"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  animate,
} from "framer-motion";
import SectionTitle from "./SectionTitle";

const testimonials = [
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", author: "Elizabeth", location: "Chicago" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", author: "Catherine", location: "New York" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", author: "Marcus", location: "San Diego" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", author: "Ava", location: "Toronto" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", author: "Noah", location: "London" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", author: "Maya", location: "Sydney" },
];

const row1 = testimonials.slice(0, 3);
const row2 = testimonials.slice(3, 6);

export default function ReviewsSection() {
  return (
    <section className="relative isolate overflow-hidden py-24 text-white bg-black">
      <div className="relative mx-auto max-w-full">
        <div className="flex justify-center mb-12">
          <SectionTitle title="Testimonials" />
        </div>

        <div className="text-center mb-16 px-6">
          <p className="text-xl font-semibold text-white/60">Hear it from the</p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl mt-2">People Who Matter</h2>
        </div>

        <div className="flex flex-col gap-12">
          {/* Row 1: Left to Right (Upper 3) */}
          <MarqueeRow items={row1} direction="right" />

          {/* Row 2: Right to Left (Lower 3) */}
          <MarqueeRow items={row2} direction="left" />
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction }: { items: typeof testimonials; direction: "left" | "right" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Speed configuration
  const baseVelocity = direction === "left" ? 50 : -50; // Pixels per second (negative for right-to-left visual if we use negative x)
  // Wait, if direction is "right" (Left -> Right), we want positive velocity?
  // Let's stick to: "left" means moving towards left (translateX decreases). "right" means moving towards right (translateX increases).

  const velocityFactor = useMotionValue(1);
  const [isHovered, setIsHovered] = useState(false);

  // We use a motion value for x position to avoid React renders on every frame
  const x = useMotionValue(0);

  useEffect(() => {
    if (isHovered) {
      // Slow down to 0 over 1.5 seconds
      animate(velocityFactor, 0, { duration: 1.5, ease: "easeOut" });
    } else {
      // Speed up back to 1 quickly
      animate(velocityFactor, 1, { duration: 0.5, ease: "easeIn" });
    }
  }, [isHovered, velocityFactor]);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000) * velocityFactor.get();

    // Reverse direction logic if needed
    if (direction === "right") {
      moveBy = Math.abs(baseVelocity) * (delta / 1000) * velocityFactor.get();
    } else {
      moveBy = -Math.abs(baseVelocity) * (delta / 1000) * velocityFactor.get();
    }

    let newX = x.get() + moveBy;

    // Wrap logic
    // We assume the content is duplicated enough to cover the screen.
    // If we move too far, reset.
    // Since we don't have exact width measurements easily without layout effects, 
    // we can use percentage if we are careful, or just a large number reset.
    // Better: Measure scroller width.

    if (scrollerRef.current) {
      const contentWidth = scrollerRef.current.scrollWidth / 2; // We duplicated items, so half is the "real" width

      if (direction === "left") {
        // Moving left (negative x)
        if (newX <= -contentWidth) {
          newX = 0;
        }
      } else {
        // Moving right (positive x)
        // We start at -contentWidth and move to 0? Or start at 0 and move to width?
        // Usually for L->R marquee, we start at -contentWidth and move towards 0.
        if (newX >= 0) {
          newX = -contentWidth;
        }
      }
    }

    x.set(newX);
  });

  // Initial position for Right direction should be offset to allow moving right
  useEffect(() => {
    if (direction === "right" && scrollerRef.current) {
      const contentWidth = scrollerRef.current.scrollWidth / 2;
      x.set(-contentWidth);
    }
  }, [direction]);

  return (
    <div
      className="relative w-full overflow-hidden"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />

      <motion.div
        className="flex w-max gap-8 py-4"
        ref={scrollerRef}
        style={{ x }}
      >
        {/* Render items multiple times to ensure seamless loop */}
        {[...items, ...items, ...items, ...items].map((testimonial, idx) => (
          <TestimonialCard key={`${testimonial.author}-${idx}`} {...testimonial} />
        ))}
      </motion.div>
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  location,
}: {
  quote: string;
  author: string;
  location: string;
}) {
  return (
    <div className="relative w-[400px] shrink-0 rounded-[24px] border border-white/10 bg-[#0a0a0a] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:border-[#b000ff]/50 hover:bg-[#111]">
      <div className="flex items-center gap-1 text-[#b000ff]">
        {Array.from({ length: 5 }).map((_, idx) => (
          <span key={idx}>★</span>
        ))}
      </div>
      <p className="mt-6 text-base leading-relaxed text-white/80">"{quote}"</p>
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <div>
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-white/50">{location}</p>
        </div>
        <div className="h-8 w-8 rounded-full bg-white/5" />
      </div>
    </div>
  );
}





