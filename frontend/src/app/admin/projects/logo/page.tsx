"use client";

import ProjectSectionPage from "@/components/admin/ProjectSectionPage";
import { projectSectionsBySlug } from "@/app/admin/projects/sectionConfigs";

export default function LogoProjectsPage() {
  return <ProjectSectionPage config={projectSectionsBySlug["logo"]} />;
}



