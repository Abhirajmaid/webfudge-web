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
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    author: "Catherine",
    location: "New York",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    author: "Jane Foster",
    location: "New York",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    author: "Marcus",
    location: "San Diego",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    author: "Ava",
    location: "Toronto",
    image: "https://i.pravatar.cc/150?img=9"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    author: "Noah",
    location: "London",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    author: "Maya",
    location: "Sydney",
    image: "https://i.pravatar.cc/150?img=6"
  },
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
  const baseVelocity = direction === "left" ? 50 : -50;

  const velocityFactor = useMotionValue(1);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);

  useEffect(() => {
    if (isHovered) {
      animate(velocityFactor, 0, { duration: 1.5, ease: "easeOut" });
    } else {
      animate(velocityFactor, 1, { duration: 0.5, ease: "easeIn" });
    }
  }, [isHovered, velocityFactor]);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000) * velocityFactor.get();

    if (direction === "right") {
      moveBy = Math.abs(baseVelocity) * (delta / 1000) * velocityFactor.get();
    } else {
      moveBy = -Math.abs(baseVelocity) * (delta / 1000) * velocityFactor.get();
    }

    let newX = x.get() + moveBy;

    if (scrollerRef.current) {
      const contentWidth = scrollerRef.current.scrollWidth / 2;

      if (direction === "left") {
        if (newX <= -contentWidth) {
          newX = 0;
        }
      } else {
        if (newX >= 0) {
          newX = -contentWidth;
        }
      }
    }

    x.set(newX);
  });

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
  image,
}: {
  quote: string;
  author: string;
  location: string;
  image: string;
}) {
  return (
    <div className="relative w-[600px] shrink-0 rounded-[32px] bg-[#222] p-8 transition-colors duration-300 hover:bg-[#2a2a2a] flex flex-row items-center gap-8">
      {/* Left Side: Image & Info */}
      <div className="flex flex-col items-center justify-center min-w-[140px] gap-4">
        <div className="relative w-28 h-28 rounded-full p-[4px] bg-gradient-to-b from-[#d946ef] to-[#9333ea]">
          <div className="w-full h-full rounded-full bg-[#222] p-[3px]">
            <img
              src={image}
              alt={author}
              className="w-full h-full rounded-full object-cover grayscale"
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-white">{author}</h3>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>

      {/* Right Side: Quote */}
      <div className="flex flex-col justify-between h-full flex-1 relative">
        <p className="text-gray-300 text-lg leading-relaxed font-light">
          {quote}
        </p>
        <div className="flex justify-end mt-4">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 opacity-50">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}





