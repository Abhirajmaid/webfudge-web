"use client";

import AdminShell from "@/components/admin/AdminShell";
import { useState } from "react";

export default function AdminBlogsNewPage() {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    category: "Marketing",
    author: "Mira Lane",
    publishNow: false,
    content: "",
    heroImage: "",
    readTime: "6 min",
    tags: "",
    ctaLabel: "",
    ctaUrl: "",
    seoTitle: "",
    seoDescription: "",
    socialImage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Blog drafted!");
  };

  return (
    <AdminShell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Compose
          </p>
          <h1 className="text-4xl font-bold text-white">
            Draft a neon-grade POV piece
          </h1>
        </div>
        <button className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white">
          Auto-format
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
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
              placeholder="e.g. Neon UX: How color psychology converts"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-white/70">
              Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            >
              {["Marketing", "Design", "Product", "Influencers"].map(
                (category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ),
              )}
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-white/70">
              Author
            </label>
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
          <div className="flex items-end gap-3">
            <input
              type="checkbox"
              name="publishNow"
              checked={form.publishNow}
              onChange={handleChange}
              className="h-5 w-5 rounded border-white/30 bg-transparent text-purple-500 focus:ring-purple-500"
            />
            <span className="text-sm text-white/70">
              Publish immediately after saving
            </span>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-white/70">
            Summary
          </label>
          <textarea
            name="summary"
            value={form.summary}
            onChange={handleChange}
            rows={3}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            placeholder="One-liner hook for cards and share previews"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-white/70">
              Hero Image URL
            </label>
            <input
              name="heroImage"
              value={form.heroImage}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-white/70">
              Read Time
            </label>
            <input
              name="readTime"
              value={form.readTime}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-white/70">
              Tags (comma separated)
            </label>
            <input
              name="tags"
              value={form.tags}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-white/70">
                CTA Label
              </label>
              <input
                name="ctaLabel"
                value={form.ctaLabel}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-white/70">
                CTA URL
              </label>
              <input
                name="ctaUrl"
                value={form.ctaUrl}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-white/70">
            Long-form Content
          </label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={10}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 font-mono text-sm text-white outline-none focus:border-purple-400"
            placeholder="## Neon UX frameworks..."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-white/70">
              SEO Title
            </label>
            <input
              name="seoTitle"
              value={form.seoTitle}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-white/70">
              SEO Description
            </label>
            <textarea
              name="seoDescription"
              value={form.seoDescription}
              onChange={handleChange}
              rows={3}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-white/70">
            Social Share Image
          </label>
          <input
            name="socialImage"
            value={form.socialImage}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
          />
        </div>

        <div className="flex flex-wrap justify-end gap-4">
          <button
            type="button"
            className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:scale-[1.01]"
          >
            {form.publishNow ? "Publish Now" : "Queue for Review"}
          </button>
        </div>
      </form>
    </AdminShell>
  );
}

