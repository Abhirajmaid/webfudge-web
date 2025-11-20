"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We deliver end-to-end creative services—brand identity, UI/UX, website development, content, and growth strategy—all with the neon polish Webfudge is known for.",
  },
  {
    question: "How do we kick off a project?",
    answer: "Book a discovery call, share your goals, and we’ll build a custom roadmap within 48 hours.",
  },
  {
    question: "Do you work with startups or enterprises?",
    answer: "Both. We tailor pods for emerging founders and established teams alike.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative isolate overflow-hidden px-6 py-24 text-white">
      <div className="absolute inset-0 rounded-[48px] border border-[#b000ff2f] bg-gradient-to-b from-[#1f002d] via-[#070107] to-[#050505]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#5f00a8] via-transparent to-transparent opacity-60 blur-3xl" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-16">
        <SectionTag label="FAQs" />

        <div className="space-y-8">
          <h2 className="text-center text-3xl font-semibold text-white/80 sm:text-4xl">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[40px] border border-[#b000ff3d] bg-gradient-to-b from-[#2a003d] via-[#0b050c] to-[#060606] px-8 py-14 text-center shadow-[0_25px_70px_rgba(0,0,0,0.5)]">
          <SectionTag label="Become a Part of Us" />
          <h3 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">Ready to Elevate Your Brand?</h3>
          <p className="mt-3 text-sm text-white/60">Plug into Webfudge and let’s craft a standout presence together.</p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-[#ff00d4] bg-gradient-to-r from-[#ff00d4] to-[#8e2eff] px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_15px_35px_rgba(255,0,212,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(255,0,212,0.5)]"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="group w-full rounded-[26px] border border-white/25 bg-black/70 px-8 py-5 text-left transition hover:border-[#ff00d4]"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-lg font-semibold">{faq.question}</p>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition group-hover:border-[#ff00d4]">
          {isOpen ? "−" : "+"}
        </span>
      </div>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-sm text-white/70">{faq.answer}</p>
      </div>
    </button>
  );
}

function SectionTag({ label }: { label: string }) {
  return (
    <div className="flex justify-center">
      <div className="inline-flex items-center gap-3 rounded-full border border-[#a100ff] bg-black/40 px-6 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-white/70">
        <span className="h-2 w-2 rounded-full bg-[#f200ff]" />
        {label}
      </div>
    </div>
  );
}




