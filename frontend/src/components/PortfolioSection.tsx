"use client";

import Link from "next/link";
import { useMemo } from "react";

const projects = [
  { title: "xrTawrks", category: "Product Design" },
  { title: "Nova Labs", category: "Web Experience" },
  { title: "Flux Media", category: "Campaign" },
  { title: "Pulse Tech", category: "Mobile App" },
  { title: "Lumen Cloud", category: "Platform" },
  { title: "Atlas Studio", category: "Brand Refresh" },
];

export default function PortfolioSection() {
  const rows = useMemo(() => projects, []);

  return (
    <section className="relative isolate overflow-hidden px-6 py-24 text-white">
      <div className="absolute inset-0 rounded-[48px] border border-[#c400ff21] bg-gradient-to-b from-[#1d002d] via-[#050505] to-[#040204] shadow-[0_0_80px_rgba(196,0,255,0.25)]" />
      <div className="absolute inset-x-0 top-10 h-32 bg-gradient-to-b from-[#56007a] via-transparent to-transparent opacity-70 blur-3xl" />
      <div className="relative mx-auto max-w-5xl">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#a100ff] bg-black/40 px-6 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#f200ff]" />
            Portfolio
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg uppercase tracking-[0.4em] text-white/50">A glimpse into</p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Our Creative World</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60">
            A sweet selection of our most beloved projects crafted with heart and originality. Every folder opens up to immersive digital
            experiences that elevate brands across industries.
          </p>
          <Link
            href="/projects"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-[#b600ff] bg-gradient-to-r from-[#f200ff] to-[#9b00ff] px-8 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white shadow-[0_15px_30px_rgba(242,0,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(242,0,255,0.45)]"
          >
            View More Work
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {rows.map((project) => (
            <FolderCard key={project.title} title={project.title} category={project.category} />
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { label: "Projects Delivered", value: "50+" },
            { label: "Clients", value: "20+" },
            { label: "Industries", value: "10+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-[24px] border border-[#b600ff40] bg-black/40 px-6 py-6 text-center shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.35em] text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FolderCard({ title, category }: { title: string; category: string }) {
  return (
    <div className="group relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#111111] to-[#040404] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f200ff1c] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative z-10 flex flex-col gap-4">
        <div className="folder-shell">
          <div className="folder-tab" />
          <div className="folder-body">
            <div className="folder-preview group-hover:translate-y-0 group-hover:scale-100">
              <div className="h-full w-full rounded-[18px] bg-gradient-to-r from-[#ffe0ff] via-[#99c2ff] to-[#ffb4b4] blur-xl" />
            </div>
            <div className="folder-face" />
          </div>
        </div>
        <div className="px-2">
          <p className="text-xl font-semibold text-white">{title}</p>
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">{category}</p>
        </div>
      </div>
    </div>
  );
}





