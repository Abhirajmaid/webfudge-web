"use client";

const caseStudy = {
  title: "Where great ideas become neon realities",
  subtitle: "Linkbycar raised €1.4M with Halo Lab orchestrating product, brand, and GTM.",
  metrics: [
    { label: "Time to MVP", value: "9 weeks" },
    { label: "Fleet coverage", value: "18 cities" },
    { label: "Platform uptime", value: "99.96%" },
  ],
  testimonial:
    "“Halo Lab has a very diverse range of skills and always finds a solution. They delivered the project on time and on vibe.”",
  author: "Saidou Soumare",
  role: "CTO at Linkbycar",
};

export default function CaseStudySection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:100px_100px] opacity-10" />
      <div className="relative mx-auto max-w-6xl space-y-12">
        <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.5em] text-white/50">Case study</p>
              <h2 className="text-4xl font-bold text-white">{caseStudy.title}</h2>
              <p className="text-lg text-white/70">{caseStudy.subtitle}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {caseStudy.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                    <p className="text-3xl font-bold text-white">{metric.value}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">{metric.label}</p>
                  </div>
                ))}
              </div>
              <p className="rounded-2xl border border-white/10 bg-black/30 p-6 text-white/80">{caseStudy.testimonial}</p>
              <div className="text-sm text-white/60">
                <p className="font-semibold text-white">{caseStudy.author}</p>
                <p>{caseStudy.role}</p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/40 p-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">Mission Control</p>
                <div className="mt-4 space-y-3 text-sm text-white/80">
                  {[
                    "Real-time vehicle telemetry view",
                    "Predictive maintenance alerts",
                    "Creator-led booking campaign",
                    "Web app + mobile + ops dashboard",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">Toolkit</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
                  {["Figma", "Next.js", "Supabase", "Three.js", "Webflow"].map((tool) => (
                    <span key={tool} className="rounded-full border border-white/20 px-3 py-1">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}








