"use client";

import ProjectSectionPage from "@/components/admin/ProjectSectionPage";
import { projectSectionsBySlug } from "@/app/admin/projects/sectionConfigs";

export default function GraphicDesignPage() {
  return <ProjectSectionPage config={projectSectionsBySlug["graphic-design"]} />;
}



