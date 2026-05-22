import type { ModuleId } from "@/config/modules";

export interface UserModulePreferences {
  userId: string;
  enabledModules: ModuleId[];
  updatedAt: string;
}

export interface PreferencesService {
  getEnabledModules(): Promise<ModuleId[]>;
  setEnabledModules(modules: ModuleId[]): Promise<void>;
}
