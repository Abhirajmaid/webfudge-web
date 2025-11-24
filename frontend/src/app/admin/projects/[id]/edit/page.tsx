"use client";

import AdminShell from "@/components/admin/AdminShell";
import { useParams } from "next/navigation";
import { useState } from "react";

const mockProject = {
  title: "Pluto Wallet 3.0",
  client: "Pluto Finance",
  service: "Web Development",
  industry: "Fintech",
  heroTagline: "The neon wallet stack for Gen-Z investors",
  summary:
    "Rebuilt the entire financial dashboard with motion-rich interactions and instant onboarding flows.",
  problem:
    "Traditional wallet apps felt cold and corporate, losing younger investors.",
  solution:
    "Crafted a cinematic dashboard with real-time gradients, onboarding flows, and trust indicators.",
  heroColor: "#ff7b54",
  status: "Development",
  teamSize: "7 specialists",
  timelineStart: "2025-09-02",
  timelineEnd: "2025-11-01",
  deliverables: "Product strategy\nUI system\nDesign-to-code kit",
  technologies: "Next.js, Typescript, WebGL, Supabase",
  liveUrl: "https://pluto.example.com",
  repoUrl: "https://github.com/halo/pluto",
  deckUrl: "#",
  shotsUrl: "https://dribbble.com/halo",
  videoDemo: "https://youtu.be/demo",
  testimonialQuote:
    "Halo Lab took our chaotic 1.0 and turned it into a cinematic banking experience.",
  testimonialAuthor: "Nova Keane",
  testimonialRole: "CPO, Pluto",
  metrics: "+214% signup velocity, +41 NPS",
  seoKeywords: "wallet design, neon ux, crypto onboarding",
};

export default function AdminProjectsEditPage() {
  const { id } = useParams();
  const [form, setForm] = useState(mockProject);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Project ${id} updated!`);
  };

  return (
    <AdminShell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Edit Project
          </p>
          <h1 className="text-4xl font-bold text-white">
            {id} • {form.title}
          </h1>
        </div>
        <button className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white">
          Preview Showcase Card
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-white/70">
              Title
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-white/70">
              Client
            </label>
            <input
              name="client"
              value={form.client}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: "Service", name: "service" },
            { label: "Industry", name: "industry" },
            { label: "Status", name: "status" },
          ].map((field) => (
            <div key={field.name}>
              <label className="text-sm font-semibold text-white/70">
                {field.label}
              </label>
              <input
                name={field.name}
                value={(form as Record<string, string | boolean>)[field.name] as string}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              />
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-white/70">
              Hero Tagline
            </label>
            <input
              name="heroTagline"
              value={form.heroTagline}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-white/70">
              Hero Color
            </label>
            <input
              type="color"
              name="heroColor"
              value={form.heroColor}
              onChange={handleChange}
              className="mt-2 h-12 w-full rounded-2xl border-0 bg-black/40"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            { label: "Timeline Start", name: "timelineStart", type: "date" },
            { label: "Timeline End", name: "timelineEnd", type: "date" },
          ].map((field) => (
            <div key={field.name}>
              <label className="text-sm font-semibold text-white/70">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={(form as Record<string, string | boolean>)[field.name] as string}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              />
            </div>
          ))}
        </div>

        <div>
          <label className="text-sm font-semibold text-white/70">
            Hero Summary
          </label>
          <textarea
            name="summary"
            value={form.summary}
            onChange={handleChange}
            rows={4}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-white/70">
              Problem / Opportunity
            </label>
            <textarea
              name="problem"
              value={form.problem}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-white/70">
              Solution Narrative
            </label>
            <textarea
              name="solution"
              value={form.solution}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-white/70">
              Deliverables
            </label>
            <textarea
              name="deliverables"
              value={form.deliverables}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-white/70">
              Tech Stack / Tools
            </label>
            <textarea
              name="technologies"
              value={form.technologies}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.4em] text-white/50">
              Assets & Links
            </h3>
            {["liveUrl", "repoUrl", "deckUrl", "shotsUrl", "videoDemo"].map(
              (field) => (
                <div key={field}>
                  <label className="text-sm font-semibold text-white/70">
                    {field}
                  </label>
                  <input
                    name={field}
                    value={(form as Record<string, string | boolean>)[field] as string}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
                  />
                </div>
              ),
            )}
          </div>
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.4em] text-white/50">
              Testimonial & Metrics
            </h3>
            <textarea
              name="testimonialQuote"
              value={form.testimonialQuote}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="testimonialAuthor"
                value={form.testimonialAuthor}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              />
              <input
                name="testimonialRole"
                value={form.testimonialRole}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              />
            </div>
            <input
              name="metrics"
              value={form.metrics}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
            <input
              name="seoKeywords"
              value={form.seoKeywords}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-4">
          <button
            type="button"
            className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white"
          >
            Duplicate
          </button>
          <button
            type="submit"
            className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:scale-[1.01]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </AdminShell>
  );
}

