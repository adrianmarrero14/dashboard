import {
  DEV_NAV_ITEMS,
  SETTINGS_PATH,
  shouldShowDevRoutes,
} from "@/config/dev-routes";
import {
  MODULE_REGISTRY,
  type ModuleIconId,
  type ModuleId,
  type ModuleNavItem,
} from "@/config/modules";

export type SidebarNavItem = {
  name: string;
  icon: ModuleIconId;
  path?: string;
  subItems?: { name: string; path: string }[];
};

export const SETTINGS_NAV_ITEM: SidebarNavItem = {
  name: "Configuración",
  icon: "plug-in",
  path: SETTINGS_PATH,
};

function toSidebarNavItem(nav: ModuleNavItem): SidebarNavItem {
  return {
    name: nav.name,
    icon: nav.icon,
    path: nav.path,
    subItems: nav.subItems,
  };
}

export function buildSidebarNav(enabledModules: ModuleId[]): SidebarNavItem[] {
  const items: SidebarNavItem[] = [];

  for (const module of MODULE_REGISTRY) {
    if (!enabledModules.includes(module.id)) {
      continue;
    }
    for (const nav of module.navItems) {
      items.push(toSidebarNavItem(nav));
    }
  }

  return items;
}

export function buildDevSidebarNav(): SidebarNavItem[] {
  return DEV_NAV_ITEMS.map(toSidebarNavItem);
}

export { shouldShowDevRoutes };
