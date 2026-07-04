/**
 * Tipo del ejemplo end-to-end de la capa de red (ADR-12).
 *
 * Es solo demostrativo: valida el patrón route handler → servicio → hook → UI.
 * Cuando exista `dashboard-api`, cada módulo definirá sus propios tipos de
 * dominio siguiendo esta misma convención (tipos en `src/types/`).
 */
export interface DemoItem {
  id: number;
  title: string;
  subtitle: string;
}
