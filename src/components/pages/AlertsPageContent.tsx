"use client";

import ComponentCard from "@/components/common/ComponentCard";
import Alert from "@/components/ui/alert/Alert";
import { useTranslations } from "next-intl";

export default function AlertsPageContent() {
  const t = useTranslations("demo.alertsPage");
  const tAlert = useTranslations("ui.alert");

  const caution = t("cautionMessage");

  return (
    <div className="space-y-5 sm:space-y-6">
      <ComponentCard title={t("successCard")}>
        <Alert
          variant="success"
          title={t("successTitle")}
          message={caution}
          showLink={true}
          linkHref="/"
          linkText={tAlert("learnMore")}
        />
        <Alert
          variant="success"
          title={t("successTitle")}
          message={caution}
          showLink={false}
        />
      </ComponentCard>
      <ComponentCard title={t("warningCard")}>
        <Alert
          variant="warning"
          title={t("warningTitle")}
          message={caution}
          showLink={true}
          linkHref="/"
          linkText={tAlert("learnMore")}
        />
        <Alert
          variant="warning"
          title={t("warningTitle")}
          message={caution}
          showLink={false}
        />
      </ComponentCard>
      <ComponentCard title={t("errorCard")}>
        <Alert
          variant="error"
          title={t("errorTitle")}
          message={caution}
          showLink={true}
          linkHref="/"
          linkText={tAlert("learnMore")}
        />
        <Alert
          variant="error"
          title={t("errorTitle")}
          message={caution}
          showLink={false}
        />
      </ComponentCard>
      <ComponentCard title={t("infoCard")}>
        <Alert
          variant="info"
          title={t("infoTitle")}
          message={caution}
          showLink={true}
          linkHref="/"
          linkText={tAlert("learnMore")}
        />
        <Alert
          variant="info"
          title={t("infoTitle")}
          message={caution}
          showLink={false}
        />
      </ComponentCard>
    </div>
  );
}
