# Adrián Project

Personal life administration dashboard — manage your life like a company. Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

## Vision

Adrián Project is a modular control panel for day-to-day personal management: employment, finances, projects, calendar, profile, and more. Each area can be enabled or disabled from settings so the sidebar stays focused on what you actually use.

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

Adrián Project-specific changes are documented in [NOTICE](./NOTICE). The full MIT license text is in [LICENSE](./LICENSE).
