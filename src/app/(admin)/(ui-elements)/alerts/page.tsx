import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import AlertsPageContent from "@/components/pages/AlertsPageContent";
import {
  generateAdminPageMetadata,
  getAdminPageTitle,
} from "@/lib/admin-page";
import React from "react";

export async function generateMetadata() {
  return generateAdminPageMetadata("alerts");
}

export default async function Alerts() {
  const title = await getAdminPageTitle("alerts");

  return (
    <div>
      <PageBreadcrumb pageTitle={title} />
      <AlertsPageContent />
    </div>
  );
}
