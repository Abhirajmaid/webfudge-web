"use client";

import AdminShell from "@/components/admin/AdminShell";
import { useParams } from "next/navigation";

export default function AdminBlogViewPage() {
  const { id } = useParams();

  return (
    <AdminShell>
      <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">
          Preview Mode
        </p>
        <h1 className="mt-2 text-4xl font-bold text-white">
          {id} • Neon UX: How color psychology converts
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-white/60">
          <span>by Mira Lane</span>•<span>6 min read</span>•<span>Draft ready</span>
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/50">
            Marketing
          </span>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <div className="h-64 bg-gradient-to-r from-purple-500 to-pink-500" />
        </div>

        <article className="prose prose-invert mt-4 max-w-none text-white/80">
          <p>
            Modern buyers crave boldness. We lean on electric gradients, motion,
            and snappy copy to keep SaaS funnels feeling alive. When a brand
            blends neon flair with trust-building micro-copy, conversions soar.
          </p>
          <h3>Signal > Noise</h3>
          <p>
            Strip every paragraph down to a single point. Use iconography to
            keep scrollers oriented. Add proof points (metrics, testimonials)
            every 400px.
          </p>
          <h3>Color psychology kit</h3>
          <ul>
            <li>Purple for innovation & premium</li>
            <li>Pink for human warmth</li>
            <li>Electric blue for trust</li>
            <li>Neon green for success states</li>
          </ul>
        </article>
      </div>
    </AdminShell>
  );
}

