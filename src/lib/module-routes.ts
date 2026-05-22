import { DEV_ROUTE_PATHS, SETTINGS_PATH } from "@/config/dev-routes";
import { MODULE_REGISTRY, type ModuleId } from "@/config/modules";

export function isDevRoute(pathname: string): boolean {
  return DEV_ROUTE_PATHS.includes(pathname);
}

export function isModuleGuardExempt(pathname: string): boolean {
  return pathname === SETTINGS_PATH || isDevRoute(pathname);
}

export function getModuleIdForPath(pathname: string): ModuleId | null {
  if (isModuleGuardExempt(pathname)) {
    return null;
  }

  let matched: { id: ModuleId; route: string } | null = null;

  for (const module of MODULE_REGISTRY) {
    for (const route of module.routes) {
      const matches =
        route === "/"
          ? pathname === "/"
          : pathname === route || pathname.startsWith(`${route}/`);

      if (!matches) {
        continue;
      }

      if (!matched || route.length > matched.route.length) {
        matched = { id: module.id, route };
      }
    }
  }

  return matched?.id ?? null;
}
