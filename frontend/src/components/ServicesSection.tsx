"use client";

const services = [
  { title: "Social Media Management", description: "Always-on storytelling, campaigns, and community engagement." },
  { title: "Graphic Design", description: "Print, packaging, and marketing suites that stay on-brand." },
  { title: "UI/UX Design", description: "Product wireframes, prototypes, and interaction systems." },
  { title: "Brand Identity", description: "Visual systems, tone, and guidelines built for scale." },
  { title: "Web Development", description: "Full-stack websites, landing pages, and performance builds." },
  { title: "Logo Design", description: "Signature marks with story-first symbolism." },
];

export default function ServicesSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 text-white">
      <div className="absolute inset-0 rounded-[48px] border border-[#b000ff27] bg-gradient-to-b from-[#2a0037] via-[#09020e] to-[#050505] shadow-[0_0_80px_rgba(176,0,255,0.35)]" />
      <div className="absolute inset-x-10 bottom-20 h-1 bg-gradient-to-r from-transparent via-[#f000ff66] to-transparent blur-lg" />

      <div className="relative mx-auto max-w-5xl">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#a100ff] bg-black/40 px-6 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-white/80 shadow-[0_0_25px_rgba(160,0,255,0.45)]">
            <span className="h-2 w-2 rounded-full bg-[#f200ff]" />
            Services
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl uppercase tracking-[0.35em] text-white/50">Everything you need to</p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Build a Standout Brand</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60">
            We go beyond visuals to craft memorable brand experiences. By combining design, storytelling, and digital innovation, we help your brand connect, inspire, and stay unforgettable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, index }: { title: string; description: string; index: number }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-black/60 px-8 py-7 text-left shadow-[0_10px_35px_rgba(0,0,0,0.45)] transition duration-300 hover:border-[#c700ff] hover:shadow-[0_25px_60px_rgba(199,0,255,0.25)]">
      <div className="relative z-10 transition duration-300 group-hover:translate-y-2 group-hover:opacity-0">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-white">{title}</p>
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#1c1c1f] text-white">
            <ArrowIcon className="h-5 w-5 -rotate-45 origin-center transition duration-300 group-hover:rotate-0 group-hover:text-[#f200ff]" />
          </span>
        </div>
        <p className="mt-4 text-sm text-white/50 transition duration-300 group-hover:text-white/80">{description}</p>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-x-10 bottom-3 h-[2px] bg-gradient-to-r from-transparent via-[#f200ff] to-transparent" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#f200ff0a] via-transparent to-[#b400ff0a] opacity-0 transition duration-300 group-hover:opacity-100" />
      <span className="absolute -top-4 right-8 text-xs uppercase tracking-[0.4em] text-white/20">0{index}</span>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/70 text-center text-sm text-white/80 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
        <p className="px-10">{description}</p>
      </div>
    </div>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M5 19 19 5" strokeLinecap="round" />
      <path d="M9 5h10v10" strokeLinecap="round" />
    </svg>
  );
}
