import {
  getDefaultEnabledModules,
  sanitizeEnabledModules,
  type ModuleId,
} from "@/config/modules";
import type { PreferencesService } from "@/types/preferences";

const STORAGE_KEY = "adrian-project-enabled-modules";

function readStoredModules(): ModuleId[] | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return null;
    }
    return sanitizeEnabledModules(parsed as ModuleId[]);
  } catch {
    return null;
  }
}

function writeStoredModules(modules: ModuleId[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(modules));
}

export class LocalPreferencesService implements PreferencesService {
  async getEnabledModules(): Promise<ModuleId[]> {
    return readStoredModules() ?? getDefaultEnabledModules();
  }

  async setEnabledModules(modules: ModuleId[]): Promise<void> {
    if (typeof window === "undefined") {
      return;
    }
    writeStoredModules(sanitizeEnabledModules(modules));
  }
}

// TODO: swap for ApiPreferencesService when backend is ready.
export const preferencesService: PreferencesService =
  new LocalPreferencesService();
