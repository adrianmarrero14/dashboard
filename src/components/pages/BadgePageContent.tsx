"use client";

import Badge from "@/components/ui/badge/Badge";
import { PlusIcon } from "@/icons";
import { useTranslations } from "next-intl";

const COLORS = [
  "primary",
  "success",
  "error",
  "warning",
  "info",
  "light",
  "dark",
] as const;

function BadgeSection({
  title,
  variant,
  iconPosition,
}: {
  title: string;
  variant: "light" | "solid";
  iconPosition?: "start" | "end";
}) {
  const t = useTranslations("demo.badgePage.colors");

  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-6 py-5">
        <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
          {title}
        </h3>
      </div>
      <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
        <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
          {COLORS.map((color) => {
            const label = t(color);
            const icon = iconPosition ? <PlusIcon /> : undefined;

            return (
              <Badge
                key={color}
                variant={variant}
                color={color}
                startIcon={iconPosition === "start" ? icon : undefined}
                endIcon={iconPosition === "end" ? icon : undefined}
              >
                {label}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function BadgePageContent() {
  const t = useTranslations("demo.badgePage");

  return (
    <div className="space-y-5 sm:space-y-6">
      <BadgeSection title={t("lightBg")} variant="light" />
      <BadgeSection title={t("solidBg")} variant="solid" />
      <BadgeSection
        title={t("lightLeftIcon")}
        variant="light"
        iconPosition="start"
      />
      <BadgeSection
        title={t("solidLeftIcon")}
        variant="solid"
        iconPosition="start"
      />
      <BadgeSection
        title={t("lightRightIcon")}
        variant="light"
        iconPosition="end"
      />
      <BadgeSection
        title={t("solidRightIcon")}
        variant="solid"
        iconPosition="end"
      />
    </div>
  );
}
