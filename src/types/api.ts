/**
 * Forma de error normalizada que expone la capa de red al resto de la app.
 *
 * El interceptor de respuesta de `apiClient` (`src/api/client.ts`) convierte
 * cualquier error de Axios a esta interfaz, para que la UI y los servicios
 * nunca tengan que parsear la forma de error de Axios directamente.
 */
export interface ApiError {
  /** Código de estado HTTP, o `0` si no hubo respuesta del servidor. */
  status: number;
  /** Mensaje legible, listo para mostrar en la UI. */
  message: string;
  /** Código de error opcional (de la API o de Axios, ej. `ERR_NETWORK`). */
  code?: string;
}

/** Type guard para distinguir un `ApiError` de otros errores. */
export function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "message" in error
  );
}
