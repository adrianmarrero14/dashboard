"use client";

import { useModules } from "@/context/ModulesContext";
import { getModuleIdForPath, isModuleGuardExempt } from "@/lib/module-routes";
import { usePathname, useRouter } from "next/navigation";
import type React from "react";
import { useEffect } from "react";

export default function ModuleRouteGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { isModuleEnabled, isLoading } = useModules();

  useEffect(() => {
    if (isLoading || isModuleGuardExempt(pathname)) {
      return;
    }

    const moduleId = getModuleIdForPath(pathname);
    if (!moduleId) {
      return;
    }

    if (!isModuleEnabled(moduleId)) {
      router.replace("/");
    }
  }, [pathname, isLoading, isModuleEnabled, router]);

  return <>{children}</>;
}
