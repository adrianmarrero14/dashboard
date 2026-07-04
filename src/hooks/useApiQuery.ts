"use client";

import {
  useQuery,
  type QueryKey,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import type { ApiError } from "@/types/api";

/**
 * Hook genérico de lectura sobre TanStack Query, tipado con `ApiError`.
 *
 * Es la forma estándar de consumir un servicio de `src/services/` desde un
 * componente: devuelve `{ data, isLoading, error, ... }` con el error ya
 * normalizado por el interceptor de `apiClient`. Los módulos no deben llamar a
 * `useQuery` con el tipo de error suelto — usan este wrapper para no repetir la
 * parametrización de `ApiError`.
 *
 * @param queryKey Clave de cache de React Query.
 * @param queryFn  Función del servicio que hace la request (ej. `getEvents`).
 * @param options  Opciones extra de `useQuery` (menos `queryKey`/`queryFn`).
 */
export function useApiQuery<TData>(
  queryKey: QueryKey,
  queryFn: () => Promise<TData>,
  options?: Omit<
    UseQueryOptions<TData, ApiError, TData, QueryKey>,
    "queryKey" | "queryFn"
  >
): UseQueryResult<TData, ApiError> {
  return useQuery<TData, ApiError, TData, QueryKey>({
    queryKey,
    queryFn,
    ...options,
  });
}
