"use client";

import ComponentCard from "@/components/common/ComponentCard";
import Button from "@/components/ui/button/Button";
import { BoxIcon } from "@/icons";
import { useTranslations } from "next-intl";

export default function ButtonsPageContent() {
  const t = useTranslations("demo.buttons");

  return (
    <div className="space-y-5 sm:space-y-6">
      <ComponentCard title={t("primary")}>
        <div className="flex items-center gap-5">
          <Button size="sm" variant="primary">
            {t("buttonText")}
          </Button>
          <Button size="md" variant="primary">
            {t("buttonText")}
          </Button>
        </div>
      </ComponentCard>
      <ComponentCard title={t("primaryLeftIcon")}>
        <div className="flex items-center gap-5">
          <Button size="sm" variant="primary" startIcon={<BoxIcon />}>
            {t("buttonText")}
          </Button>
          <Button size="md" variant="primary" startIcon={<BoxIcon />}>
            {t("buttonText")}
          </Button>
        </div>
      </ComponentCard>
      <ComponentCard title={t("primaryRightIcon")}>
        <div className="flex items-center gap-5">
          <Button size="sm" variant="primary" endIcon={<BoxIcon />}>
            {t("buttonText")}
          </Button>
          <Button size="md" variant="primary" endIcon={<BoxIcon />}>
            {t("buttonText")}
          </Button>
        </div>
      </ComponentCard>
      <ComponentCard title={t("secondary")}>
        <div className="flex items-center gap-5">
          <Button size="sm" variant="outline">
            {t("buttonText")}
          </Button>
          <Button size="md" variant="outline">
            {t("buttonText")}
          </Button>
        </div>
      </ComponentCard>
      <ComponentCard title={t("outlineLeftIcon")}>
        <div className="flex items-center gap-5">
          <Button size="sm" variant="outline" startIcon={<BoxIcon />}>
            {t("buttonText")}
          </Button>
          <Button size="md" variant="outline" startIcon={<BoxIcon />}>
            {t("buttonText")}
          </Button>
        </div>
      </ComponentCard>
      <ComponentCard title={t("outlineRightIcon")}>
        <div className="flex items-center gap-5">
          <Button size="sm" variant="outline" endIcon={<BoxIcon />}>
            {t("buttonText")}
          </Button>
          <Button size="md" variant="outline" endIcon={<BoxIcon />}>
            {t("buttonText")}
          </Button>
        </div>
      </ComponentCard>
    </div>
  );
}
