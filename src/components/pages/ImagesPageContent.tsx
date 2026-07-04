"use client";

import ComponentCard from "@/components/common/ComponentCard";
import ResponsiveImage from "@/components/ui/images/ResponsiveImage";
import ThreeColumnImageGrid from "@/components/ui/images/ThreeColumnImageGrid";
import TwoColumnImageGrid from "@/components/ui/images/TwoColumnImageGrid";
import { useTranslations } from "next-intl";

export default function ImagesPageContent() {
  const t = useTranslations("demo.images");

  return (
    <div className="space-y-5 sm:space-y-6">
      <ComponentCard title={t("responsive")}>
        <ResponsiveImage />
      </ComponentCard>
      <ComponentCard title={t("grid2")}>
        <TwoColumnImageGrid />
      </ComponentCard>
      <ComponentCard title={t("grid3")}>
        <ThreeColumnImageGrid />
      </ComponentCard>
    </div>
  );
}
