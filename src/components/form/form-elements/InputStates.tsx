"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import ComponentCard from "../../common/ComponentCard";
import Input from "../input/InputField";
import Label from "../Label";

export default function InputStates() {
  const tExamples = useTranslations("form.examples.inputStates");
  const tFields = useTranslations("form.fields");
  const tPlaceholders = useTranslations("form.placeholders");
  const tValidation = useTranslations("form.validation");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (value: string) => {
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setError(!isValidEmail);
    return isValidEmail;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  return (
    <ComponentCard title={tExamples("title")} desc={tExamples("desc")}>
      <div className="space-y-5 sm:space-y-6">
        <div>
          <Label>{tFields("email")}</Label>
          <Input
            type="email"
            defaultValue={email}
            error={error}
            onChange={handleEmailChange}
            placeholder={tPlaceholders("emailExample")}
            hint={error ? tValidation("emailInvalid") : ""}
          />
        </div>

        <div>
          <Label>{tFields("email")}</Label>
          <Input
            type="email"
            defaultValue={email}
            success={!error}
            onChange={handleEmailChange}
            placeholder={tPlaceholders("emailExample")}
            hint={!error ? tValidation("emailValid") : ""}
          />
        </div>

        <div>
          <Label>{tFields("email")}</Label>
          <Input
            type="text"
            defaultValue="disabled@example.com"
            disabled={true}
            placeholder={tPlaceholders("disabledEmail")}
            hint={tValidation("fieldDisabled")}
          />
        </div>
      </div>
    </ComponentCard>
  );
}
