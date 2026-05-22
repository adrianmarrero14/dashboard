import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import DemographicCard from "@/components/ecommerce/DemographicCard";
import { SITE } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  return pageMetadata("overview");
}

export default async function OverviewPage() {
  const t = await getTranslations("pages.overview");
  const tSite = await getTranslations("site");

  return (
    <div>
      <PageBreadcrumb pageTitle={t("title")} />
      <div className="mb-6">
        <ComponentCard title={SITE.name} desc={tSite("tagline")}>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {tSite("description")} {t("sampleDataNote")}
          </p>
        </ComponentCard>
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />
          <MonthlySalesChart />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>
        <div className="col-span-12">
          <StatisticsChart />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>
        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}
