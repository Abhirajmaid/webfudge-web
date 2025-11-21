"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "20+", label: "Clients" },
    { value: "10+", label: "Industries" },
];

export default function StatsMarqueeSection() {
    return (
        <section className="relative bg-black text-white overflow-hidden">
            {/* Stats Section */}
            <div className="container mx-auto px-6 py-24">
                <div className="grid gap-8 md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-[32px] border border-[#b000ff]/30 bg-[#0a0a0a] p-8 md:p-12 shadow-[0_0_40px_rgba(176,0,255,0.15)]"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#b000ff]/20 blur-[60px] rounded-full pointer-events-none" />

                            <h3 className="text-5xl md:text-7xl font-medium text-white mb-4 tracking-tight">
                                {stat.value}
                            </h3>
                            <div className="h-px w-full bg-gradient-to-r from-[#b000ff]/50 to-transparent mb-4" />
                            <p className="text-lg text-white/70 font-light tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Infinite Marquee */}
            <div className="relative w-full bg-[#2a0037] border-y border-[#b000ff]/20 py-6 overflow-hidden">
                <div className="flex whitespace-nowrap">
                    <MarqueeContent />
                    <MarqueeContent />
                </div>
            </div>
        </section>
    );
}

function MarqueeContent() {
    return (
        <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
            }}
            className="flex items-center gap-12 pr-12"
        >
            {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-12">
                    <span className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-white">
                        Get In Touch
                    </span>
                    <div className="relative h-8 w-8">
                        <Image
                            src="/proxy-image.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            ))}
        </motion.div>
    );
}
