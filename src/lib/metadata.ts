import { SITE } from "@/config/site";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function pageMetadata(
  pageKey: string,
  descriptionKey?: string
): Promise<Metadata> {
  const t = await getTranslations("pages");
  const site = await getTranslations("site");

  return {
    title: t(`${pageKey}.title`),
    description: descriptionKey
      ? t(`${descriptionKey}.description`)
      : site("description"),
  };
}

export async function rootMetadata(): Promise<Metadata> {
  const site = await getTranslations("site");

  return {
    title: {
      default: SITE.name,
      template: `%s | ${SITE.name}`,
    },
    description: site("description"),
    applicationName: SITE.name,
  };
}
