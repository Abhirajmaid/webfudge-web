"use client";

import AdminShell from "@/components/admin/AdminShell";
import { useParams } from "next/navigation";
import { useState } from "react";

const mockPost = {
  title: "Influencer pods vs. traditional campaigns",
  summary:
    "A field guide on structuring creator pods that feel premium, measurable, and on-brand.",
  content:
    "### Why pods win\nThey deliver momentum...\n\n### Metrics you should demand\n1. Consistent CTR...\n",
  status: "Scheduled",
  publishDate: "2025-11-22",
  heroImage: "https://cdn.halo/dribbble/hero.jpg",
  readTime: "7 min",
  tags: "influencers, marketing",
  ctaLabel: "Book a pod",
  ctaUrl: "https://halo.agency/contact",
  seoTitle: "Influencer pods vs campaigns",
  seoDescription: "Learn how pods outperform one-off influencer blasts.",
  socialImage: "https://cdn.halo/social/hero.png",
};

export default function AdminBlogEditPage() {
  const { id } = useParams();
  const [form, setForm] = useState(mockPost);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Blog ${id} updated!`);
  };

  return (
    <AdminShell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Edit blog
          </p>
          <h1 className="text-4xl font-bold text-white">{id}</h1>
        </div>
        <button className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white">
          Preview Article
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
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-white/70">
              Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            >
              {["Draft", "Scheduled", "Published"].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-white/70">
              Publish Date
            </label>
            <input
              type="date"
              name="publishDate"
              value={form.publishDate}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
            />
          </div>
          <div className="flex items-end">
            <button
              type="button"
              className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white"
            >
              Generate excerpt
            </button>
          </div>
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
              Tags
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
            Summary
          </label>
          <textarea
            name="summary"
            value={form.summary}
            onChange={handleChange}
            rows={4}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-purple-400"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-white/70">
            Content
          </label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={12}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 font-mono text-sm text-white outline-none focus:border-purple-400"
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
            Social Image
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
            Archive
          </button>
          <button
            type="submit"
            className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:scale-[1.01]"
          >
            Update Post
          </button>
        </div>
      </form>
    </AdminShell>
  );
}

