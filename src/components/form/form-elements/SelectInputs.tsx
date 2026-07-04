"use client";
import React, { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";
import MultiSelect from "../MultiSelect";
import { ChevronDownIcon } from "@/icons";

export default function SelectInputs() {
  const tExamples = useTranslations("form.examples.selectInputs");
  const tFields = useTranslations("form.fields");
  const tPlaceholders = useTranslations("form.placeholders");
  const tOptions = useTranslations("form.examples.options");

  const options = useMemo(
    () => [
      { value: "marketing", label: tOptions("marketing") },
      { value: "template", label: tOptions("template") },
      { value: "development", label: tOptions("development") },
    ],
    [tOptions]
  );

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  const multiOptions = useMemo(
    () => [
      { value: "1", text: tOptions("option1"), selected: false },
      { value: "2", text: tOptions("option2"), selected: false },
      { value: "3", text: tOptions("option3"), selected: false },
      { value: "4", text: tOptions("option4"), selected: false },
      { value: "5", text: tOptions("option5"), selected: false },
    ],
    [tOptions]
  );

  return (
    <ComponentCard title={tExamples("title")} desc={tExamples("desc")}>
      <div className="space-y-6">
        <div>
          <Label>{tFields("selectInput")}</Label>
          <div className="relative">
            <Select
              options={options}
              placeholder={tPlaceholders("selectOption")}
              onChange={handleSelectChange}
              className="dark:bg-dark-900"
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <ChevronDownIcon />
            </span>
          </div>
        </div>
        <div className="relative">
          <MultiSelect
            label={tExamples("multiSelectLabel")}
            options={multiOptions}
            defaultSelected={["1", "3"]}
            onChange={(values) => setSelectedValues(values)}
          />
          <p className="sr-only">Selected Values: {selectedValues.join(", ")}</p>
        </div>
      </div>
    </ComponentCard>
  );
}
