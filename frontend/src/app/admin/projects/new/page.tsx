"use client";

import AdminShell from "@/components/admin/AdminShell";
import { useState } from "react";

const industries = [
  "Fintech",
  "Healthcare",
  "CPG",
  "Education",
  "Lifestyle",
  "Gaming",
];

const services = [
  "Marketing Website",
  "Web App",
  "Influencer Campaign",
  "Branding",
  "Product Strategy",
];

export default function AdminProjectsNewPage() {
  const [form, setForm] = useState({
    title: "",
    client: "",
    service: services[0],
    industry: industries[0],
    heroTagline: "",
    summary: "",
    problem: "",
    solution: "",
    timelineStart: "",
    timelineEnd: "",
    teamSize: "5 specialists",
    heroColor: "#8b5cf6",
    deliverables: "",
    technologies: "",
    liveUrl: "",
    repoUrl: "",
    deckUrl: "",
    shotsUrl: "",
    videoDemo: "",
    testimonialQuote: "",
    testimonialAuthor: "",
    testimonialRole: "",
    metrics: "",
    seoKeywords: "",
    featured: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Project captured! Ready to showcase.");
  };

  return (
    <AdminShell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            New Project
          </p>
          <h1 className="text-4xl font-bold text-white">
            Add a hero project to the showcase grid
          </h1>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-white/70">
              Project Title
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              placeholder="e.g. Lunar Commerce Launch"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-white/70">
              Client / Brand
            </label>
            <input
              name="client"
              value={form.client}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              placeholder="Brand name"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-white/70">
                Service
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-white/70">
                Industry
              </label>
              <select
                name="industry"
                value={form.industry}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-white/70">
                Timeline Start
              </label>
              <input
                type="date"
                name="timelineStart"
                value={form.timelineStart}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-white/70">
                Timeline End
              </label>
              <input
                type="date"
                name="timelineEnd"
                value={form.timelineEnd}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-white/70">
                Team Size
              </label>
              <input
                name="teamSize"
                value={form.teamSize}
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
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-white/70">
                Hero Tagline
              </label>
              <input
                name="heroTagline"
                value={form.heroTagline}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
                placeholder="Blazing-fast wallets for Gen-Z investors"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-white/70">
                Highlight Summary
              </label>
              <textarea
                name="summary"
                value={form.summary}
                onChange={handleChange}
                rows={4}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
                placeholder="Describe the impact, metrics, and creative edge..."
              />
            </div>
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
          </div>
          <div className="space-y-4">
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
            <div>
              <label className="text-sm font-semibold text-white/70">
                Deliverables (one per line)
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
              <input
                name="technologies"
                value={form.technologies}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
                placeholder="Next.js, Webflow, Figma, WebGL..."
              />
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.4em] text-white/50">
              Assets & Links
            </h3>
            {[
              { label: "Live URL", name: "liveUrl" },
              { label: "Github / Repo", name: "repoUrl" },
              { label: "Pitch Deck", name: "deckUrl" },
              { label: "Dribbble Shots URL", name: "shotsUrl" },
              { label: "Video Demo", name: "videoDemo" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-sm font-semibold text-white/70">
                  {field.label}
                </label>
                <input
                  name={field.name}
                  value={(form as any)[field.name]}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
                />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.4em] text-white/50">
              Testimonial & Metrics
            </h3>
            <div>
              <label className="text-sm font-semibold text-white/70">
                Testimonial Quote
              </label>
              <textarea
                name="testimonialQuote"
                value={form.testimonialQuote}
                onChange={handleChange}
                rows={3}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-white/70">
                  Testimonial Author
                </label>
                <input
                  name="testimonialAuthor"
                  value={form.testimonialAuthor}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-white/70">
                  Author Role
                </label>
                <input
                  name="testimonialRole"
                  value={form.testimonialRole}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-white/70">
                Headline Metrics (comma separated)
              </label>
              <input
                name="metrics"
                value={form.metrics}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-white/70">
                SEO Keywords
              </label>
              <input
                name="seoKeywords"
                value={form.seoKeywords}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              />
            </div>
            <label className="mt-2 inline-flex items-center gap-3 text-sm text-white/70">
              <input
                type="checkbox"
                name="featured"
                checked={form.featured}
                onChange={handleChange}
                className="h-5 w-5 rounded border-white/30 bg-transparent text-purple-500 focus:ring-purple-500"
              />
              Feature on homepage hero
            </label>
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-4">
          <button
            type="button"
            className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white"
          >
            Save Draft
          </button>
          <button
            type="submit"
            className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:scale-[1.01]"
          >
            Save Project
          </button>
        </div>
      </form>
    </AdminShell>
  );
}

