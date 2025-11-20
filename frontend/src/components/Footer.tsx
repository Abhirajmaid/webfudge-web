"use client";

import Link from "next/link";

const infoLinks = ["Company", "Products", "Services"];
const aboutLinks = ["Gallery", "Contacts"];
const socials = [
  { name: "Facebook", icon: "f" },
  { name: "Instagram", icon: "ig" },
  { name: "YouTube", icon: "yt" },
  { name: "Twitter", icon: "tw" },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-b from-[#110015] via-[#070108] to-[#030203] px-6 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,0,214,0.25),_transparent_45%)] opacity-60" />
      <div className="relative mx-auto grid max-w-6xl gap-10 rounded-[42px] border border-[#b000ff33] bg-black/60 p-10 shadow-[0_25px_80px_rgba(0,0,0,0.55)] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col gap-6 rounded-[30px] border border-white/10 bg-black/70 p-8">
          <p className="text-xs uppercase tracking-[0.45em] text-white/50">Feedback</p>
          <h3 className="text-3xl font-semibold leading-snug text-white/80">
            Seeking personalized support? <span className="text-white">Request a call from our team</span>
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-[14px] border border-white/25 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#ff00d4] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-[14px] border border-white/25 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#ff00d4] focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-[#ff00d4] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_15px_35px_rgba(255,0,212,0.4)] transition hover:-translate-y-0.5"
            >
              Send a request
            </button>
          </form>
          <Link href="/privacy" className="text-xs text-white/40 underline-offset-4 hover:underline">
            Privacy
          </Link>
        </div>

        <div className="grid gap-8 text-sm text-white/70">
          <div className="grid gap-8 md:grid-cols-3">
            <NavColumn title="Info" items={infoLinks} />
            <NavColumn title="About us" items={aboutLinks} />
            <div className="space-y-2 text-white/70">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">Contact us</p>
              <p>+1 (999) 999-99-99</p>
              <p>hello@webfudge.in</p>
              <p>Pune</p>
            </div>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 text-2xl">✶</div>
              <p className="mt-2 text-lg font-semibold text-white">Webfudge</p>
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">Subscription</p>
              <div className="mt-3 flex items-center gap-3 rounded-full border border-white/20 bg-black/60 px-4 py-3">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
                <button className="rounded-full bg-gradient-to-r from-[#ff00d4] to-[#7c2bff] px-4 py-2 text-lg">›</button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-3">
              {socials.map((social) => (
                <button
                  key={social.name}
                  aria-label={social.name}
                  className="h-10 w-10 rounded-full border border-white/30 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:border-[#ff00d4] hover:text-white"
                >
                  {social.icon}
                </button>
              ))}
            </div>
            <p className="text-xs text-white/40">© {new Date().getFullYear()} Webfudge — All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NavColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.4em] text-white/40">{title}</p>
      {items.map((item) => (
        <Link key={item} href="#" className="block text-white/70 transition hover:text-white">
          {item}
        </Link>
      ))}
    </div>
  );
}





