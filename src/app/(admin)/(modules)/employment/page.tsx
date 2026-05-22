import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { pageMetadata } from "@/lib/metadata";
import React from "react";

export const metadata = pageMetadata("Empleo");

export default function EmploymentPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Empleo" />
      <div className="min-h-[280px] rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Empleo
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            Próximamente: seguimiento de trabajo, contratos y trayectoria
            profesional.
          </p>
        </div>
      </div>
    </div>
  );
}
