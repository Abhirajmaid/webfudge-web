"use client";

import AdminShell from "@/components/admin/AdminShell";
import Link from "next/link";
import { projectSections } from "./sectionConfigs";
import { AdminProject, sampleProjects } from "@/data/projects";

const statusColors: Record<AdminProject["status"], string> = {
  Discovery: "bg-blue-400/30 text-blue-200 border-blue-500/40",
  Design: "bg-pink-400/30 text-pink-200 border-pink-500/40",
  Development: "bg-orange-400/30 text-orange-200 border-orange-500/40",
  Live: "bg-emerald-400/30 text-emerald-200 border-emerald-500/40",
};

export default function AdminProjectsPage() {
  return (
    <AdminShell>
      <div className="flex flex-wrap items-center gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Projects
          </p>
          <h1 className="text-4xl font-bold text-white">
            Showcase-ready builds and campaigns
          </h1>
        </div>
      </div>

      <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projectSections.map((section) => (
            <Link
              key={section.key}
              href={`/admin/projects/${section.slug}`}
              className="rounded-3xl border border-white/10 bg-black/30 px-5 py-4 text-left transition hover:scale-[1.01] hover:border-white/40 hover:bg-white/10"
            >
              <div
                className={`mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r ${section.gradient}`}
              />
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                {section.tagline}
              </p>
              <h3 className="pt-1 text-xl font-semibold text-white">{section.title}</h3>
              <p className="pt-2 text-sm text-white/60">{section.description}</p>
            </Link>
          ))}
        </div>
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs">
          {["All", "Discovery", "Design", "Development", "Live"].map((tab) => (
            <button
              key={tab}
              className={`rounded-full px-4 py-2 ${
                tab === "All"
                  ? "bg-white text-black"
                  : "border border-white/20 text-white/70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-white/80">
            <thead className="text-xs uppercase tracking-widest text-white/40">
              <tr>
                <th className="pb-4">Project</th>
                <th className="pb-4">Service</th>
                <th className="pb-4">Spotlight</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Owner</th>
                <th className="pb-4 text-right">Links</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {sampleProjects.map((project) => (
                <tr key={project.id} className="hover:bg-white/5">
                  <td className="py-4">
                    <div className="font-semibold text-white">
                      {project.title}
                    </div>
                    <div className="text-xs text-white/50">
                      {project.id} • {project.client}
                    </div>
                  </td>
                  <td className="py-4 text-white/70">
                    <div className="font-medium">{project.service}</div>
                    <div className="flex flex-wrap gap-2 pt-1 text-[10px] uppercase tracking-[0.3em] text-white/40">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 text-white/80">{project.spotlight}</td>
                  <td className="py-4">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusColors[project.status]}`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4 text-white/70">{project.owner}</td>
                  <td className="py-4 text-right">
                    <div className="flex justify-end gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          className="rounded-full border border-white/20 px-3 py-1 text-xs text-emerald-300 transition hover:text-white"
                        >
                          Live
                        </a>
                      )}
                      {project.deckUrl && (
                        <a
                          href={project.deckUrl}
                          className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70 transition hover:text-white"
                        >
                          Deck
                        </a>
                      )}
                      <Link
                        href={`/admin/projects/${project.id}/view`}
                        className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70 transition hover:text-white"
                      >
                        View
                      </Link>
                      <Link
                        href={`/admin/projects/${project.id}/edit`}
                        className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70 transition hover:text-white"
                      >
                        Edit
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}

