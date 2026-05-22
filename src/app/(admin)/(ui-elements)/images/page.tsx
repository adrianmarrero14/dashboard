import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ImagesPageContent from "@/components/pages/ImagesPageContent";
import {
  generateAdminPageMetadata,
  getAdminPageTitle,
} from "@/lib/admin-page";
import React from "react";

export async function generateMetadata() {
  return generateAdminPageMetadata("images");
}

export default async function Images() {
  const title = await getAdminPageTitle("images");

  return (
    <div>
      <PageBreadcrumb pageTitle={title} />
      <ImagesPageContent />
    </div>
  );
}
