"use client";

import ProjectSectionPage from "@/components/admin/ProjectSectionPage";
import { projectSectionsBySlug } from "@/app/admin/projects/sectionConfigs";

export default function SocialMediaPage() {
  return <ProjectSectionPage config={projectSectionsBySlug["social-media"]} />;
}



