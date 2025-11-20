"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Projects", href: "/admin/projects" },
  { label: "Industries", href: "/admin/industries" },
  { label: "Blogs", href: "/admin/blogs" },
];

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#05000d] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#140028] via-[#070012] to-black" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,_rgba(255,255,255,0.25)_1px,_transparent_1px)] [background-size:80px_80px]" />
      <div className="absolute -top-32 -right-10 h-96 w-96 rounded-full bg-purple-600/40 blur-3xl" />
      <div className="absolute top-60 -left-20 h-80 w-80 rounded-full bg-pink-500/30 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10">
        <header className="border-b border-white/10 bg-black/30 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
            <Link href="/admin/dashboard" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30" />
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  Halo Lab
                </p>
                <p className="text-xl font-bold text-white">Admin</p>
              </div>
            </Link>

            <nav className="hidden gap-6 text-sm font-semibold md:flex">
              {navItems.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 transition ${
                      active ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {active && (
                      <span className="absolute inset-0 rounded-full bg-white/10 blur-sm" />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <button className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white">
                Support
              </button>
              <div className="h-10 w-10 rounded-full border border-white/20 bg-gradient-to-br from-pink-500 to-purple-500" />
            </div>
          </div>
        </header>

        <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12">
          {children}
        </main>
      </div>
    </div>
  );
}

