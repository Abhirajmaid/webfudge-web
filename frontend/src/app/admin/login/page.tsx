"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminLoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      window.location.href = "/admin/dashboard";
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#050111] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-[#0c011c] to-black" />
      <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.5em] text-white/60">
              Halo Lab Admin
            </p>
            <h1 className="text-5xl font-black leading-tight text-white">
              Electric control center for bold marketing & product teams.
            </h1>
            <p className="text-lg text-white/70">
              Manage influencer campaigns, web builds, and brand launches from a
              single neon cockpit. Secure, fast, and built for ambitious agencies.
            </p>
            <div className="flex items-center gap-3 text-white/60">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              System status: Operational
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(138,43,226,0.3)]">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Access Portal
              </p>
              <h2 className="text-3xl font-bold text-white">Sign in</h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold">
                  Work Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-purple-400 focus:bg-black/60"
                  placeholder="you@halolab.agency"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-semibold">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-purple-400 focus:bg-black/60"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between text-sm text-white/60">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/30 bg-transparent text-purple-500 focus:ring-purple-500"
                  />
                  Remember session
                </label>
                <Link href="#" className="text-purple-300 hover:text-white">
                  Reset access
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-4 py-3 text-center text-lg font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:scale-[1.01] disabled:opacity-70"
              >
                {isSubmitting ? "Launching cockpit..." : "Enter Admin"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


