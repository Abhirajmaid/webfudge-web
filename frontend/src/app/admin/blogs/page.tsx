"use client";

import AdminShell from "@/components/admin/AdminShell";
import Link from "next/link";

const posts = [
  {
    id: "BL-88",
    title: "How we grow SaaS signups with neon storytelling",
    author: "Mira Lane",
    status: "Draft",
    updated: "2h ago",
  },
  {
    id: "BL-87",
    title: "Influencer pods vs. traditional campaigns",
    author: "Cam Fox",
    status: "Scheduled",
    updated: "Yesterday",
  },
  {
    id: "BL-86",
    title: "Logo systems that flex from product to merch",
    author: "Vik Rao",
    status: "Published",
    updated: "Nov 04",
  },
];

const statusColors: Record<string, string> = {
  Draft: "bg-yellow-400/20 text-yellow-200 border-yellow-500/40",
  Scheduled: "bg-blue-400/20 text-blue-200 border-blue-500/40",
  Published: "bg-emerald-400/20 text-emerald-200 border-emerald-500/40",
};

export default function AdminBlogsPage() {
  return (
    <AdminShell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Content Lab
          </p>
          <h1 className="text-4xl font-bold text-white">
            Thought leadership ready to publish
          </h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/blogs/new"
            className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:scale-[1.01]"
          >
            + New Article
          </Link>
          <button className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white">
            Bulk Publish
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-4"
            >
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                  {post.id}
                </p>
                <p className="text-xl font-semibold text-white">{post.title}</p>
                <p className="text-sm text-white/60">
                  {post.author} • Updated {post.updated}
                </p>
              </div>
              <span
                className={`rounded-full border px-4 py-1 text-xs font-semibold ${statusColors[post.status]}`}
              >
                {post.status}
              </span>
              <div className="flex gap-2">
                <Link
                  href={`/admin/blogs/${post.id}/edit`}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/70 transition hover:text-white"
                >
                  Edit
                </Link>
                <button className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/70 transition hover:text-white">
                  Publish
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}


