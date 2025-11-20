"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left purple card */}
          <div className="hero-card p-8 sm:p-10 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur"
            >
              <span className="text-yellow-400 text-xl">🔥</span>
              <span className="text-sm/6 text-white/80">
                12 years of design‑driven growth for B2B products
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06 }}
              className="mt-6 text-[40px] sm:text-[56px] lg:text-[80px] leading-[1.05] font-extrabold tracking-tight"
            >
              <span className="block text-white">DESIGN & TECH</span>
              <span className="block text-white">AGENCY HELPING</span>
              <span className="block text-white">BRANDS BECOME</span>
              <span className="block" style={{ color: "var(--hero-yellow)" }}>TOP 1%</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-12 flex flex-col items-start gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--hero-yellow)] px-6 py-3 text-black font-medium shadow-[0_8px_0_rgba(0,0,0,0.15)] hover:translate-y-0.5 transition"
              >
                <span className="mr-2">⚡</span> BOOK A CALL
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition"
              >
                View projects
              </a>
            </motion.div>

            {/* Inline badge row */}
            <div className="mt-10 flex items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-full bg-white/10 ring-1 ring-white/20">⚡</div>
              <p className="text-white/80 text-sm">12 years of design-driven development for B2B products</p>
            </div>
          </div>

          {/* Right beige media card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-[28px] bg-[#e6dccc] p-4 aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/3]"
          >
            <div className="absolute inset-0 rounded-[28px] ring-1 ring-black/10"></div>
            <div className="relative mx-auto flex h-full w-full items-center justify-center">
              <Image
                src="/window.svg"
                alt="App preview"
                width={240}
                height={240}
                className="opacity-70"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-black/80 text-white shadow-lg"
              aria-label="Play intro video"
            >
              ▶
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* cookie bar */}
      <div className="fixed bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/80 ring-1 ring-white/15 backdrop-blur">
        We use cookies to improve website performance and ensure you get the best experience.
        <button className="ml-3 rounded-full bg-white/20 px-3 py-1">CUSTOMIZE</button>
        <button className="ml-2 rounded-full bg-[var(--hero-yellow)] px-3 py-1 text-black">ACCEPT</button>
      </div>
    </section>
  );
}

