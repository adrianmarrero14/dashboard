"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Alert from "@/components/ui/alert/Alert";
import { useDemoItems } from "@/hooks/useDemoItems";

/**
 * Ejemplo end-to-end de la capa de red (ADR-12): route handler → servicio →
 * `useApiQuery` → UI, renderizando los tres estados (loading / error / data)
 * con feedback consistente vía el componente `Alert`.
 */
export default function ApiDemoContent() {
  const t = useTranslations("apiDemo");
  const [simulateError, setSimulateError] = useState(false);
  const { data, isLoading, isFetching, error, refetch } =
    useDemoItems(simulateError);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] xl:p-8">
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        {t("description")}
      </p>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => refetch()}
          className="rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-50"
          disabled={isFetching}
        >
          {isFetching ? t("loading") : t("reload")}
        </button>

        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            checked={simulateError}
            onChange={(event) => setSimulateError(event.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500"
          />
          {t("simulateError")}
        </label>
      </div>

      {isLoading ? (
        <div
          role="status"
          className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400"
        >
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-brand-500" />
          {t("loading")}
        </div>
      ) : error ? (
        <Alert
          variant="error"
          title={t("errorTitle")}
          message={`${error.message} (${error.status})`}
        />
      ) : (
        <ul className="flex flex-col gap-3">
          {data?.map((item) => (
            <li
              key={item.id}
              className="rounded-lg border border-gray-200 p-4 dark:border-gray-800"
            >
              <p className="font-medium text-gray-800 dark:text-white/90">
                {item.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.subtitle}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
