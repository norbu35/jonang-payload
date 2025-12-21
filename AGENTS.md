# Repository Guidelines

## Project Structure & Module Organization
- `src/app` hosts the Next.js App Router pages, API routes, and Payload admin UI.
- `src/collections` and `src/globals` contain Payload CMS collection/global configs.
- `src/components`, `src/hooks`, and `src/templates` hold UI building blocks and shared logic.
- `src/payload.config.ts` is the main Payload config; `src/payload-types.ts` is generated.
- `compose.yaml` and `Dockerfile` describe containerized deploys.

## Build, Test, and Development Commands
- `pnpm install --frozen-lockfile` installs dependencies using the lockfile (avoid updating multiple lockfiles).
- `pnpm dev` starts the Next.js + Payload dev server.
- `pnpm devsafe` clears `.next/` before starting dev.
- `pnpm build` builds the production Next.js app.
- `pnpm start` runs the production server.
- `pnpm lint` runs Next.js ESLint checks.
- `pnpm generate:types` regenerates `src/payload-types.ts`.
- `pnpm generate:importmap` refreshes the admin import map.

## Coding Style & Naming Conventions
- TypeScript with `strict` mode; module aliases include `@/*` and `@payload-config`.
- Prettier: single quotes, no semicolons, 100 char lines, trailing commas.
- ESLint extends `next/core-web-vitals` and `next/typescript`; prefix unused vars with `_`.
- File naming mirrors the repo: `PascalCase` for components/configs (e.g. `src/globals/SiteTitle.tsx`), `camelCase` for utilities/hooks (e.g. `src/hooks/buildSite.tsx`).

## Testing Guidelines
- No automated test runner is configured yet. Use `pnpm lint` and manual verification (admin UI, API routes, and page rendering).
- If you add tests, keep them near the module (e.g. `src/components/Foo.test.tsx`) and document the runner in this file.

## Commit & Pull Request Guidelines
- Commit history favors short, imperative messages like `fix seo config` or `add github workflow`.
- PRs should include a concise summary, testing notes, and link relevant issues.
- Add screenshots or short clips for UI/admin changes.

## Configuration & Deployment Notes
- Create a `.env` file using variables referenced in `compose.yaml` (e.g. `PAYLOAD_SECRET`, `DATABASE_URI`, `PAYLOAD_PUBLIC_SERVER_URL`).
- GitHub Actions deploys on pushes to `main` by building/pushing the Docker image and restarting the VPS.
