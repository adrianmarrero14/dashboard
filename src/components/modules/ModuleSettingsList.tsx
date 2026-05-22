"use client";

import Switch from "@/components/form/switch/Switch";
import { MODULE_REGISTRY } from "@/config/modules";
import { useModules } from "@/context/ModulesContext";

export default function ModuleSettingsList() {
  const { isModuleEnabled, toggleModule } = useModules();

  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-800">
      {MODULE_REGISTRY.map((module) => {
        const enabled = isModuleEnabled(module.id);
        const locked = module.alwaysEnabled === true;

        return (
          <li
            key={module.id}
            className="flex flex-col gap-3 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0 flex-1">
              <p className="font-medium text-gray-800 dark:text-white/90">
                {module.label}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {module.description}
              </p>
              {locked && (
                <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                  Siempre activo
                </p>
              )}
            </div>
            <Switch
              key={`${module.id}-${enabled}`}
              label={enabled ? "Activado" : "Desactivado"}
              defaultChecked={enabled}
              disabled={locked}
              onChange={() => toggleModule(module.id)}
            />
          </li>
        );
      })}
    </ul>
  );
}
