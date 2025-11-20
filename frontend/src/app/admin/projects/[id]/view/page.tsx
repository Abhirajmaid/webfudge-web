"use client";

import AdminShell from "@/components/admin/AdminShell";
import { useParams } from "next/navigation";

const showcaseProject = {
  title: "Visionary Commerce Stack",
  heroTagline: "Neon-fueled funnel for hybrid SaaS launches",
  summary:
    "We architected a neon-grade commerce engine merging marketing, web app flows, and influencer activations into one storyline. The hero motion system and live data dashboards boosted trust for enterprise buyers while keeping the vibe bold enough for Gen-Z launch events.",
  problem:
    "Enterprise buyers were lost between a dated marketing site and disjointed creator campaigns.",
  solution:
    "Unified product, marketing, and influencer surfaces with live metrics, cinematic gradients, and modular content blocks.",
  deliverables: ["Product story", "Design system", "Web app build", "Influencer kit"],
  technologies: ["Next.js", "WebGL", "Supabase", "HubSpot", "Webflow"],
  liveUrl: "https://visionary.example.com",
  videoDemo: "https://youtu.be/demo",
  testimonial: {
    quote:
      "Halo Lab choreographed our entire go-to-market. Investors, users, creators—everyone saw the same premium story.",
    author: "Sarai Bloom",
    role: "CEO, Visionary",
  },
  metrics: ["$820k ARR influenced", "420 qualified demos", "2.8s LCP", "92 creator assets"],
  shotsUrl: "https://dribbble.com/halo",
  deckUrl: "#",
  launchDate: "Oct 24, 2025",
  pod: "Full-stack Web",
  influencers: "18 creators",
  coreKpi: "+214% demo bookings",
};

export default function AdminProjectsViewPage() {
  const { id } = useParams();

  return (
    <AdminShell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Project Overview
          </p>
          <h1 className="text-4xl font-bold text-white">
            {id} • Visionary Commerce Stack
          </h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white">
            Export Case Study
          </button>
          <button className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
            Share Preview
          </button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">
            {showcaseProject.heroTagline}
          </p>
          <p className="text-white/80">{showcaseProject.summary}</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                Problem
              </p>
              <p className="mt-2 text-white/80">{showcaseProject.problem}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                Solution
              </p>
              <p className="mt-2 text-white/80">{showcaseProject.solution}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-purple-500/40 bg-purple-500/10 p-6">
            <p className="text-sm uppercase tracking-[0.4em] text-purple-200">
              Tier-1 Metrics
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {showcaseProject.metrics.map((metric) => (
                <div key={metric} className="text-lg font-semibold text-white">
                  {metric}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                Deliverables
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-white/80">
                {showcaseProject.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                Stack
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {showcaseProject.technologies.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-white/80 italic">
              “{showcaseProject.testimonial.quote}”
            </p>
            <p className="mt-3 text-sm text-white/60">
              {showcaseProject.testimonial.author} —{' '}
              {showcaseProject.testimonial.role}
            </p>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-2xl">
          {[
            { label: "Launch Date", value: showcaseProject.launchDate },
            { label: "Primary Pod", value: showcaseProject.pod },
            { label: "Influencers", value: showcaseProject.influencers },
            { label: "Core KPI", value: showcaseProject.coreKpi },
          ].map((block) => (
            <div
              key={block.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                {block.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {block.value}
              </p>
            </div>
          ))}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              Links
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={showcaseProject.liveUrl}
                className="rounded-full border border-white/20 px-4 py-1 text-xs text-emerald-300"
              >
                Live Preview
              </a>
              <a
                href={showcaseProject.videoDemo}
                className="rounded-full border border-white/20 px-4 py-1 text-xs text-white/70"
              >
                Video Demo
              </a>
              <a
                href={showcaseProject.shotsUrl}
                className="rounded-full border border-white/20 px-4 py-1 text-xs text-white/70"
              >
                Shots
              </a>
              <a
                href={showcaseProject.deckUrl}
                className="rounded-full border border-white/20 px-4 py-1 text-xs text-white/70"
              >
                Pitch Deck
              </a>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

