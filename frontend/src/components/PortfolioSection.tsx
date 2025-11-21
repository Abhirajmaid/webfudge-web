"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Planto Zone",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2449&auto=format&fit=crop",
  },
  {
    title: "Eco Bottle",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1602143407151-01114192003b?q=80&w=1935&auto=format&fit=crop",
  },
  {
    title: "Tech Hub",
    category: "Web Platform",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop",
  },
  {
    title: "Urban Fashion",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1529139574466-a302c27e811f?q=80&w=1892&auto=format&fit=crop",
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column - Sticky Content */}
          <div className="lg:w-1/2 lg:h-[calc(100vh-6rem)] lg:sticky lg:top-24 flex flex-col justify-center items-start">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#a100ff]/30 bg-white/5 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md mb-8">
              <span className="h-2 w-2 rounded-full bg-[#f200ff] shadow-[0_0_10px_#f200ff]" />
              Portfolio
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              A Glimpse Into
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                Our Creative World
              </span>
            </h2>

            <p className="text-white/60 text-lg max-w-md mb-10 leading-relaxed">
              A sweet selection of our most flavorful creations crafted with heart and originality.
            </p>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-[#b000ff] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-[#c700ff] hover:shadow-[0_0_30px_rgba(176,0,255,0.4)]"
            >
              View More Works
            </Link>
          </div>

          {/* Right Column - Scrollable Images */}
          <div className="lg:w-1/2 flex flex-col gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: { title: string; category: string; image: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="group relative aspect-square w-full overflow-hidden rounded-[40px] bg-[#1a1a1a]"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
        <p className="text-[#b000ff] text-sm font-bold uppercase tracking-widest mb-2 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
          {project.category}
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
      </div>
    </motion.div>
  );
}





