"use client";

import { useState } from "react";
import type { Industry } from "@/data/industries";
import type { IndustryInput } from "@/hooks/useIndustriesStore";
import { AdminProject } from "@/data/projects";

const defaultStats = [
  { label: "Key metric", value: "" },
  { label: "Pipeline", value: "" },
  { label: "Outcome", value: "" },
];

type IndustryFormValues = {
  name: string;
  slug: string;
  sector: string;
  region: string;
  headline: string;
  summary: string;
  description: string;
  heroHighlight: string;
  website: string;
  contactEmail: string;
  featuredImage: string;
  tags: string;
  insights: string;
  caseStudyLink: string;
  projectIds: string[];
  stats: { label: string; value: string }[];
};

const toFormValues = (industry?: Industry): IndustryFormValues => ({
  name: industry?.name ?? "",
  slug: industry?.slug ?? "",
  sector: industry?.sector ?? "",
  region: industry?.region ?? "",
  headline: industry?.headline ?? "",
  summary: industry?.summary ?? "",
  description: industry?.description ?? "",
  heroHighlight: industry?.heroHighlight ?? "",
  website: industry?.website ?? "",
  contactEmail: industry?.contactEmail ?? "",
  featuredImage: industry?.featuredImage ?? "",
  tags: industry?.tags.join(", ") ?? "",
  insights: industry?.insights ?? "",
  caseStudyLink: industry?.caseStudyLink ?? "",
  projectIds: industry?.projectIds ?? [],
  stats:
    industry?.stats && industry.stats.length > 0
      ? [...industry.stats, ...defaultStats].slice(0, 3)
      : defaultStats,
});

const toIndustryInput = (values: IndustryFormValues): IndustryInput => ({
  name: values.name.trim(),
  slug: values.slug.trim() || values.name.toLowerCase().replace(/\s+/g, "-"),
  sector: values.sector.trim(),
  region: values.region.trim(),
  headline: values.headline.trim(),
  summary: values.summary.trim(),
  description: values.description.trim(),
  heroHighlight: values.heroHighlight.trim(),
  website: values.website.trim(),
  contactEmail: values.contactEmail.trim(),
  featuredImage: values.featuredImage.trim(),
  insights: values.insights.trim(),
  caseStudyLink: values.caseStudyLink.trim(),
  tags: values.tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean),
  projectIds: values.projectIds,
  stats: values.stats
    .filter((stat) => stat.label.trim() && stat.value.trim())
    .map((stat) => ({ label: stat.label.trim(), value: stat.value.trim() })),
});

type Props = {
  industry?: Industry;
  projects: AdminProject[];
  onSubmit: (input: IndustryInput) => void;
  onCancel: () => void;
  submitLabel?: string;
};

export default function IndustryForm({
  industry,
  projects,
  onSubmit,
  onCancel,
  submitLabel = "Save Industry",
}: Props) {
  const [values, setValues] = useState<IndustryFormValues>(toFormValues(industry));

  const handleChange = (field: keyof IndustryFormValues, value: string | string[]) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleStatChange = (index: number, key: "label" | "value", value: string) => {
    setValues((prev) => {
      const nextStats = [...prev.stats];
      nextStats[index] = { ...nextStats[index], [key]: value };
      return { ...prev, stats: nextStats };
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(toIndustryInput(values));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <section className="rounded-3xl border border-white/10 bg-black/40 p-6">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Industry profile</p>
          <h2 className="text-2xl font-semibold text-white">
            {industry ? "Edit industry" : "Create new industry"}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            { key: "name", label: "Industry Name", placeholder: "Healthcare & Wellness" },
            { key: "slug", label: "Slug", placeholder: "healthcare-wellness" },
            { key: "sector", label: "Sector", placeholder: "Healthcare" },
            { key: "region", label: "Region / Markets", placeholder: "Global" },
            {
              key: "headline",
              label: "Hero Headline",
              placeholder: "Digital care ecosystems, patient trust, wellness accelerators",
              fullWidth: true,
            },
          ].map((field) => (
            <label
              key={field.key}
              className={`flex flex-col gap-2 ${field.fullWidth ? "md:col-span-2" : ""}`}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">{field.label}</span>
              <input
                type="text"
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-purple-400 focus:outline-none"
                value={values[field.key as keyof IndustryFormValues] as string}
                placeholder={field.placeholder}
                onChange={(event) => handleChange(field.key as keyof IndustryFormValues, event.target.value)}
              />
            </label>
          ))}

          <label className="md:col-span-2 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Summary</span>
            <textarea
              rows={4}
              className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-purple-400 focus:outline-none"
              value={values.summary}
              placeholder="Short overview for cards and previews"
              onChange={(event) => handleChange("summary", event.target.value)}
            />
          </label>

          <label className="md:col-span-2 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Full Description</span>
            <textarea
              rows={6}
              className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-purple-400 focus:outline-none"
              value={values.description}
              placeholder="Detailed overview, capabilities and approach"
              onChange={(event) => handleChange("description", event.target.value)}
            />
          </label>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-black/40 p-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Positioning</p>
            <h3 className="text-xl font-semibold text-white">Highlights & signals</h3>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            { key: "heroHighlight", label: "Hero Highlight", placeholder: "12 launches • +4.2M patient reach", fullWidth: true },
            { key: "website", label: "Industry Landing URL", placeholder: "https://webfudge.com/industries/healthcare" },
            { key: "contactEmail", label: "Contact Email", placeholder: "health@webfudge.com" },
            { key: "featuredImage", label: "Feature Image URL", placeholder: "https://images.unsplash.com/..." },
            { key: "caseStudyLink", label: "Case Study Link", placeholder: "https://webfudge.com/case-studies/healthcare" },
            {
              key: "tags",
              label: "Tags / Keywords",
              placeholder: "Biotech, Wellness, Femtech, Hospitality",
              fullWidth: true,
            },
            {
              key: "insights",
              label: "Insights / Notes",
              placeholder: "Focus on regulatory-friendly storytelling, product education hubs, ...",
              fullWidth: true,
              textarea: true,
            },
          ].map((field) => (
            <label
              key={field.key}
              className={`flex flex-col gap-2 ${field.fullWidth ? "md:col-span-2" : ""}`}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">{field.label}</span>
              {field.textarea ? (
                <textarea
                  rows={4}
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-purple-400 focus:outline-none"
                  value={values[field.key as keyof IndustryFormValues] as string}
                  placeholder={field.placeholder}
                  onChange={(event) =>
                    handleChange(field.key as keyof IndustryFormValues, event.target.value)
                  }
                />
              ) : (
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-purple-400 focus:outline-none"
                  value={values[field.key as keyof IndustryFormValues] as string}
                  placeholder={field.placeholder}
                  onChange={(event) =>
                    handleChange(field.key as keyof IndustryFormValues, event.target.value)
                  }
                />
              )}
            </label>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Stats</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {values.stats.map((stat, index) => (
              <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
                <input
                  type="text"
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-purple-400 focus:outline-none"
                  value={stat.label}
                  placeholder="Label"
                  onChange={(event) => handleStatChange(index, "label", event.target.value)}
                />
                <input
                  type="text"
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-purple-400 focus:outline-none"
                  value={stat.value}
                  placeholder="Value"
                  onChange={(event) => handleStatChange(index, "value", event.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-black/40 p-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Project mapping</p>
            <h3 className="text-xl font-semibold text-white">Link projects to this industry</h3>
          </div>
          <p className="text-xs text-white/50 max-w-md">
            Select the projects that belong to this industry. They will surface on public industry cards.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => {
            const checked = values.projectIds.includes(project.id);
            return (
              <label
                key={project.id}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 transition ${
                  checked ? "border-white/50 bg-white/10" : "border-white/15 bg-white/5 hover:border-white/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(event) => {
                    const next = event.target.checked
                      ? [...values.projectIds, project.id]
                      : values.projectIds.filter((id) => id !== project.id);
                    handleChange("projectIds", next);
                  }}
                  className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent text-purple-500 focus:ring-purple-500"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{project.title}</p>
                  <p className="text-xs text-white/50">
                    {project.client} • {project.service}
                  </p>
                </div>
              </label>
            );
          })}
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 transition hover:scale-[1.01]"
        >
          {submitLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}






