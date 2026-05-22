"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import ComponentCard from "../../common/ComponentCard";
import Checkbox from "../input/Checkbox";

export default function CheckboxComponents() {
  const tExamples = useTranslations("form.examples.checkbox");
  const tStates = useTranslations("form.states");
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(true);
  const [isCheckedDisabled, setIsCheckedDisabled] = useState(false);

  return (
    <ComponentCard title={tExamples("title")} desc={tExamples("desc")}>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Checkbox checked={isChecked} onChange={setIsChecked} />
          <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
            {tStates("default")}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox
            checked={isCheckedTwo}
            onChange={setIsCheckedTwo}
            label={tStates("checked")}
          />
        </div>
        <div className="flex items-center gap-3">
          <Checkbox
            checked={isCheckedDisabled}
            onChange={setIsCheckedDisabled}
            disabled
            label={tStates("disabled")}
          />
        </div>
      </div>
    </ComponentCard>
  );
}
