import ModuleSettingsList from "@/components/modules/ModuleSettingsList";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { pageMetadata } from "@/lib/metadata";
import React from "react";

export const metadata = pageMetadata("Configuración");

export default function SettingsPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Configuración" />
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mb-6">
          <h3 className="mb-2 font-semibold text-gray-800 text-theme-xl dark:text-white/90">
            Módulos
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Activa o desactiva las secciones del panel. Los cambios se guardan en
            este dispositivo.
          </p>
        </div>
        <ModuleSettingsList />
      </div>
    </div>
  );
}
