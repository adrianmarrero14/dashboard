"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ComponentCard from "../../common/ComponentCard";
import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import { useModal } from "@/hooks/useModal";

export default function FormInModal() {
  const t = useTranslations("example.modals.form");
  const tProfile = useTranslations("profile.fields");
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
        className="max-w-[584px] p-5 lg:p-10"
      >
        <form className="">
          <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
            {t("section")}
          </h4>

          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <div className="col-span-1">
              <Label>{tProfile("firstName")}</Label>
              <Input type="text" placeholder="Emirhan" />
            </div>

            <div className="col-span-1">
              <Label>{tProfile("lastName")}</Label>
              <Input type="text" placeholder="Boruch" />
            </div>

            <div className="col-span-1">
              <Label>{tProfile("email")}</Label>
              <Input type="email" placeholder="emirhanboruch55@gmail.com" />
            </div>

            <div className="col-span-1">
              <Label>{tProfile("phone")}</Label>
              <Input type="text" placeholder="+09 363 398 46" />
            </div>

            <div className="col-span-1 sm:col-span-2">
              <Label>{tProfile("bio")}</Label>
              <Input type="text" placeholder="Team Manager" />
            </div>
          </div>

          <div className="flex items-center justify-end w-full gap-3 mt-6">
            <Button size="sm" variant="outline" onClick={closeModal}>
              {tCommon("close")}
            </Button>
            <Button size="sm" onClick={handleSave}>
              {tCommon("saveChanges")}
            </Button>
          </div>
        </form>
      </Modal>
    </ComponentCard>
  );
}
