import { apiClient } from "@/api/client";
import type { DemoItem } from "@/types/demo";

/**
 * Servicio de ejemplo de la capa de red (ADR-12).
 *
 * Muestra la convención para servicios que consumen `dashboard-api`: funciones
 * tipadas que usan `apiClient` y nunca exponen Axios a los componentes. Los
 * módulos reales (Pointlife, Finanzas, ...) seguirán este mismo patrón.
 */

/**
 * @param options.simulateError Solo para el demo: pide al mock que devuelva un
 * 500, para poder ver el manejo de error en la UI. Un servicio real no tendría
 * este parámetro.
 */
export async function getDemoItems(options?: {
  simulateError?: boolean;
}): Promise<DemoItem[]> {
  const { data } = await apiClient.get<DemoItem[]>("/demo", {
    params: options?.simulateError ? { fail: 1 } : undefined,
  });
  return data;
}
