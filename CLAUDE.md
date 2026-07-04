# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es este proyecto

Dashboard es un backoffice centralizado para gestionar la vida personal como si
fuera una empresa, organizado en módulos independientes (Empleo, Finanzas, y
otros que vendrán). Nace repropuesto sobre la plantilla TailAdmin (MIT); el
código base de Next.js/React/Tailwind se reutiliza y se irá adaptando
incrementalmente a cada dominio.

Waypoint es un producto aparte, con su propio ecosistema:

- `waypoint-ios` — app nativa en SwiftUI donde se capturan la mayoría de las entradas
- `waypoint-api` — backend en FastAPI que sirve los datos
- Dentro de **este** repo, Waypoint aparecerá como un módulo más del sidebar,
  llamado **Pointlife**, que consumirá `waypoint-api` para mostrar la bitácora
  de eventos (timeline, comparativas "en esta fecha", estadísticas de impacto/
  valencia). No es el propósito del proyecto completo — es un módulo entre
  varios.

El registro de módulos (`src/config/modules.ts`) hoy tiene `employment`,
`finances`, `projects`, `calendar`, `profile` — módulos genéricos heredados de
la plantilla. El módulo Pointlife **todavía no existe** en el código; es
trabajo futuro. Cuando se agregue, debe quedar scopeado bajo su propio módulo
(carpeta, rutas, cliente HTTP hacia `waypoint-api`) sin asumir que
`waypoint-api` es la única API del proyecto — Dashboard va a tener módulos
futuros con sus propias fuentes de datos.

## Qué hace este dashboard actualmente

Por ahora el repo es el esqueleto heredado de la plantilla (módulos genéricos,
calendario, perfil, settings), sin conexión a `waypoint-api` ni modelos de
datos de bitácora.

## Comandos

```bash
npm install              # instalar dependencias (usar --legacy-peer-deps si hay conflictos de peers)
npm run dev              # servidor de desarrollo (Next.js, http://localhost:3000)
npm run build            # build de producción
npm run start            # servir el build de producción
npm run lint             # ESLint (eslint-config-next + reglas propias)
```

No hay suite de tests configurada todavía (no hay Jest/Vitest ni script `test`).

Para ver las páginas demo heredadas de la plantilla TailAdmin (UI kit, charts,
tablas, forms de ejemplo) en local:

```bash
NEXT_PUBLIC_SHOW_DEV_ROUTES=true npm run dev
```

También aparecen automáticamente cuando `NODE_ENV=development` (ver
`shouldShowDevRoutes()` en `src/config/dev-routes.ts`).

## Arquitectura

### Stack

- Next.js 16 (App Router) + React 19, TypeScript en modo `strict`
- Tailwind CSS v4 (orden de clases vía `prettier-plugin-tailwindcss`)
- `next-intl` para i18n (inglés/español)
- Alias de import `@/*` → `src/*`

### Sistema de módulos (el mecanismo central del layout)

Toda la navegación y el control de acceso a rutas gira alrededor de
`src/config/modules.ts`, que define `MODULE_REGISTRY`: un array de módulos
(`id`, ícono, si está habilitado por defecto, si es `alwaysEnabled`, sus
`navItems` y las rutas que cubre).

- `ModulesContext` (`src/context/ModulesContext.tsx`) mantiene qué módulos
  están habilitados, persistiendo a través de `preferencesService`
  (`src/services/preferences.ts`). Hoy ese servicio es **solo localStorage**
  (`LocalPreferencesService`) — hay un TODO explícito para reemplazarlo por un
  backend de preferencias propio del Dashboard cuando exista.
- `src/lib/sidebar-nav.ts` arma el árbol de navegación del sidebar a partir de
  los módulos habilitados, más los ítems de desarrollo (`dev-routes.ts`) y el
  ítem fijo de Settings.
- `src/lib/module-routes.ts` + `ModuleRouteGuard`
  (`src/components/modules/ModuleRouteGuard.tsx`) hacen de guard: si una ruta
  pertenece a un módulo deshabilitado, no se renderiza. `/settings` y las rutas
  de desarrollo están exentas (`isModuleGuardExempt`).

Al agregar un módulo nuevo (p. ej. Pointlife/Waypoint), el patrón es: agregar
el módulo a `MODULE_REGISTRY`, sus rutas bajo `src/app/(admin)/(modules)/`, y
las claves de traducción correspondientes.

### Route groups de `src/app/`

- `(admin)` — shell del dashboard (`AppSidebar` + `AppHeader` +
  `ModuleRouteGuard`), usado por los módulos reales y por las páginas demo
  bajo `(others-pages)` y `(ui-elements)`.
- `(full-width-pages)` — layout sin sidebar/header, para páginas que no deben
  llevar el shell: `(auth)/signin`, `(auth)/signup` (demo, sin backend real
  todavía) y `(error-pages)/error-404`.

### Rutas de la plantilla (dev-only)

Bajo `src/app/(admin)/(others-pages)/`, `src/app/(admin)/(ui-elements)/` y
`src/app/(full-width-pages)/(auth)/` siguen viviendo las páginas demo de
TailAdmin (charts, tablas, form elements, alerts, badges, sign-in/sign-up,
etc.). Están ocultas del sidebar en producción (`shouldShowDevRoutes()`) y
sirven como referencia de componentes de UI reutilizables, no como
funcionalidad del producto.

### i18n

- Locales soportados: `en` (default) y `es`, definidos en `src/i18n/config.ts`.
- `src/middleware.ts` negocia el locale en la primera visita: si no hay cookie
  `NEXT_LOCALE`, la deriva del header `Accept-Language` (o cae a `en`) y la
  setea. `src/i18n/request.ts` lee esa cookie en el servidor para cargar
  `messages/{locale}.json`. `LocaleSync`
  (`src/components/settings/LocaleSync.tsx`) sincroniza el estado del cliente
  (localStorage, vía `src/services/locale.ts`) con la cookie cuando el usuario
  cambia el idioma manualmente.
- Mensajes en `messages/en.json` y `messages/es.json`. Las claves de nombres de
  nav están tipadas vía `NavLabelKey` (`src/lib/nav-labels.ts`) para que los
  `navItems` de cada módulo referencien claves válidas.

### Providers

`src/app/layout.tsx` anida los providers en este orden:
`NextIntlClientProvider` → `QueryProvider` → `ThemeProvider` →
`ModulesProvider` → `SidebarProvider`. `src/app/(admin)/layout.tsx` es el
shell del dashboard (sidebar + header + `ModuleRouteGuard` envolviendo el
contenido).

`QueryProvider` (`src/context/QueryProvider.tsx`) monta un `QueryClient` de
TanStack Query — es infraestructura ya lista para cuando un módulo empiece a
consumir una API real (p. ej. Pointlife contra `waypoint-api`), pero hoy
ningún componente usa `useQuery`/`useMutation` todavía.

## Convenciones de código

- Componentes funcionales, sin clases.
- TypeScript estricto; usar los tipos ya definidos en `src/config/modules.ts`
  y `src/lib/nav-labels.ts` en vez de strings sueltos para íconos/rutas/claves
  de traducción.
- Commits en español, formato: `tipo: descripción corta` (ej. `feat: agregar
  filtro por categoría en timeline`).

## Flujo de trabajo

Este proyecto sigue un flujo IA-native con Linear + GitHub:

1. El trabajo se planea en Linear (equipo `ADR`, proyecto "Dashboard"), nunca
   en GitHub Issues.
2. Cada tarea en Linear ya trae su nombre de rama sugerido (ej. `feature/adr-N`).
   Usa ese nombre exacto al crear la rama — el ID `adr-N` es lo que conecta la
   rama/PR con el issue en Linear.
3. Al abrir el PR, incluye el ID del issue en el título si no quedó en la rama.
4. No cierres issues manualmente en Linear: el merge del PR los mueve a "Done"
   automáticamente.

## Notas para Claude Code

- Este es un proyecto personal de un solo desarrollador, no hace falta proponer
  procesos de equipo (code owners, revisiones múltiples, etc.).
- Prioriza claridad y simplicidad sobre abstracciones prematuras — es una app
  chica que va a crecer de forma incremental.
- Si una decisión de arquitectura no está tomada (ej. gestor de estado más allá
  de Context API, librería de gráficos para las estadísticas de cada módulo),
  pregunta antes de asumir una.
