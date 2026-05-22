"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ComponentCard from "../../common/ComponentCard";
import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button";
import { useModal } from "@/hooks/useModal";

export default function DefaultModal() {
  const t = useTranslations("example.modals.default");
  const tCommon = useTranslations("common.actions");
  const { isOpen, openModal, closeModal } = useModal();

  const handleSave = () => {
    console.log("Saving changes...");
    closeModal();
  };

  return (
    <div>
      <ComponentCard title={t("title")}>
        <Button size="sm" onClick={openModal}>
          {tCommon("openModal")}
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          className="max-w-[600px] p-5 lg:p-10"
        >
          <h4 className="font-semibold text-gray-800 mb-7 text-title-sm dark:text-white/90">
            {t("heading")}
          </h4>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            {t("body")}
          </p>
          <div className="flex items-center justify-end w-full gap-3 mt-8">
            <Button size="sm" variant="outline" onClick={closeModal}>
              {tCommon("close")}
            </Button>
            <Button size="sm" onClick={handleSave}>
              {tCommon("saveChanges")}
            </Button>
          </div>
        </Modal>
      </ComponentCard>
    </div>
  );
}
