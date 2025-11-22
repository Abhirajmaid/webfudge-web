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
          className="rounded-full bg-[#9d00ff] px-8 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(157,0,255,0.5)] transition hover:bg-[#b000ff] hover:shadow-[0_0_30px_rgba(157,0,255,0.7)]"
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
          <span className="text-white">,</span>{" "}
          <span className="relative inline-block leading-none">
            <span className="relative z-10 font-semibold text-white">Design</span>
            {/* Top Light Stick - Overshooting */}
            <div
              className="absolute -top-[0px] left-[-20%] h-[2px] w-[140%] opacity-100"
              style={{
                background: "linear-gradient(90deg, transparent 0%, #ffffff 20%, #ffffff 80%, transparent 100%)",
              }}
            />
            {/* Bottom Light Stick - Overshooting differently */}
            <div
              className="absolute -bottom-[0px] left-[-10%] h-[2px] w-[120%] opacity-100"
              style={{
                background: "linear-gradient(90deg, transparent 0%, #ffffff 20%, #ffffff 80%, transparent 100%)",
              }}
            />
            {/* Left Light Stick - Overshooting vertically */}
            <div
              className="absolute left-[0px] top-[-30%] h-[160%] w-[2px] opacity-100"
              style={{
                background: "linear-gradient(180deg, transparent 0%, #ffffff 20%, #ffffff 80%, transparent 100%)",
              }}
            />
            {/* Right Light Stick - Overshooting vertically differently */}
            <div
              className="absolute right-[0px] top-[-15%] h-[130%] w-[2px] opacity-100"
              style={{
                background: "linear-gradient(180deg, transparent 0%, #ffffff 20%, #ffffff 80%, transparent 100%)",
              }}
            />
          </span>{" "}
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
            className="rounded-xl bg-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-black transition hover:bg-gray-200"
          >
            CONNECT WITH US
          </Link>
          <Link
            href="/about"
            className="rounded-xl border border-white/50 bg-white/10 px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white/20 hover:border-white"
          >
            KNOW US
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

      {/* Dome Gradient - Brighter top, fading bottom, wider, glowing */}
      <div className="absolute bottom-[-10%] left-1/2 z-0 h-[500px] w-[120%] max-w-[1400px] -translate-x-1/2 rounded-t-[100%] bg-gradient-to-b from-[#d400ff] via-[#d400ff]/40 to-transparent opacity-50 blur-[100px]" />

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

      {/* Background Asterisks - Using SVG for 6-leg shape */}
      <div className="pointer-events-none absolute -left-24 top-[15%] z-0 opacity-20 blur-[40px]">
        <AsteriskIcon className="h-[500px] w-[500px] text-[#d400ff]" />
      </div>
      <div className="pointer-events-none absolute -right-32 top-[30%] z-0 opacity-20 blur-[50px]">
        <AsteriskIcon className="h-[600px] w-[600px] text-[#b300ff]" />
      </div>
    </>
  );
}

function AsteriskIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 2.00006L11 10.0001L4.07184 6.00006L3.07184 7.73211L10 11.7321L3.07184 15.7321L4.07184 17.4642L11 13.4642L11 21.4642H13L13 13.4642L19.9282 17.4642L20.9282 15.7321L14 11.7321L20.9282 7.73211L19.9282 6.00006L13 10.0001L13 2.00006H11Z" />
    </svg>
  );
}
