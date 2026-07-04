import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import VideosExample from "@/components/ui/video/VideosExample";
import {
  generateAdminPageMetadata,
  getAdminPageTitle,
} from "@/lib/admin-page";
import React from "react";

export async function generateMetadata() {
  return generateAdminPageMetadata("videos");
}

export default async function VideoPage() {
  const title = await getAdminPageTitle("videos");

  return (
    <div>
      <PageBreadcrumb pageTitle={title} />
      <VideosExample />
    </div>
  );
}
