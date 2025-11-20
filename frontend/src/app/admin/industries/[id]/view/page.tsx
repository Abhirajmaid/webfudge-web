"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import AdminShell from "@/components/admin/AdminShell";
import { useIndustriesStore } from "@/hooks/useIndustriesStore";
import { sampleProjects } from "@/data/projects";

type Props = {
  params: { id: string };
};

export default function ViewIndustryPage({ params }: Props) {
  const router = useRouter();
  const { industries, isReady, getIndustryById } = useIndustriesStore();

  const industry = useMemo(() => getIndustryById(params.id), [getIndustryById, params.id, industries]);

  const projects = industry
    ? industry.projectIds
        .map((id) => sampleProjects.find((project) => project.id === id))
        .filter(Boolean)
    : [];

  if (!isReady) {
    return (
      <AdminShell>
        <div className="py-16 text-center text-white/60">Loading industry…</div>
      </AdminShell>
    );
  }

  if (!industry) {
    return (
      <AdminShell>
        <div className="py-16 text-center text-white/70">
          Industry not found.{" "}
          <button className="underline" onClick={() => router.push("/admin/industries")}>
            Go back
          </button>
          .
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Industries</p>
          <h1 className="text-4xl font-bold text-white">{industry.name}</h1>
          <p className="pt-3 text-sm text-white/60 max-w-2xl">{industry.headline}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href={`/admin/industries/${industry.id}/edit`}
            className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white"
          >
            Edit Industry
          </Link>
          <Link
            href="/admin/industries"
            className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white"
          >
            Back to list
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2 space-y-6">
          <section>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Summary</p>
            <p className="pt-3 text-sm text-white/80">{industry.summary}</p>
          </section>

          <section>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Description</p>
            <p className="pt-3 text-sm leading-relaxed text-white/70 whitespace-pre-line">
              {industry.description}
            </p>
          </section>

          {industry.insights && (
            <section>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Insights</p>
              <p className="pt-3 text-sm text-white/70">{industry.insights}</p>
            </section>
          )}

          {industry.stats && industry.stats.length > 0 && (
            <section>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Stats</p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {industry.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
                    <p className="pt-2 text-2xl font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="space-y-6">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Meta</p>
            <div className="text-sm text-white/70 space-y-2">
              <p>Sector: {industry.sector}</p>
              <p>Region: {industry.region}</p>
              {industry.heroHighlight && <p>{industry.heroHighlight}</p>}
              {industry.contactEmail && <p>Contact: {industry.contactEmail}</p>}
              {industry.website && (
                <a href={industry.website} target="_blank" className="text-white underline">
                  Visit landing page
                </a>
              )}
              {industry.caseStudyLink && (
                <a href={industry.caseStudyLink} target="_blank" className="text-white underline block">
                  View case study
                </a>
              )}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">Linked Projects</p>
            {projects.length === 0 ? (
              <p className="text-sm text-white/60">No linked projects yet.</p>
            ) : (
              <div className="space-y-3">
                {projects.map((project) => (
                  <div key={project!.id} className="rounded-2xl border border-white/10 bg-black/40 p-3">
                    <p className="text-sm font-semibold text-white">{project!.title}</p>
                    <p className="text-xs text-white/50">
                      {project!.client} • {project!.service}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>

          {industry.tags.length > 0 && (
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-3">Tags</p>
              <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-white/40">
                {industry.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </AdminShell>
  );
}






