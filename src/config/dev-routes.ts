import type { ModuleIconId, ModuleNavItem } from "@/config/modules";

export const DEV_NAV_ITEMS: readonly ModuleNavItem[] = [
  {
    name: "Forms",
    icon: "list",
    subItems: [{ name: "Form Elements", path: "/form-elements" }],
  },
  {
    name: "Tables",
    icon: "table",
    subItems: [{ name: "Basic Tables", path: "/basic-tables" }],
  },
  {
    name: "Pages",
    icon: "page",
    subItems: [
      { name: "Blank Page", path: "/blank" },
      { name: "404 Error", path: "/error-404" },
    ],
  },
  {
    name: "Charts",
    icon: "pie-chart",
    subItems: [
      { name: "Line Chart", path: "/line-chart" },
      { name: "Bar Chart", path: "/bar-chart" },
    ],
  },
  {
    name: "UI Elements",
    icon: "box-cube",
    subItems: [
      { name: "Alerts", path: "/alerts" },
      { name: "Avatar", path: "/avatars" },
      { name: "Badge", path: "/badge" },
      { name: "Buttons", path: "/buttons" },
      { name: "Images", path: "/images" },
      { name: "Videos", path: "/videos" },
    ],
  },
  {
    name: "Authentication",
    icon: "plug-in",
    subItems: [
      { name: "Sign In", path: "/signin" },
      { name: "Sign Up", path: "/signup" },
    ],
  },
] as const;

export const DEV_ROUTE_PATHS: readonly string[] = DEV_NAV_ITEMS.flatMap((item) =>
  item.subItems ? item.subItems.map((sub) => sub.path) : item.path ? [item.path] : []
);

export const SETTINGS_PATH = "/settings";

export function shouldShowDevRoutes(): boolean {
  return (
    process.env.NODE_ENV === "development" ||
    process.env.NEXT_PUBLIC_SHOW_DEV_ROUTES === "true"
  );
}
