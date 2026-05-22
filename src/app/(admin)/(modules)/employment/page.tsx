import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { pageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  return pageMetadata("employment", "employment");
}

export default async function EmploymentPage() {
  const t = await getTranslations("pages.employment");

  return (
    <div>
      <PageBreadcrumb pageTitle={t("title")} />
      <p className="text-sm text-gray-600 dark:text-gray-400">{t("description")}</p>
    </div>
  );
}
