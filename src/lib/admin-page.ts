import { pageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function getAdminPageTitle(pageKey: string) {
  const t = await getTranslations(`pages.${pageKey}`);
  return t("title");
}

export async function generateAdminPageMetadata(pageKey: string) {
  return pageMetadata(pageKey);
}
