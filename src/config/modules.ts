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
  name: string;
  path: string;
}

export interface ModuleNavItem {
  name: string;
  icon: ModuleIconId;
  path?: string;
  subItems?: ModuleNavSubItem[];
}

export interface AppModule {
  id: ModuleId;
  label: string;
  description: string;
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
    label: "Inicio",
    description: "Panel de resumen y vista general de tu vida personal.",
    icon: "grid",
    enabledByDefault: true,
    alwaysEnabled: true,
    navItems: [
      {
        name: "Resumen",
        icon: "grid",
        path: "/",
      },
    ],
    routes: ["/"],
  },
  {
    id: "employment",
    label: "Empleo",
    description: "Trabajo, contratos y seguimiento profesional.",
    icon: "group",
    enabledByDefault: false,
    navItems: [
      {
        name: "Empleo",
        icon: "group",
        path: "/employment",
      },
    ],
    routes: ["/employment"],
  },
  {
    id: "finances",
    label: "Finanzas",
    description: "Ingresos, gastos y planificación financiera.",
    icon: "dollar-line",
    enabledByDefault: false,
    navItems: [
      {
        name: "Finanzas",
        icon: "dollar-line",
        path: "/finances",
      },
    ],
    routes: ["/finances"],
  },
  {
    id: "projects",
    label: "Proyectos",
    description: "Proyectos personales y objetivos a largo plazo.",
    icon: "folder",
    enabledByDefault: false,
    navItems: [
      {
        name: "Proyectos",
        icon: "folder",
        path: "/projects",
      },
    ],
    routes: ["/projects"],
  },
  {
    id: "calendar",
    label: "Calendario",
    description: "Eventos y planificación temporal.",
    icon: "calender",
    enabledByDefault: true,
    navItems: [
      {
        name: "Calendario",
        icon: "calender",
        path: "/calendar",
      },
    ],
    routes: ["/calendar"],
  },
  {
    id: "profile",
    label: "Perfil",
    description: "Datos personales y preferencias de cuenta.",
    icon: "user-circle",
    enabledByDefault: true,
    navItems: [
      {
        name: "Perfil",
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
