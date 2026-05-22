"use client";

import type { NavLabelKey } from "@/lib/nav-labels";
import { useTranslations } from "next-intl";

export function useNavLabel(nameKey: NavLabelKey): string {
  const dot = nameKey.indexOf(".");
  const namespace = nameKey.slice(0, dot);
  const key = nameKey.slice(dot + 1);
  const t = useTranslations(namespace);

  return t(key);
}
