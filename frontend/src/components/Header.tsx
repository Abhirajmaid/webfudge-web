"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-[#0b0c12]/80 backdrop-blur header-shadow">
      <div className="mx-auto max-w-[1200px] px-4 h-16 lg:h-20 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[var(--hero-yellow)]"></div>
          <span className="font-semibold">HALO LAB</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/90">
          <Link href="#" className="hover:text-white">Services</Link>
          <Link href="#" className="hover:text-white">Projects</Link>
          <Link href="#" className="hover:text-white">Dedicated Team</Link>
          <Link href="#" className="hover:text-white">Resources</Link>
          <Link href="#" className="hover:text-white">Pricing</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex h-11 items-center rounded-full bg-white/10 px-6 text-white text-sm font-semibold ring-1 ring-white/20 hover:bg-white/20 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}


