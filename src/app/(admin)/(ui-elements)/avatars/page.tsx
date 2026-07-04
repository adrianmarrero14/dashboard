import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import AvatarsPageContent from "@/components/pages/AvatarsPageContent";
import {
  generateAdminPageMetadata,
  getAdminPageTitle,
} from "@/lib/admin-page";
import React from "react";

export async function generateMetadata() {
  return generateAdminPageMetadata("avatars");
}

export default async function AvatarPage() {
  const title = await getAdminPageTitle("avatars");

  return (
    <div>
      <PageBreadcrumb pageTitle={title} />
      <AvatarsPageContent />
    </div>
  );
}
