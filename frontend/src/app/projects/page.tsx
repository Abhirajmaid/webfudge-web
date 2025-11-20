"use client";

import Link from "next/link";

const showcases = [
  {
    title: "Orbit SaaS Web",
    industry: "SaaS",
    metric: "+214% demos",
    description: "Neon marketing stack synced with sales dashboards.",
    href: "/admin/projects/PRJ-161/view",
  },
  {
    title: "Kony Finance OS",
    industry: "Fintech",
    metric: "Series B ready",
    description: "Web app + influencer launch with premium film aesthetic.",
    href: "/admin/projects/PRJ-183/view",
  },
  {
    title: "Astra Creator Hub",
    industry: "CPG",
    metric: "18 creators",
    description: "Influencer pods, product drops, and shoppable WebGL site.",
    href: "/admin/projects/PRJ-204/view",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#05000d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(147,51,234,0.4),_transparent_40%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
        <header className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.6em] text-white/60">Neon launch gallery</p>
          <h1 className="text-5xl font-black leading-tight">
            Browse the systems, campaigns, and experiences we’ve released into the wild.
          </h1>
          <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.4em] text-white/50">
            {["Fintech", "Healthcare", "CPG", "Education", "Gaming", "Web3"].map((tag) => (
              <span key={tag} className="rounded-full border border-white/20 px-4 py-2">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          {showcases.map((project) => (
            <div key={project.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">{project.industry}</p>
              <h2 className="mt-2 text-2xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-sm text-emerald-300">{project.metric}</p>
              <p className="mt-4 text-white/70">{project.description}</p>
              <Link href={project.href} className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                View build ↗
              </Link>
            </div>
          ))}
        </section>

        <section className="space-y-6 rounded-[32px] border border-white/10 bg-black/30 p-10 backdrop-blur-2xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/50">Need a neon launch?</p>
              <h3 className="text-3xl font-bold">Have a project? Let’s drop your own Halo case study.</h3>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold shadow-lg shadow-purple-500/40"
            >
              Start a project
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}








