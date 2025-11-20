"use client";

import ProjectSectionPage from "@/components/admin/ProjectSectionPage";
import { projectSectionsBySlug } from "@/app/admin/projects/sectionConfigs";

export default function BrandIdentityPage() {
  return <ProjectSectionPage config={projectSectionsBySlug["brand-identity"]} />;
}



