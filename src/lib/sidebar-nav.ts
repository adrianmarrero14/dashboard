import {
  DEV_NAV_ITEMS,
  SETTINGS_NAV_ITEM,
  shouldShowDevRoutes,
} from "@/config/dev-routes";
import {
  MODULE_REGISTRY,
  type ModuleIconId,
  type ModuleId,
  type ModuleNavItem,
} from "@/config/modules";
import type { NavLabelKey } from "@/lib/nav-labels";

export type SidebarNavItem = {
  nameKey: NavLabelKey;
  icon: ModuleIconId;
  path?: string;
  subItems?: { nameKey: NavLabelKey; path: string }[];
};

function toSidebarNavItem(nav: ModuleNavItem): SidebarNavItem {
  return {
    nameKey: nav.nameKey,
    icon: nav.icon,
    path: nav.path,
    subItems: nav.subItems,
  };
}

export function buildSidebarNav(enabledModules: ModuleId[]): SidebarNavItem[] {
  const items: SidebarNavItem[] = [];

  for (const moduleDef of MODULE_REGISTRY) {
    if (!enabledModules.includes(moduleDef.id)) {
      continue;
    }
    for (const nav of moduleDef.navItems) {
      items.push(toSidebarNavItem(nav));
    }
  }

  return items;
}

export function buildDevSidebarNav(): SidebarNavItem[] {
  return DEV_NAV_ITEMS.map(toSidebarNavItem);
}

export { SETTINGS_NAV_ITEM, shouldShowDevRoutes };
