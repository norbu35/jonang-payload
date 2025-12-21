# Code Style and Conventions

## Naming Conventions
- Collection slugs follow kebab-case convention (e.g., 'users', 'news')
- Component files use PascalCase (e.g., `ComponentName.tsx`)
- Utility functions use camelCase
- Environment variables use SCREAMING_SNAKE_CASE

## TypeScript Configuration
- Strict mode enabled
- ES2022 target
- Module resolution via bundler
- Path aliases:
  - `@/*` maps to `./src/*`
  - `@payload-config` maps to `./src/payload.config.ts`

## Code Style
- Prettier configuration:
  - Single quotes
  - Trailing commas on all
  - Print width of 100
  - No semicolons
- ESLint configuration:
  - Extends Next.js core web vitals and TypeScript
  - Custom rules for handling unused variables (with `_` prefix to ignore)
  - Warnings for ts-comments and any type usage

## Data Modeling
Each collection follows Payload's CollectionConfig interface with:
- Unique slug for identification
- Access controls defined
- Rich field definitions with validation
- Admin configuration for UI presentation

## File Structure
- `/src/app` - Next.js app router pages and layouts
- `/src/collections` - Payload collection configurations
- `/src/globals` - Global content configurations
- `/src/components` - React components
- `/src/access` - Access control functions
- `/src/hooks` - Custom React hooks
- `/src/templates` - Page templates
- `payload.config.ts` - Main Payload configuration
- `next.config.mjs` - Next.js configuration with Payload integration