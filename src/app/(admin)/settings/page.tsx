import LanguageSwitcher from "@/components/settings/LanguageSwitcher";
import ModuleSettingsList from "@/components/modules/ModuleSettingsList";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { pageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  return pageMetadata("settings");
}

export default async function SettingsPage() {
  const t = await getTranslations("settings");

  return (
    <div>
      <PageBreadcrumb pageTitle={t("title")} />
      <div className="space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
          <div className="mb-6">
            <h3 className="mb-2 font-semibold text-gray-800 text-theme-xl dark:text-white/90">
              {t("languageHeading")}
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              {t("languageDescription")}
            </p>
            <LanguageSwitcher />
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
          <div className="mb-6">
            <h3 className="mb-2 font-semibold text-gray-800 text-theme-xl dark:text-white/90">
              {t("modulesHeading")}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("modulesDescription")}
            </p>
          </div>
          <ModuleSettingsList />
        </div>
      </div>
    </div>
  );
}
