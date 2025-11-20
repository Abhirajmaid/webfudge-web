"use client";

const accolades = [
  { label: "Top Team on Dribbble", icon: "🏀", meta: "Global #1" },
  { label: "Clutch Global 100", icon: "C", meta: "4.9 avg" },
  { label: "GoodFirms 5★", icon: "F", meta: "Client love" },
  { label: "Upwork 100%", icon: "↑", meta: "Top rated" },
];

export default function AchievementsSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-28 text-white">
      <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-[#1c0030] via-[#11001f] to-[#05000b]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#42006e] via-transparent to-transparent opacity-60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl space-y-12 text-center">
        <p className="text-xs uppercase tracking-[1em] text-white/50">Proof of performance</p>
        <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
          We take brands from zero to hero in full neon color.
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {accolades.map((item) => (
            <div
              key={item.label}
              className="rounded-[36px] border border-white/20 bg-gradient-to-b from-[#130012] to-[#070407] px-8 py-10 shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/25 text-3xl text-white">
                {item.icon}
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em]">{item.label}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.4em] text-white/40">{item.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





