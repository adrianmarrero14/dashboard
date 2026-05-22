import type { ModuleIconId, ModuleNavItem } from "@/config/modules";
import type { NavLabelKey } from "@/lib/nav-labels";

export const DEV_NAV_ITEMS: readonly ModuleNavItem[] = [
  {
    nameKey: "nav.dev.forms",
    icon: "list",
    subItems: [{ nameKey: "nav.dev.formElements", path: "/form-elements" }],
  },
  {
    nameKey: "nav.dev.tables",
    icon: "table",
    subItems: [{ nameKey: "nav.dev.basicTables", path: "/basic-tables" }],
  },
  {
    nameKey: "nav.dev.pages",
    icon: "page",
    subItems: [
      { nameKey: "nav.dev.blankPage", path: "/blank" },
      { nameKey: "nav.dev.error404", path: "/error-404" },
    ],
  },
  {
    nameKey: "nav.dev.charts",
    icon: "pie-chart",
    subItems: [
      { nameKey: "nav.dev.lineChart", path: "/line-chart" },
      { nameKey: "nav.dev.barChart", path: "/bar-chart" },
    ],
  },
  {
    nameKey: "nav.dev.uiElements",
    icon: "box-cube",
    subItems: [
      { nameKey: "nav.dev.alerts", path: "/alerts" },
      { nameKey: "nav.dev.avatar", path: "/avatars" },
      { nameKey: "nav.dev.badge", path: "/badge" },
      { nameKey: "nav.dev.buttons", path: "/buttons" },
      { nameKey: "nav.dev.images", path: "/images" },
      { nameKey: "nav.dev.videos", path: "/videos" },
    ],
  },
  {
    nameKey: "nav.dev.authentication",
    icon: "plug-in",
    subItems: [
      { nameKey: "nav.dev.signIn", path: "/signin" },
      { nameKey: "nav.dev.signUp", path: "/signup" },
    ],
  },
] as const;

export const DEV_ROUTE_PATHS: readonly string[] = DEV_NAV_ITEMS.flatMap((item) =>
  item.subItems ? item.subItems.map((sub) => sub.path) : item.path ? [item.path] : []
);

export const SETTINGS_PATH = "/settings";

export const SETTINGS_NAV_ITEM = {
  nameKey: "nav.settings" as NavLabelKey,
  icon: "plug-in" as ModuleIconId,
  path: SETTINGS_PATH,
};

export function shouldShowDevRoutes(): boolean {
  return (
    process.env.NODE_ENV === "development" ||
    process.env.NEXT_PUBLIC_SHOW_DEV_ROUTES === "true"
  );
}
