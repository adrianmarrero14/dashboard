"use client";

import {
  localeLabels,
  locales,
  type Locale,
} from "@/i18n/config";
import { setLocale } from "@/services/locale";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleChange = (locale: Locale) => {
    if (locale === currentLocale) {
      return;
    }

    startTransition(async () => {
      await setLocale(locale);
      router.refresh();
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {locales.map((locale) => {
        const active = locale === currentLocale;

        return (
          <button
            key={locale}
            type="button"
            disabled={isPending}
            onClick={() => handleChange(locale)}
            className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
              active
                ? "border-brand-500 bg-brand-500 text-white"
                : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.03]"
            }`}
          >
            {localeLabels[locale]}
          </button>
        );
      })}
    </div>
  );
}
