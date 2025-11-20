"use client";

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700/30 via-pink-500/20 to-orange-400/20" />
      <div className="relative mx-auto max-w-4xl rounded-[36px] border border-white/10 bg-black/30 p-12 text-center backdrop-blur-2xl">
        <p className="text-xs uppercase tracking-[0.6em] text-white/50">Ready to ignite</p>
        <h2 className="mt-4 text-4xl font-bold">
          Need a team that can design, build, and launch with influencer energy baked in?
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Plug into Halo Agent. We’ll spin up a pod that handles narrative, product, creators, and growth all at once.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            className="rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-8 py-3 text-lg font-semibold shadow-lg shadow-purple-500/40 transition hover:scale-[1.02]"
          >
            Book a neon session
          </a>
          <a
            href="/projects"
            className="rounded-full border border-white/20 px-8 py-3 text-lg font-semibold text-white/80 transition hover:border-white hover:text-white"
          >
            See what we’ve built
          </a>
        </div>
      </div>
    </section>
  );
}








