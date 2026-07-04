"use client";

import { useNavLabel } from "@/hooks/useNavLabel";
import type { NavLabelKey } from "@/lib/nav-labels";

export default function NavLabel({ nameKey }: { nameKey: NavLabelKey }) {
  return <>{useNavLabel(nameKey)}</>;
}
