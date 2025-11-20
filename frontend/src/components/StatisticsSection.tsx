"use client";

const stats = [
  { value: "$530M", label: "Funds raised by client teams" },
  { value: "500+", label: "Launches delivered" },
  { value: "$25.8B", label: "Largest client market cap" },
  { value: "150+", label: "Creators + technologists in network" },
];

const stories = [
  { title: "Neon Experiment 01", summary: "How we fuse influencer pods with WebGL commerce" },
  { title: "Systems > Campaigns", summary: "Our blueprint for repeatable launches" },
  { title: "Halo Agent OS", summary: "The neon cockpit powering every engagement" },
];

export default function StatisticsSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_45%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl space-y-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
              <p className="text-4xl font-black">{stat.value}</p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 rounded-[32px] border border-white/10 bg-black/30 p-10 backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.5em] text-white/50">Halo logbook</p>
            <h3 className="text-3xl font-bold text-white">Every launch gets an experiment narrative.</h3>
            <p className="text-white/70">
              Our blog is a living artifact of experiments, influencer science, and zero-to-one ops.
              Expect system-level thinking, not generic listicles.
            </p>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white">
              Explore hot articles ↗
            </button>
          </div>
          <div className="space-y-4">
            {stories.map((story) => (
              <div key={story.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">Field note</p>
                <p className="text-xl font-semibold text-white">{story.title}</p>
                <p className="text-sm text-white/70">{story.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}








