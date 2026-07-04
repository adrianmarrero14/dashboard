"use client";
import { useTranslations } from "next-intl";
import { useModal } from "@/hooks/useModal";
import ComponentCard from "../../common/ComponentCard";
import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";

export default function FullScreenModal() {
  const t = useTranslations("example.modals.fullscreen");
  const tCommon = useTranslations("common.actions");
  const {
    isOpen: isFullscreenModalOpen,
    openModal: openFullscreenModal,
    closeModal: closeFullscreenModal,
  } = useModal();

  const handleSave = () => {
    console.log("Saving changes...");
    closeFullscreenModal();
  };

  return (
    <ComponentCard title={t("title")}>
      <Button size="sm" onClick={openFullscreenModal}>
        {tCommon("openModal")}
      </Button>
      <Modal
        isOpen={isFullscreenModalOpen}
        onClose={closeFullscreenModal}
        isFullscreen={true}
        showCloseButton={true}
      >
        <div className="fixed top-0 left-0 flex flex-col justify-between w-full h-screen p-6 overflow-x-hidden overflow-y-auto bg-white dark:bg-gray-900 lg:p-10">
          <div>
            <h4 className="font-semibold text-gray-800 mb-7 text-title-sm dark:text-white/90">
              {t("heading")}
            </h4>
            <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
              {t("body")}
            </p>
          </div>
          <div className="flex items-center justify-end w-full gap-3 mt-8">
            <Button size="sm" variant="outline" onClick={closeFullscreenModal}>
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
