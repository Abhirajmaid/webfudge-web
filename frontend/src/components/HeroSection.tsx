"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const navLinks = ["Home", "Services", "Projects", "About", "Contact"];
const marqueeLogos = ["Webfudge", "Webhound", "Webforge", "Wel Labs", "Vivid AI"];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050505] text-white">
      <BackgroundGlows />

      <nav className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-sm font-medium uppercase tracking-[0.25em] text-white/70">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="relative h-10 w-10">
            <Image
              src="/proxy-image.png"
              alt="Webfudge Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-base font-semibold tracking-[0.4em]">Webfudge</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="transition hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="rounded-full bg-gradient-to-r from-[#d400ff] via-[#f5009b] to-[#ff00d0] px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_10px_40px_rgba(255,0,214,0.35)] transition hover:shadow-[0_10px_45px_rgba(255,0,214,0.55)]"
        >
          Get In Touch
        </Link>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-5xl flex-col items-center px-6 pb-20 pt-10 text-center lg:pt-16">
        <div className="rounded-full border border-white/20 px-8 py-2 text-xs uppercase tracking-[0.6em] text-white/70">
          Webfudge
        </div>

        <h1 className="hero-title mt-8 font-light text-white">
          Where{" "}
          <span className="creative-script text-white">Creativity</span>
          <span className="text-white">,</span>{" "}
          <span className="design-highlight">Design</span>{" "}
          <span className="ampersand-pop">&amp;</span>{" "}
          <span className="font-normal text-white">Tech Blend Perfectly</span>
        </h1>

        <p className="mt-6 max-w-3xl text-base text-white/70 sm:text-lg">
          Welcome to Webfudge, we are a creative agency driven by innovation, design excellence, website development, and a deep
          understanding of digital branding. From startups to established enterprises, we help brands stand out, scale up, and succeed
          online.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
          >
            Connect With Us
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white"
          >
            Know Us
          </Link>
        </div>

        <div className="mt-16 w-full border-t border-white/10 pt-6">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">Trusted by</p>
          <Marquee logos={marqueeLogos} />
        </div>
      </div>
    </section>
  );
}

function Marquee({ logos }: { logos: string[] }) {
  const repeated = useMemo(() => [...logos, ...logos], [logos]);

  return (
    <div className="marquee-mask mt-6">
      <div className="marquee-track">
        {repeated.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex min-w-[160px] items-center justify-center gap-2 px-8 text-sm font-semibold text-white/70"
          >
            <div className="relative h-5 w-5 opacity-40">
              <Image
                src="/proxy-image.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}

function BackgroundGlows() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c0024] via-transparent to-[#050505]" />
      <div className="absolute inset-x-0 bottom-[-30%] h-[40%] bg-gradient-to-t from-[#b300ff33] to-transparent blur-3xl" />

      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 opacity-20 blur-[60px]">
        <Image
          src="/proxy-image.png"
          alt="Glow"
          fill
          className="object-contain"
        />
      </div>
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 opacity-20 blur-[70px]">
        <Image
          src="/proxy-image.png"
          alt="Glow"
          fill
          className="object-contain"
        />
      </div>
    </>
  );
}
