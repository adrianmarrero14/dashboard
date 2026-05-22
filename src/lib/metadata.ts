import type { Metadata } from "next";
import { SITE } from "@/config/site";

export function pageMetadata(page: string, description?: string): Metadata {
  return {
    title: page,
    description: description ?? SITE.description,
  };
}
