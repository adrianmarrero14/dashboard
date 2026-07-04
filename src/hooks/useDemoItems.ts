"use client";

import { getDemoItems } from "@/services/demo";
import { useApiQuery } from "@/hooks/useApiQuery";

/**
 * Hook de consumo del servicio demo (ADR-12): ejemplo de cómo un módulo expone
 * datos de un servicio a sus componentes vía `useApiQuery`.
 *
 * @param simulateError Solo para el demo: fuerza el 500 del mock para ver el
 * estado de error en la UI.
 */
export function useDemoItems(simulateError = false) {
  return useApiQuery(["demo", { simulateError }], () =>
    getDemoItems({ simulateError })
  );
}
