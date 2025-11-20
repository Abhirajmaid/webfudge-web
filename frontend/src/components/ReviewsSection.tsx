"use client";

const testimonials = [
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", author: "Elizabeth", location: "Chicago" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", author: "Catherine", location: "New York" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", author: "Marcus", location: "San Diego" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", author: "Ava", location: "Toronto" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", author: "Noah", location: "London" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", author: "Maya", location: "Sydney" },
];

export default function ReviewsSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 text-white">
      <div className="absolute inset-0 rounded-[48px] border border-[#b000ff2c] bg-gradient-to-b from-[#2a0038] via-[#09010d] to-[#050505]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#6b00a8] via-transparent to-transparent blur-3xl opacity-80" />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#a100ff] bg-black/40 px-6 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#f200ff]" />
            Testimonials
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-white/60">Hear it from the</p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">People Who Matter</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-white/60">
            A sweet collection of our most flavorful creations crafted with heart and originality. Every project blends creativity, strategy,
            and a touch of fun. Welcome to the colorful world of Webfudge.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  author,
  location,
}: {
  quote: string;
  author: string;
  location: string;
}) {
  return (
    <div className="relative rounded-[24px] border border-white/30 bg-black/60 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-1 hover:border-[#d200ff]">
      <div className="flex items-center gap-1 text-[#ff00d4]">
        {Array.from({ length: 5 }).map((_, idx) => (
          <span key={idx}>★</span>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-white/80">{quote}</p>
      <div className="mt-6 text-sm text-white/60">
        <p className="font-semibold text-white">{author}</p>
        <p>{location}</p>
      </div>
      <div className="absolute inset-x-8 bottom-3 h-[1px] bg-gradient-to-r from-transparent via-[#ff00d4] to-transparent opacity-50" />
    </div>
  );
}





