"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";

const fullText = "Since 2022, we have been turning ideas into real digital experiences that not only look great but also deliver results. We do it all with passion, precision, and purpose.";

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const words = useMemo(() => fullText.split(" "), []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const start = viewHeight * 0.65; // trigger once section center is well within viewport
      const end = -rect.height * 0.25; // finish after paragraph scrolls upward
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const highlightedCount = Math.floor(progress * words.length);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden px-6 py-24 text-white">
      <BackgroundElements />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <SectionTitle title="About Webfudge" />

        <p className="mt-10 text-balance text-3xl leading-snug text-white sm:text-4xl font-medium">
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={`transition-colors duration-300 ${index < highlightedCount ? "text-white" : "text-white/25"}`}
            >
              {word}
              {index < words.length - 1 ? " " : ""}
            </span>
          ))}
          <span className="relative mx-1 inline-flex h-6 w-6 align-middle text-[#ff00d0]">
            <LogoAsterisk />
          </span>
        </p>

        <div className="mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#6f0f67] bg-gradient-to-b from-[#f000ff] to-[#b500d4] px-10 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white shadow-[0_15px_35px_rgba(240,0,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(240,0,255,0.5)]"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

function BackgroundElements() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-[#08000c] via-[#050505] to-[#050505]" />
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#5e0066] via-transparent to-transparent opacity-70 blur-2xl" />
      <LogoAsterisk className="pointer-events-none absolute -left-8 top-24 h-40 w-40 text-[#d10bda1f] blur-[40px]" />
      <LogoAsterisk className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 text-[#8b27ff25] blur-[45px]" />
    </>
  );
}

function LogoAsterisk({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className ?? "h-full w-full"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={10}
      strokeLinecap="round"
    >
      <line x1="48" y1="8" x2="48" y2="88" />
      <line x1="15" y1="25" x2="81" y2="71" />
      <line x1="15" y1="71" x2="81" y2="25" />
    </svg>
  );
}
