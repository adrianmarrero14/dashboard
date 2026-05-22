"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ComponentCard from "../../common/ComponentCard";
import Switch from "../switch/Switch";

export default function ToggleSwitch() {
  const tExamples = useTranslations("form.examples.toggle");
  const tStates = useTranslations("form.states");

  const handleSwitchChange = (checked: boolean) => {
    console.log("Switch is now:", checked ? "ON" : "OFF");
  };

  return (
    <ComponentCard title={tExamples("title")} desc={tExamples("desc")}>
      <div className="flex gap-4">
        <Switch
          label={tStates("default")}
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch
          label={tStates("checked")}
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch label={tStates("disabled")} disabled={true} />
      </div>
      <div className="flex gap-4">
        <Switch
          label={tStates("default")}
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch
          label={tStates("checked")}
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch label={tStates("disabled")} disabled={true} color="gray" />
      </div>
    </ComponentCard>
  );
}
