"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import ComponentCard from "../../common/ComponentCard";
import TextArea from "../input/TextArea";
import Label from "../Label";

export default function TextAreaInput() {
  const tExamples = useTranslations("form.examples.textarea");
  const tFields = useTranslations("form.fields");
  const [message, setMessage] = useState("");
  const [messageTwo, setMessageTwo] = useState("");

  return (
    <ComponentCard title={tExamples("title")} desc={tExamples("desc")}>
      <div className="space-y-6">
        <div>
          <Label>{tFields("description")}</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
          />
        </div>

        <div>
          <Label>{tFields("description")}</Label>
          <TextArea rows={6} disabled />
        </div>

        <div>
          <Label>{tFields("description")}</Label>
          <TextArea
            rows={6}
            value={messageTwo}
            error
            onChange={(value) => setMessageTwo(value)}
            hint={tExamples("hintInvalid")}
          />
        </div>
      </div>
    </ComponentCard>
  );
}
