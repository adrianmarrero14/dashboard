"use client";

import ComponentCard from "@/components/common/ComponentCard";
import Avatar from "@/components/ui/avatar/Avatar";
import { useTranslations } from "next-intl";

const SIZES = [
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
  "xxlarge",
] as const;

function AvatarRow({
  status,
}: {
  status?: "online" | "offline" | "busy";
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
      {SIZES.map((size) => (
        <Avatar
          key={size}
          src="/images/user/user-01.jpg"
          size={size}
          status={status}
        />
      ))}
    </div>
  );
}

export default function AvatarsPageContent() {
  const t = useTranslations("demo.avatars");

  return (
    <div className="space-y-5 sm:space-y-6">
      <ComponentCard title={t("default")}>
        <AvatarRow />
      </ComponentCard>
      <ComponentCard title={t("online")}>
        <AvatarRow status="online" />
      </ComponentCard>
      <ComponentCard title={t("offline")}>
        <AvatarRow status="offline" />
      </ComponentCard>
      <ComponentCard title={t("busy")}>
        <AvatarRow status="busy" />
      </ComponentCard>
    </div>
  );
}
