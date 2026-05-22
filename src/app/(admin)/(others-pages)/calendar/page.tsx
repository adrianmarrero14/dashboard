import Calendar from "@/components/calendar/Calendar";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import {
  generateAdminPageMetadata,
  getAdminPageTitle,
} from "@/lib/admin-page";
import React from "react";

export async function generateMetadata() {
  return generateAdminPageMetadata("calendar");
}

export default async function CalendarPage() {
  const title = await getAdminPageTitle("calendar");

  return (
    <div>
      <PageBreadcrumb pageTitle={title} />
      <Calendar />
    </div>
  );
}
