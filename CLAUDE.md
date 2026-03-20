@AGENTS.md

- Always use frontend-designer skill when creating or editing UI
- Use framer motion for animations

# Chronos — Biblical Timeline Explorer

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + pnpm
- Framer Motion for animation
- Custom SVG for timeline rendering and map
- Static data (TS files, no database in v1)

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm lint` — eslint

## Architecture

- `app/` — Next.js App Router pages and layouts
- `components/timeline/` — Timeline, axis, era bands, event dots, event cards, cross-ref lines, track rows
- `components/controls/` — Header, track toggles, zoom controls, era jumper, connection filter
- `data/` — Static event, era, and cross-reference datasets (TS files)
- `lib/` — Pure utilities: `types.ts`, `constants.ts`, `timeline-math.ts`

## Key Patterns

- State: useState at page level, passed as props. No context, no Zustand.
- Year-to-pixel mapping: negative years = BC, positive = AD. Exponential zoom scaling (0–1 range).
- Four tracks: OT, NT, Church Fathers (continues after NT on same row), World History (bottom).
- Three-tier year scaling: BC at 1x, NT AD (0-100) at 4x, Church (100+) at 1.5x.
- Cross-reference lines: SVG bezier curves connecting events across tracks, styled by connection type.
- Era bands: colored semi-transparent rectangles behind event tracks.
- Events only render when within visible viewport (culling).
- `YEAR_ORIGIN = -3000`, `YEAR_END = 1500`

## Visual Design ("Sacred Codex")

- Warm parchment palette: bg `#F7F2E8`, surface `#EDE7D9`, text `#2C2416`
- CSS vars: `--color-bg`, `--color-surface`, `--color-text`, `--color-text-secondary`, `--color-border`
- Font vars: `--font-heading` (Playfair), `--font-body` (Source Serif), `--font-ui` (DM Sans), `--font-mono` (DM Mono)
- No dark mode in v1. No emoji.

## Data Model (lib/types.ts)

- `BiblicalEvent` — id, track, era, year, endYear?, approximate, title, scripture, description, significance, figures, location, tags
- `CrossReference` — id, sourceEventId, targetEventId, type, label, otReference, ntReference, explanation
- `Era` — id, track, label, start, end, color, summary
- `Track = 'ot' | 'nt' | 'church' | 'world'`
- `ConnectionType = 'prophecy-fulfillment' | 'type-antitype' | 'quotation' | 'thematic' | 'covenant' | 'doctrinal-development' | 'historical-echo'`

## Seed Data

- 27 OT events, 23 NT events, 25 Church Fathers events, 45 world events
- 16 biblical eras, 4 church eras, 7 world eras
- 38 cross-references (19 OT↔NT, 19 NT↔Church)

## v1 Scope

Core interactive timeline with four tracks, era bands, event dots/cards, cross-reference lines, track toggles, era jump nav. Map deferred. No search, no API integrations, no auth.
