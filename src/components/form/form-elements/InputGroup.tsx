"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import { EnvelopeIcon } from "../../../icons";
import PhoneInput from "../group-input/PhoneInput";

export default function InputGroup() {
  const tExamples = useTranslations("form.examples.inputGroup");
  const tFields = useTranslations("form.fields");
  const tPlaceholders = useTranslations("form.placeholders");
  const tPhone = useTranslations("form.phone");

  const countries = [
    { code: "US", label: "+1" },
    { code: "GB", label: "+44" },
    { code: "CA", label: "+1" },
    { code: "AU", label: "+61" },
  ];

  const handlePhoneNumberChange = (phoneNumber: string) => {
    console.log("Updated phone number:", phoneNumber);
  };

  return (
    <ComponentCard title={tExamples("title")} desc={tExamples("desc")}>
      <div className="space-y-6">
        <div>
          <Label>{tFields("email")}</Label>
          <div className="relative">
            <Input
              placeholder={tPlaceholders("emailExample")}
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <EnvelopeIcon />
            </span>
          </div>
        </div>
        <div>
          <Label>{tFields("phone")}</Label>
          <PhoneInput
            selectPosition="start"
            countries={countries}
            placeholder={tPhone("placeholder")}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div>
          <Label>{tFields("phone")}</Label>
          <PhoneInput
            selectPosition="end"
            countries={countries}
            placeholder={tPhone("placeholder")}
            onChange={handlePhoneNumberChange}
          />
        </div>
      </div>
    </ComponentCard>
  );
}
