# Dashboard

Personal life administration dashboard — manage your life like a company. Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

## Vision

Dashboard is a modular control panel for day-to-day personal management: employment, finances, projects, calendar, profile, and more. Each area can be enabled or disabled from settings so the sidebar stays focused on what you actually use.

Site copy and metadata are centralized in `src/config/site.ts`.

## Modules

| Module    | Route        | Purpose (initial)        |
| --------- | ------------ | ------------------------ |
| Overview  | `/`          | Home / summary dashboard |
| Employment| `/employment`| Work and career (WIP)    |
| Finances  | `/finances`  | Money management (WIP) |
| Projects  | `/projects`  | Personal projects (WIP)  |
| Calendar  | `/calendar`  | Scheduling               |
| Profile   | `/profile`   | User profile             |

Module toggles and navigation are designed to sync with a backend later; the first phase uses local preferences (see plan in repo docs).

## Tech stack

- Next.js 16.x (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Prerequisites

- Node.js 18.x or later (20.x+ recommended)

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Run production server    |
| `npm run lint` | Run ESLint               |

### Development UI routes

Template demo pages (UI kit, charts, sample forms) remain in the codebase but are hidden from the sidebar in production. To show them locally:

```bash
NEXT_PUBLIC_SHOW_DEV_ROUTES=true npm run dev
```

Or they appear automatically when `NODE_ENV=development`.

## Environment variables

Next.js auto-loads `.env` files per environment:

| File               | Environment        | Committed          | Purpose                              |
| ------------------ | ------------------ | ------------------ | ------------------------------------ |
| `.env.example`     | —                  | Yes                | Documents the available variables.   |
| `.env.development` | `npm run dev`      | Yes                | Development defaults.                 |
| `.env.production`  | `build` / `start`  | Not included       | Production defaults (create if needed). |
| `.env.local`       | all                | No (git-ignored)   | Local machine overrides.             |

| Variable                      | Required   | Description                                                                                             |
| ----------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_API_URL`         | Yes (prod) | Base URL of the `dashboard-api` BFF; all HTTP requests go through it (ADR-12). Dev: `/api`. Prod: real URL. |
| `NEXT_PUBLIC_SHOW_DEV_ROUTES` | No         | `true` to show the template demo pages in the sidebar outside `development`.                            |

In **development**, `NEXT_PUBLIC_API_URL=/api` (from `.env.development`) points to
the same origin, where the mock route handler in `src/app/api/` stands in for
`dashboard-api` until the real backend exists. In **production**, set
`NEXT_PUBLIC_API_URL` to the real BFF URL.

## Network layer (ADR-12)

All HTTP communication goes through a centralized layer; no component imports
Axios directly:

- `src/api/client.ts` — single Axios instance with request (auth, currently a
  placeholder — see ADR-14) and response (normalizes errors to
  `ApiError = { status, message, code }`) interceptors.
- `src/services/*` — typed functions that consume `apiClient` and expose data to
  components (never the Axios object itself).
- `src/hooks/useApiQuery.ts` — generic wrapper over TanStack Query, typed with
  `ApiError`, returning `{ data, isLoading, error, ... }`.
- `src/types/api.ts` — base network-layer types.

A working end-to-end example lives at the dev-only `/api-demo` route
(`src/app/api/demo` route handler → `src/services/demo.ts` → `useDemoItems` → UI
with loading/error/data states).

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

   Use `npm install --legacy-peer-deps` if you hit peer dependency conflicts.

2. Run the dev server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Project layout (high level)

```
src/
  app/           # Next.js routes (admin, auth, modules)
  config/        # site.ts, modules, dev-routes
  components/    # UI and feature components
  context/       # React providers (e.g. modules, theme)
  layout/        # Sidebar, header, shell
  lib/           # metadata helpers and utilities
  services/      # preferences and API stubs
```

## Configuration

- **Branding:** `src/config/site.ts` — name, description, tagline, copyright.
- **Page titles:** `src/lib/metadata.ts` — `pageMetadata("Page name")` for each route.

## License and attribution

This project is derived from the [TailAdmin](https://github.com/TailAdmin/free-nextjs-admin-dashboard) Next.js free admin template (MIT License, Copyright (c) 2023 TailAdmin).

Dashboard-specific changes are documented in [NOTICE](./NOTICE). The full MIT license text is in [LICENSE](./LICENSE).
