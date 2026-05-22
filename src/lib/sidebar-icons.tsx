"use client";

import type { ModuleIconId } from "@/config/modules";
import {
  BoxCubeIcon,
  CalenderIcon,
  DollarLineIcon,
  FolderIcon,
  GridIcon,
  GroupIcon,
  ListIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  UserCircleIcon,
} from "@/icons/index";
import type React from "react";

const ICONS: Record<ModuleIconId, React.ReactNode> = {
  grid: <GridIcon />,
  calender: <CalenderIcon />,
  "user-circle": <UserCircleIcon />,
  group: <GroupIcon />,
  "dollar-line": <DollarLineIcon />,
  folder: <FolderIcon />,
  list: <ListIcon />,
  table: <TableIcon />,
  page: <PageIcon />,
  "pie-chart": <PieChartIcon />,
  "box-cube": <BoxCubeIcon />,
  "plug-in": <PlugInIcon />,
};

export function renderSidebarIcon(icon: ModuleIconId): React.ReactNode {
  return ICONS[icon];
}
