# Axiom Pulse — Token Discovery Table

Pixel-perfect dark UI inspired by **Axiom Trade Pulse** with real-time mock price updates, sortable columns, and rich interaction patterns (tooltips, popovers, modals). Built on Next.js 14 App Router, TypeScript (strict), Tailwind CSS, Redux Toolkit, and React Query.

## Quickstart
```bash
npm install
npm run dev
# lint (uses Next lint)
npm run lint
```

## Features
- Desktop-first layout with responsive horizontal scroll for 320px+.
- Tabs for Trending / Surge / DEX Screener / Pump Live plus tier filters (New Pairs, Final Stretch, Migrated).
- Real-time websocket-style updates with smooth flash animations on price deltas.
- Sorting on key columns, tooltips on controls, popover filter, and modal-based quick buy.
- Loading shimmer skeletons, progressive row reveal, and an app-level error boundary.
- Atomic-ish structure with reusable UI primitives (`Button`, `Badge`, `Skeleton`, `IconButton`, `Popover`, `Dialog`, `Tooltip`) and hooks (`useTokenFeed`, `usePriceFlash`, `useProgressiveReveal`).

## Project Structure
- `src/app/` - App Router entry, layout, providers, and route-level loading/error boundaries.
- `src/components/` - Layout chrome (TopNav, MarketTabs, FilterBar), table and chart components, UI primitives.
- `src/store/` - Redux Toolkit slice for UI state (tabs, sorting, filters, density, playlists).
- `src/data/mockTokens.ts` - Seed data for all table columns.
- `src/hooks/` - Real-time feed simulation, optimistic price flash, progressive loading.
- `src/lib/` - API mocks, number formatting, utilities.



## Known Items
- `npm audit` reports 4 transitive vulnerabilities from dev tooling (eslint ecosystem); no runtime impact. Lockfile is left untouched. Remove or update dev tooling if you need a zero warning install.
