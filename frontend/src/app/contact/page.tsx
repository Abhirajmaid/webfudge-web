"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(147,51,234,0.35),_transparent_45%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.6em] text-white/60">Contact</p>
          <h1 className="text-4xl font-bold">Initiate a neon project with Halo.</h1>
          <p className="text-white/70">
            Tell us about your launch, product, or platform. We’ll assemble a pod with strategy, design, engineering, and creators
            aligned to your metrics.
          </p>
          <div className="space-y-3 text-sm text-white/70">
            <p>📍 Remote-first • EST & CET squads</p>
            <p>✉️ inquiry@halo-lab.com</p>
            <p>📱 +1 (213) 337-8573</p>
          </div>
          <div className="flex gap-3">
            {["Dribbble", "Behance", "Twitter", "LinkedIn"].map((network) => (
              <Link key={network} href="#" className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
                {network}
              </Link>
            ))}
          </div>
        </div>

        <form className="space-y-5">
          {["Full Name", "Work Email", "Company / Brand"].map((field) => (
            <div key={field}>
              <label className="text-xs uppercase tracking-[0.3em] text-white/40">{field}</label>
              <input
                required
                className="mt-2 w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white outline-none focus:border-purple-400"
              />
            </div>
          ))}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-white/40">Service pod</label>
              <select className="mt-2 w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white outline-none focus:border-purple-400">
                <option>Launch architecture</option>
                <option>Experience design</option>
                <option>Full-stack dev</option>
                <option>Influencer ops</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-white/40">Budget</label>
              <select className="mt-2 w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white outline-none focus:border-purple-400">
                <option>$25k–50k</option>
                <option>$50k–100k</option>
                <option>$100k+</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-white/40">Mission brief</label>
            <textarea
              rows={5}
              className="mt-2 w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white outline-none focus:border-purple-400"
              placeholder="Tell us about your launch timeline, KPIs, and what a win looks like…"
            />
          </div>
          <button className="w-full rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 py-3 text-lg font-semibold shadow-lg shadow-purple-500/40">
            Send transmission
          </button>
        </form>
      </div>
    </section>
  );
}








