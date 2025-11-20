"use client";

import AdminShell from "@/components/admin/AdminShell";
import Link from "next/link";
import { useIndustriesStore } from "@/hooks/useIndustriesStore";
import { sampleProjects } from "@/data/projects";
import { useMemo, useState } from "react";

export default function AdminIndustriesPage() {
  const { industries, isReady, deleteIndustry, resetIndustries } = useIndustriesStore();
  const [pendingDelete, setPendingDelete] = useState<string | null>(null);
  const [confirmText, setConfirmText] = useState("");

  const projectsById = useMemo(
    () => Object.fromEntries(sampleProjects.map((project) => [project.id, project])),
    [],
  );

  const handleDelete = () => {
    if (pendingDelete && confirmText === "DELETE") {
      deleteIndustry(pendingDelete);
      setPendingDelete(null);
      setConfirmText("");
    }
  };

  return (
    <AdminShell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Industries</p>
          <h1 className="text-4xl font-bold text-white">Sector playbooks & growth partners</h1>
          <p className="pt-3 text-sm text-white/60 max-w-2xl">
            Create industry hubs, attach case studies and link projects so they surface on public
            industry landing pages.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={resetIndustries}
            className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white"
          >
            Restore Sample Data
          </button>
          <Link
            href="/admin/industries/new"
            className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:scale-[1.01]"
          >
            + New Industry
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        {!isReady ? (
          <div className="py-16 text-center text-white/60">Loading industries…</div>
        ) : industries.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-sm text-white/60 mb-4">No industries yet.</p>
            <Link
              href="/admin/industries/new"
              className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:scale-[1.01]"
            >
              Create your first industry
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="rounded-3xl border border-white/10 bg-black/30 p-5 transition hover:border-white/30 hover:bg-black/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                      {industry.sector}
                    </p>
                    <h2 className="text-xl font-semibold text-white">{industry.name}</h2>
                  </div>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                    {industry.region}
                  </span>
                </div>
                <p className="mt-4 text-sm text-white/70 line-clamp-3">{industry.summary}</p>

                {industry.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-white/40">
                    {industry.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/15 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {industry.projectIds.length > 0 && (
                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">
                      Linked Projects
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {industry.projectIds.map((projectId) => {
                        const project = projectsById[projectId];
                        return (
                          <span
                            key={projectId}
                            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
                          >
                            {project ? project.title : projectId}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  <Link
                    href={`/admin/industries/${industry.id}/view`}
                    className="flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-xs font-semibold text-white/70 transition hover:border-white hover:text-white"
                  >
                    View
                  </Link>
                  <Link
                    href={`/admin/industries/${industry.id}/edit`}
                    className="flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-xs font-semibold text-white/70 transition hover:border-white hover:text-white"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setPendingDelete(industry.id);
                      setConfirmText("");
                    }}
                    className="rounded-full border border-red-400/60 px-4 py-2 text-xs font-semibold text-red-200 transition hover:border-red-300 hover:text-white"
                  >
                    Delete
                  </button>
                </div>

                {pendingDelete === industry.id && (
                  <div className="mt-4 rounded-2xl border border-red-400/40 bg-red-500/10 p-4">
                    <p className="text-sm font-semibold text-red-200">
                      Type DELETE to confirm removal
                    </p>
                    <input
                      value={confirmText}
                      onChange={(event) => setConfirmText(event.target.value)}
                      placeholder="DELETE"
                      className="mt-3 w-full rounded-xl border border-red-400/40 bg-black/40 px-4 py-2 text-sm text-white placeholder-white/40 focus:border-red-400 focus:outline-none"
                    />
                    <div className="mt-3 flex gap-2">
                      <button
                        type="button"
                        disabled={confirmText !== "DELETE"}
                        onClick={handleDelete}
                        className="flex-1 rounded-xl border border-red-400/60 px-4 py-2 text-xs font-semibold text-red-200 transition hover:border-red-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Permanently Delete
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setPendingDelete(null);
                          setConfirmText("");
                        }}
                        className="flex-1 rounded-xl border border-white/20 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-white hover:text-white"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminShell>
  );
}






