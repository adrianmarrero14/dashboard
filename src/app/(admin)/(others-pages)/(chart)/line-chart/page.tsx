import LineChartOne from "@/components/charts/line/LineChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import {
  generateAdminPageMetadata,
  getAdminPageTitle,
} from "@/lib/admin-page";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  return generateAdminPageMetadata("lineChart");
}

export default async function LineChart() {
  const title = await getAdminPageTitle("lineChart");
  const t = await getTranslations("pages.lineChart");

  return (
    <div>
      <PageBreadcrumb pageTitle={title} />
      <div className="space-y-6">
        <ComponentCard title={t("chartTitle")}>
          <LineChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
