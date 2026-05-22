import BarChartOne from "@/components/charts/bar/BarChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import {
  generateAdminPageMetadata,
  getAdminPageTitle,
} from "@/lib/admin-page";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  return generateAdminPageMetadata("barChart");
}

export default async function BarChartPage() {
  const title = await getAdminPageTitle("barChart");
  const t = await getTranslations("pages.barChart");

  return (
    <div>
      <PageBreadcrumb pageTitle={title} />
      <div className="space-y-6">
        <ComponentCard title={t("chartTitle")}>
          <BarChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
