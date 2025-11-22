import React from "react";

interface SectionTitleProps {
    title: string;
    className?: string;
}

export default function SectionTitle({ title, className = "" }: SectionTitleProps) {
    return (
        <div
            className={`inline-flex items-center gap-2 rounded-lg border border-[#d400ff] bg-[#1a1a1a] px-6 py-1.5 shadow-[0_0_25px_rgba(212,0,255,0.6)] ${className}`}
        >
            <div className="h-2 w-2 rounded-full bg-gray-300 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
            <h2 className="text-sm font-medium text-white uppercase tracking-wider">{title}</h2>
        </div>
    );
}
