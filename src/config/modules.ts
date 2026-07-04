import type { NavLabelKey } from "@/lib/nav-labels";

export type ModuleId =
  | "overview"
  | "employment"
  | "finances"
  | "projects"
  | "calendar"
  | "profile";

export const OVERVIEW_MODULE_ID: ModuleId = "overview";

export type ModuleIconId =
  | "grid"
  | "calender"
  | "user-circle"
  | "group"
  | "dollar-line"
  | "folder"
  | "list"
  | "table"
  | "page"
  | "pie-chart"
  | "box-cube"
  | "plug-in";

export interface ModuleNavSubItem {
  nameKey: NavLabelKey;
  path: string;
}

export interface ModuleNavItem {
  nameKey: NavLabelKey;
  icon: ModuleIconId;
  path?: string;
  subItems?: ModuleNavSubItem[];
}

export interface AppModule {
  id: ModuleId;
  icon: ModuleIconId;
  enabledByDefault: boolean;
  /** When true, the module cannot be disabled in settings. */
  alwaysEnabled?: boolean;
  navItems: ModuleNavItem[];
  routes: string[];
}

export const MODULE_REGISTRY: readonly AppModule[] = [
  {
    id: "overview",
    icon: "grid",
    enabledByDefault: true,
    alwaysEnabled: true,
    navItems: [
      {
        nameKey: "modules.overview.nav.main",
        icon: "grid",
        path: "/",
      },
    ],
    routes: ["/"],
  },
  {
    id: "employment",
    icon: "group",
    enabledByDefault: false,
    navItems: [
      {
        nameKey: "modules.employment.nav.main",
        icon: "group",
        path: "/employment",
      },
    ],
    routes: ["/employment"],
  },
  {
    id: "finances",
    icon: "dollar-line",
    enabledByDefault: false,
    navItems: [
      {
        nameKey: "modules.finances.nav.main",
        icon: "dollar-line",
        path: "/finances",
      },
    ],
    routes: ["/finances"],
  },
  {
    id: "projects",
    icon: "folder",
    enabledByDefault: false,
    navItems: [
      {
        nameKey: "modules.projects.nav.main",
        icon: "folder",
        path: "/projects",
      },
    ],
    routes: ["/projects"],
  },
  {
    id: "calendar",
    icon: "calender",
    enabledByDefault: true,
    navItems: [
      {
        nameKey: "modules.calendar.nav.main",
        icon: "calender",
        path: "/calendar",
      },
    ],
    routes: ["/calendar"],
  },
  {
    id: "profile",
    icon: "user-circle",
    enabledByDefault: true,
    navItems: [
      {
        nameKey: "modules.profile.nav.main",
        icon: "user-circle",
        path: "/profile",
      },
    ],
    routes: ["/profile"],
  },
] as const;

const MODULE_BY_ID = new Map<ModuleId, AppModule>(
  MODULE_REGISTRY.map((module) => [module.id, module])
);

export function getModuleById(id: ModuleId): AppModule | undefined {
  return MODULE_BY_ID.get(id);
}

export function getDefaultEnabledModules(): ModuleId[] {
  return MODULE_REGISTRY.filter((module) => module.enabledByDefault).map(
    (module) => module.id
  );
}

export function ensureOverviewEnabled(modules: ModuleId[]): ModuleId[] {
  if (modules.includes(OVERVIEW_MODULE_ID)) {
    return modules;
  }
  return [OVERVIEW_MODULE_ID, ...modules];
}

export function isValidModuleId(value: unknown): value is ModuleId {
  return typeof value === "string" && MODULE_BY_ID.has(value as ModuleId);
}

export function sanitizeEnabledModules(modules: ModuleId[]): ModuleId[] {
  const seen = new Set<ModuleId>();
  const valid: ModuleId[] = [];

  for (const id of modules) {
    if (!isValidModuleId(id) || seen.has(id)) {
      continue;
    }
    seen.add(id);
    valid.push(id);
  }

  return ensureOverviewEnabled(valid);
}
