import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ApiDemoContent from "@/components/pages/ApiDemoContent";
import {
  generateAdminPageMetadata,
  getAdminPageTitle,
} from "@/lib/admin-page";
import React from "react";

export async function generateMetadata() {
  return generateAdminPageMetadata("apiDemo");
}

export default async function ApiDemoPage() {
  const title = await getAdminPageTitle("apiDemo");

  return (
    <div>
      <PageBreadcrumb pageTitle={title} />
      <ApiDemoContent />
    </div>
  );
}
