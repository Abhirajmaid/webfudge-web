"use client";

import ProjectSectionPage from "@/components/admin/ProjectSectionPage";
import { projectSectionsBySlug } from "@/app/admin/projects/sectionConfigs";

export default function WebsiteDevelopmentPage() {
  return <ProjectSectionPage config={projectSectionsBySlug["website-development"]} />;
}



