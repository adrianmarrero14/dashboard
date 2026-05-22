import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ButtonsPageContent from "@/components/pages/ButtonsPageContent";
import {
  generateAdminPageMetadata,
  getAdminPageTitle,
} from "@/lib/admin-page";
import React from "react";

export async function generateMetadata() {
  return generateAdminPageMetadata("buttons");
}

export default async function Buttons() {
  const title = await getAdminPageTitle("buttons");

  return (
    <div>
      <PageBreadcrumb pageTitle={title} />
      <ButtonsPageContent />
    </div>
  );
}
