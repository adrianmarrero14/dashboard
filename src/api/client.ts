import axios, { AxiosError, type AxiosInstance } from "axios";
import type { ApiError } from "@/types/api";

/**
 * Instancia de Axios centralizada del Dashboard.
 *
 * Regla de arquitectura (ADR-12): ningún módulo llama a un servicio externo
 * directo — todo pasa por el BFF `dashboard-api`. Esta instancia es la única
 * puerta de salida HTTP; los servicios de `src/services/` la consumen y los
 * componentes nunca importan Axios directamente.
 *
 * `baseURL` se lee de `NEXT_PUBLIC_API_URL`. En desarrollo cae a `/api`
 * (mismo origen), donde el route handler mock `src/app/api/demo/` actúa de
 * stand-in de `dashboard-api` hasta que el backend real exista.
 */
const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "/api";

/**
 * Devuelve el token de sesión a adjuntar en el header `Authorization`.
 *
 * TODO(ADR-14): leer el token de sesión real. Mientras la autenticación no
 * exista, devuelve `null` y el interceptor no agrega el header.
 */
function getAuthToken(): string | null {
  return null;
}

/** Payload de error que puede devolver `dashboard-api` (o el mock). */
type ApiErrorPayload = {
  message?: string;
  code?: string;
};

/**
 * Normaliza cualquier error a la forma `ApiError` (`{ status, message, code }`)
 * para que la UI no tenga que parsear la forma de error de Axios.
 */
export function normalizeError(error: unknown): ApiError {
  if (axios.isCancel(error)) {
    return { status: 0, message: "Request cancelled", code: "ERR_CANCELED" };
  }

  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiErrorPayload>;

    // El servidor respondió con un status de error.
    if (axiosError.response) {
      const data = axiosError.response.data;
      return {
        status: axiosError.response.status,
        message: data?.message ?? axiosError.message,
        code: data?.code ?? axiosError.code,
      };
    }

    // El request salió pero no hubo respuesta (error de red / timeout).
    if (axiosError.request) {
      return {
        status: 0,
        message: "Network error — no response from server",
        code: axiosError.code ?? "ERR_NETWORK",
      };
    }

    // Error al configurar el request.
    return { status: 0, message: axiosError.message, code: axiosError.code };
  }

  if (error instanceof Error) {
    return { status: 0, message: error.message };
  }

  return { status: 0, message: "Unknown error" };
}

export const apiClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de request: adjunta el token de sesión (cuando exista).
apiClient.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor de response: normaliza los errores a `ApiError`.
apiClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => Promise.reject(normalizeError(error))
);
