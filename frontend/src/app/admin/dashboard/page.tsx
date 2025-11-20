"use client";

import AdminShell from "@/components/admin/AdminShell";

const statCards = [
  { label: "Active Campaigns", value: "42", change: "+12% vs last month" },
  { label: "Influencer Collabs", value: "318", change: "+24 new" },
  { label: "Avg. Build Velocity", value: "4.2 weeks", change: "Full-stack web" },
  { label: "NPS Score", value: "73", change: "Top 1% agencies" },
];

const pipeline = [
  { label: "Discovery", count: 18, color: "bg-purple-500" },
  { label: "Design Sprints", count: 12, color: "bg-pink-400" },
  { label: "Dev In Progress", count: 9, color: "bg-orange-400" },
  { label: "Influencer Ops", count: 14, color: "bg-blue-400" },
];

const activity = [
  {
    time: "2 min ago",
    label: "Deck upload",
    detail: "Orbit CRM case study synced to site",
  },
  {
    time: "12 min ago",
    label: "Influencer pod",
    detail: "Mira locked 6 TikTok creators for Astro Drinks",
  },
  {
    time: "32 min ago",
    label: "Web dev",
    detail: "Pluto Wallet sprint moved to QA",
  },
  {
    time: "1 h ago",
    label: "Brand ops",
    detail: "Nourish Rebrand palette approved",
  },
];

const launchQueue = [
  { client: "Flare AI", goLive: "Nov 22", channel: "Product Hunt" },
  { client: "Kolektif", goLive: "Dec 01", channel: "Influencer pods" },
  { client: "NovaPay", goLive: "Dec 05", channel: "Site + Ads" },
];

export default function AdminDashboardPage() {
  return (
    <AdminShell>
      <section className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Mission Control
          </p>
          <h1 className="text-4xl font-bold text-white">
            Live performance across marketing, product, and creator pods.
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_80px_rgba(120,50,255,0.15)]"
            >
              <p className="text-sm uppercase tracking-widest text-white/60">
                {card.label}
              </p>
              <p className="mt-4 text-4xl font-black text-white">{card.value}</p>
              <p className="mt-2 text-sm text-emerald-300">{card.change}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#221133] to-[#0b031a] p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Revenue Streams
              </p>
              <h2 className="text-3xl font-bold text-white">
                $2.45M pipeline this quarter
              </h2>
            </div>
            <div className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-white/80">
              Updated 2 min ago
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {pipeline.map((stage) => (
              <div
                key={stage.label}
                className="rounded-2xl border border-white/10 bg-black/30 p-4"
              >
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>{stage.label}</span>
                  <span>{stage.count} briefs</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div
                    className={`h-2 rounded-full ${stage.color}`}
                    style={{ width: `${Math.min(stage.count * 5, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Workload Radar
              </p>
              <h2 className="text-2xl font-bold text-white">Pod utilization</h2>
            </div>
            <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">
              EST • Live
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {["Marketing", "Web Dev", "Influencers", "Brand"].map(
              (team, idx) => (
                <div
                  key={team}
                  className="flex items-center justify-between rounded-2xl bg-black/30 p-4"
                >
                  <div>
                    <p className="text-lg font-semibold">{team} Pod</p>
                    <p className="text-sm text-white/60">
                      {idx * 6 + 58}% utilization
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-emerald-300">
                      {idx * 6 + 58}%
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                      Healthy
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Neon Activity Feed
              </p>
              <h2 className="text-2xl font-bold text-white">
                Real-time ops across squads
              </h2>
            </div>
            <button className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
              Live
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {activity.map((event, idx) => (
              <div
                key={event.label}
                className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-white/70">
                  {idx + 1}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                    {event.time}
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {event.label}
                  </p>
                  <p className="text-white/60">{event.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Upcoming Launches
          </p>
          <h2 className="text-2xl font-bold text-white">Next 30 days</h2>

          <div className="mt-6 space-y-4">
            {launchQueue.map((launch) => (
              <div
                key={launch.client}
                className="rounded-2xl border border-white/10 bg-black/30 p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {launch.client}
                    </p>
                    <p className="text-sm text-white/60">{launch.channel}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-300">
                      {launch.goLive}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                      Go live
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AdminShell>
  );
}

