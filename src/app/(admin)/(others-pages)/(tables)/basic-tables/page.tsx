import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import {
  generateAdminPageMetadata,
  getAdminPageTitle,
} from "@/lib/admin-page";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  return generateAdminPageMetadata("basicTables");
}

export default async function BasicTables() {
  const title = await getAdminPageTitle("basicTables");
  const t = await getTranslations("pages.basicTables");

  return (
    <div>
      <PageBreadcrumb pageTitle={title} />
      <div className="space-y-6">
        <ComponentCard title={t("tableTitle")}>
          <BasicTableOne />
        </ComponentCard>
      </div>
    </div>
  );
}
