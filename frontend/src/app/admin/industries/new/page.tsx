"use client";

import { useRouter } from "next/navigation";
import AdminShell from "@/components/admin/AdminShell";
import IndustryForm from "@/components/admin/IndustryForm";
import { sampleProjects } from "@/data/projects";
import { useIndustriesStore } from "@/hooks/useIndustriesStore";

export default function NewIndustryPage() {
  const router = useRouter();
  const { addIndustry } = useIndustriesStore();

  return (
    <AdminShell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Industries</p>
          <h1 className="text-4xl font-bold text-white">Create Industry</h1>
          <p className="pt-3 text-sm text-white/60 max-w-2xl">
            Capture market positioning and map relevant projects so they render on the public industry
            landing pages.
          </p>
        </div>
      </div>

      <IndustryForm
        projects={sampleProjects}
        onSubmit={(input) => {
          addIndustry({ ...input });
          router.push("/admin/industries");
        }}
        onCancel={() => router.push("/admin/industries")}
        submitLabel="Create Industry"
      />
    </AdminShell>
  );
}






