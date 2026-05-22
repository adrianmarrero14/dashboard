"use client";

import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ensureOverviewEnabled,
  getDefaultEnabledModules,
  getModuleById,
  OVERVIEW_MODULE_ID,
  type ModuleId,
} from "@/config/modules";
import { preferencesService } from "@/services/preferences";

type ModulesContextType = {
  enabledModules: ModuleId[];
  isLoading: boolean;
  isModuleEnabled: (id: ModuleId) => boolean;
  toggleModule: (id: ModuleId) => void;
  setModules: (ids: ModuleId[]) => Promise<void>;
};

const ModulesContext = createContext<ModulesContextType | undefined>(undefined);

export const ModulesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [enabledModules, setEnabledModules] = useState<ModuleId[]>(
    getDefaultEnabledModules()
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      try {
        const modules = await preferencesService.getEnabledModules();
        if (!cancelled) {
          setEnabledModules(ensureOverviewEnabled(modules));
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const persistModules = useCallback(async (modules: ModuleId[]) => {
    const next = ensureOverviewEnabled(modules);
    setEnabledModules(next);
    await preferencesService.setEnabledModules(next);
  }, []);

  const setModules = useCallback(
    async (ids: ModuleId[]) => {
      await persistModules(ids);
    },
    [persistModules]
  );

  const toggleModule = useCallback((id: ModuleId) => {
    const module = getModuleById(id);
    if (id === OVERVIEW_MODULE_ID || module?.alwaysEnabled) {
      return;
    }

    setEnabledModules((prev) => {
      const next = ensureOverviewEnabled(
        prev.includes(id)
          ? prev.filter((moduleId) => moduleId !== id)
          : [...prev, id]
      );
      void preferencesService.setEnabledModules(next);
      return next;
    });
  }, []);

  const isModuleEnabled = useCallback(
    (id: ModuleId) => enabledModules.includes(id),
    [enabledModules]
  );

  const value = useMemo(
    () => ({
      enabledModules,
      isLoading,
      isModuleEnabled,
      toggleModule,
      setModules,
    }),
    [enabledModules, isLoading, isModuleEnabled, toggleModule, setModules]
  );

  return (
    <ModulesContext.Provider value={value}>{children}</ModulesContext.Provider>
  );
};

export const useModules = (): ModulesContextType => {
  const context = useContext(ModulesContext);
  if (context === undefined) {
    throw new Error("useModules must be used within a ModulesProvider");
  }
  return context;
};
