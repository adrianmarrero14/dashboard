"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ComponentCard from "../../common/ComponentCard";
import { Modal } from "../../ui/modal";
import { useModal } from "@/hooks/useModal";

export default function ModalBasedAlerts() {
  const tCard = useTranslations("example");
  const tSuccess = useTranslations("example.alerts.success");
  const tInfo = useTranslations("example.alerts.info");
  const tWarning = useTranslations("example.alerts.warning");
  const tDanger = useTranslations("example.alerts.danger");
  const successModal = useModal();
  const infoModal = useModal();
  const warningModal = useModal();
  const errorModal = useModal();

  return (
    <ComponentCard title={tCard("modalBasedTitle")}>
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={successModal.openModal}
          className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-success-500 shadow-theme-xs hover:bg-success-600"
        >
          {tSuccess("title")}
        </button>
        <button
          onClick={infoModal.openModal}
          className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-blue-light-500 shadow-theme-xs hover:bg-blue-light-600"
        >
          {tInfo("title")}
        </button>
        <button
          onClick={warningModal.openModal}
          className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-warning-500 shadow-theme-xs hover:bg-warning-600"
        >
          {tWarning("title")}
        </button>
        <button
          onClick={errorModal.openModal}
          className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-error-500 shadow-theme-xs hover:bg-error-600"
        >
          {tDanger("title")}
        </button>
      </div>

      <Modal
        isOpen={successModal.isOpen}
        onClose={successModal.closeModal}
        className="max-w-[600px] p-5 lg:p-10"
      >
        <div className="text-center">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
            {tSuccess("message")}
          </h4>
          <div className="flex items-center justify-center w-full gap-3 mt-7">
            <button
              type="button"
              className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-success-500 shadow-theme-xs hover:bg-success-600 sm:w-auto"
            >
              {tSuccess("button")}
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={infoModal.isOpen}
        onClose={infoModal.closeModal}
        className="max-w-[600px] p-5 lg:p-10"
      >
        <div className="text-center">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
            {tInfo("message")}
          </h4>
          <div className="flex items-center justify-center w-full gap-3 mt-7">
            <button
              type="button"
              className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-blue-light-500 shadow-theme-xs hover:bg-blue-light-600 sm:w-auto"
            >
              {tInfo("button")}
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={warningModal.isOpen}
        onClose={warningModal.closeModal}
        className="max-w-[600px] p-5 lg:p-10"
      >
        <div className="text-center">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
            {tWarning("message")}
          </h4>
          <div className="flex items-center justify-center w-full gap-3 mt-7">
            <button
              type="button"
              className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-warning-500 shadow-theme-xs hover:bg-warning-600 sm:w-auto"
            >
              {tWarning("button")}
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={errorModal.isOpen}
        onClose={errorModal.closeModal}
        className="max-w-[600px] p-5 lg:p-10"
      >
        <div className="text-center">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
            {tDanger("message")}
          </h4>
          <div className="flex items-center justify-center w-full gap-3 mt-7">
            <button
              type="button"
              className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-error-500 shadow-theme-xs hover:bg-error-600 sm:w-auto"
            >
              {tDanger("button")}
            </button>
          </div>
        </div>
      </Modal>
    </ComponentCard>
  );
}
