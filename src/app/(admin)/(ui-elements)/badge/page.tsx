import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BadgePageContent from "@/components/pages/BadgePageContent";
import {
  generateAdminPageMetadata,
  getAdminPageTitle,
} from "@/lib/admin-page";
import React from "react";

export async function generateMetadata() {
  return generateAdminPageMetadata("badge");
}

export default async function BadgePage() {
  const title = await getAdminPageTitle("badge");

  return (
    <div>
      <PageBreadcrumb pageTitle={title} />
      <BadgePageContent />
    </div>
  );
}
