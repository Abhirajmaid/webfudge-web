"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";
import AdminShell from "@/components/admin/AdminShell";
import IndustryForm from "@/components/admin/IndustryForm";
import { sampleProjects } from "@/data/projects";
import { useIndustriesStore } from "@/hooks/useIndustriesStore";

type Props = {
  params: { id: string };
};

export default function EditIndustryPage({ params }: Props) {
  const router = useRouter();
  const { industries, isReady, updateIndustry, getIndustryById } = useIndustriesStore();

  const industry = useMemo(() => getIndustryById(params.id), [getIndustryById, params.id, industries]);

  if (!isReady) {
    return (
      <AdminShell>
        <div className="py-16 text-center text-white/60">Loading industry…</div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Industries</p>
          <h1 className="text-4xl font-bold text-white">Edit Industry</h1>
          <p className="pt-3 text-sm text-white/60 max-w-2xl">
            Update positioning, insights and linked projects for {industry?.name}.
          </p>
        </div>
      </div>

      {industry ? (
        <IndustryForm
          industry={industry}
          projects={sampleProjects}
          onSubmit={(input) => {
            updateIndustry(industry.id, input);
            router.push("/admin/industries");
          }}
          onCancel={() => router.push("/admin/industries")}
          submitLabel="Save Changes"
        />
      ) : (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-white/70">
          Industry not found.{" "}
          <button
            type="button"
            onClick={() => router.push("/admin/industries")}
            className="underline"
          >
            Return to industries
          </button>
          .
        </div>
      )}
    </AdminShell>
  );
}

