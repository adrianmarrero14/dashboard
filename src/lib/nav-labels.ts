import type { ModuleId } from "@/config/modules";

/** Translation key under the `nav` namespace (e.g. `dev.forms`). */
export type NavLabelKey = string;

export function moduleLabelKey(id: ModuleId): `modules.${ModuleId}.label` {
  return `modules.${id}.label`;
}

export function moduleDescriptionKey(
  id: ModuleId
): `modules.${ModuleId}.description` {
  return `modules.${id}.description`;
}

export function moduleNavKey(id: ModuleId): `modules.${ModuleId}.nav.main` {
  return `modules.${id}.nav.main`;
}
