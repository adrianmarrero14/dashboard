"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ComponentCard from "../../common/ComponentCard";
import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";
import { useModal } from "@/hooks/useModal";

export default function VerticallyCenteredModal() {
  const t = useTranslations("example.modals.centered");
  const tCommon = useTranslations("common.actions");
  const { isOpen, openModal, closeModal } = useModal();

  const handleSave = () => {
    console.log("Saving changes...");
    closeModal();
  };

  return (
    <ComponentCard title={t("title")}>
      <Button size="sm" onClick={openModal}>
        {tCommon("openModal")}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        showCloseButton={false}
        className="max-w-[507px] p-6 lg:p-10"
      >
        <div className="text-center">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
            {t("heading")}
          </h4>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            {t("body")}
          </p>

          <div className="flex items-center justify-center w-full gap-3 mt-8">
            <Button size="sm" variant="outline" onClick={closeModal}>
              {tCommon("close")}
            </Button>
            <Button size="sm" onClick={handleSave}>
              {tCommon("saveChanges")}
            </Button>
          </div>
        </div>
      </Modal>
    </ComponentCard>
  );
}
