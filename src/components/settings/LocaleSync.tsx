"use client";

import { readStoredLocale, setLocaleCookie } from "@/services/locale";
import { useEffect } from "react";

/** Syncs localStorage locale to cookie when they differ (e.g. after API restore). */
export default function LocaleSync() {
  useEffect(() => {
    const stored = readStoredLocale();
    if (stored) {
      setLocaleCookie(stored);
    }
  }, []);

  return null;
}
