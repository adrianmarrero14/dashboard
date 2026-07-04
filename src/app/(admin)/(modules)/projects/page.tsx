import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { pageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  return pageMetadata("projects", "projects");
}

export default async function ProjectsPage() {
  const t = await getTranslations("pages.projects");

  return (
    <div>
      <PageBreadcrumb pageTitle={t("title")} />
      <p className="text-sm text-gray-600 dark:text-gray-400">{t("description")}</p>
    </div>
  );
}
