# Chronos v1 — Implementation Plan

## Context
Building a biblical timeline explorer from a fresh Next.js 16 + Tailwind 4 project. The design doc is comprehensive. User wants: timeline first, minimal seed data, useState for state, map deferred, deployment deferred. A research step will fill out event content later.

---

## Phase 1: Foundation ✅
**Goal:** Fonts, theming, types, constants, minimal seed data.

- ✅ `app/layout.tsx` — Playfair Display, Source Serif 4, DM Sans, DM Mono via `next/font/google`
- ✅ `app/globals.css` — Sacred Codex palette CSS variables, font-family mappings, global `button { cursor: pointer }`
- ✅ `lib/types.ts` — `BiblicalEvent`, `CrossReference`, `Era`, `Track`, `ConnectionType`
- ✅ `lib/constants.ts` — Colors, era colors, connection type styles, zoom config, track heights
- ✅ `data/eras.ts` — 16 eras (10 biblical + 6 world history)
- ✅ `data/events-ot.ts` — 27 OT events (minimal: title, year, scripture, figures)
- ✅ `data/events-nt.ts` — 23 NT events
- ✅ `data/events-world.ts` — 22 world history events
- ✅ `data/cross-references.ts` — 19 OT↔NT cross-references

---

## Phase 2: Timeline Core ✅
**Goal:** Zoomable, pannable horizontal timeline with era bands and axis.

- ✅ `lib/timeline-math.ts` — `yearToX()`, `xToYear()`, `getVisibleYearRange()`, `getPixelsPerYear()`, `formatYear()`, `getTickInterval()`
- ✅ `components/timeline/Timeline.tsx` — Full-width container with zoom (wheel, cursor-centered) and pan (drag). Renders era bands, axis, tracks.
- ✅ `components/timeline/TimelineAxis.tsx` — Horizontal axis with adaptive tick density (centuries → decades → years)
- ✅ `components/timeline/EraBand.tsx` — Semi-transparent colored rectangles, labels bottom-justified, label as sibling element for full opacity
- ✅ `components/timeline/TrackRow.tsx` — Track lanes with clustering support
- ✅ `app/page.tsx` — App shell with header (track toggles) + timeline + event card

---

## Phase 3: Events ✅
**Goal:** Event dots with hover/select, detail cards, clustering.

- ✅ `components/timeline/EventDot.tsx` — Color-coded dots (14/18/22px), hover glow, labels alternate above/below for readability
- ✅ Event selection state — `selectedEventId` + `hoveredEventId` via useState at page level
- ✅ `components/timeline/EventCard.tsx` — Detail panel with title, date, scripture chip, location, era badge, key figures, description, significance, historical context, cross-reference connections with navigation
- ✅ `lib/clustering.ts` — Groups events within 40px into clusters
- ✅ `components/timeline/ClusterDot.tsx` — Cluster dot with count badge, portal popover (escapes overflow clipping), smart direction (opens below if near top of screen), scroll isolation (wheel events don't propagate to timeline)

---

## Phase 4: Cross-Reference Lines
**Goal:** SVG bezier curves connecting OT↔NT events.

### 4.1 Cross-Reference Lines
- **`components/timeline/CrossRefLine.tsx`** — SVG quadratic bezier path between two event positions. Styled by connection type (color, dash pattern per design doc).

### 4.2 Connection Rendering
- SVG overlay layer in Timeline.tsx. Only render when both source and target events are in viewport. Lines drawn between OT track and NT track.

### 4.3 Connection Toggle & Filter
- `showConnections` boolean + `connectionTypeFilter` state at page level.
- Filter UI in header/controls area.

---

## Phase 5: Controls & Header
**Goal:** Navigation chrome.

### 5.1 Header Bar
- **`components/controls/Header.tsx`** — Logo ("Chronos"), track toggles (OT/NT/World), connection toggle, map toggle (disabled for now).

### 5.2 Track Toggles
- **`components/controls/TrackToggles.tsx`** — Pill buttons to show/hide each track.

### 5.3 Zoom Controls
- **`components/controls/ZoomControls.tsx`** — +/- buttons, rendered fixed bottom-right.

### 5.4 Era Jumper
- **`components/controls/EraJumper.tsx`** — Buttons for each era. Click → smooth scroll + zoom to fit that era.

### 5.5 Connection Filter
- **`components/controls/ConnectionFilter.tsx`** — Filter cross-references by type (prophecy, type-antitype, quotation, thematic, covenant).

---

## Phase 6: Animation & Polish
**Goal:** Framer Motion transitions, welcome overlay.

### 6.1 Animations
- Event dot hover: scale + glow via Framer Motion
- Event card: slide-up/slide-down with AnimatePresence
- Cross-reference lines: animated stroke-dashoffset on reveal
- Era jump: smooth scroll transition

### 6.2 Welcome Overlay
- First-time welcome message with brief intro text and suggested first action. Dismissed on click. Store dismissal in localStorage.

### 6.3 Responsive Basics
- Desktop-first. On mobile: horizontal scroll with touch, event cards as bottom sheet, simplified connection display.

---

## Phase 7: Event Research & Content
**Goal:** Fill out all event data with rich content.

### 7.1 Research Pass
- For each of the ~70 seed events, fill in:
  - `description` (2-4 vivid narrative sentences)
  - `significance` (1-2 sentences, redemptive-historical arc)
  - `historicalContext` (what was happening in the world)
  - `location.lat` / `location.lng` (real coordinates)
  - `figures` (complete list)
- For each cross-reference, fill in `explanation` and both scripture references.

### 7.2 Content Voice
- Follow design doc: narrative, vivid, theologically aware but not preachy, historically grounded, concise.

---

## Files Created So Far

```
lib/types.ts              ✅
lib/constants.ts          ✅
lib/timeline-math.ts      ✅
lib/clustering.ts         ✅ (added beyond original plan)
data/eras.ts              ✅
data/events-ot.ts         ✅
data/events-nt.ts         ✅
data/events-world.ts      ✅
data/cross-references.ts  ✅
components/timeline/Timeline.tsx      ✅
components/timeline/TimelineAxis.tsx   ✅
components/timeline/EraBand.tsx        ✅
components/timeline/TrackRow.tsx       ✅
components/timeline/EventDot.tsx       ✅
components/timeline/EventCard.tsx      ✅
components/timeline/ClusterDot.tsx     ✅ (added beyond original plan)
components/timeline/CrossRefLine.tsx   ⬜
components/controls/Header.tsx         ⬜ (track toggles currently inline in page.tsx)
components/controls/TrackToggles.tsx   ⬜
components/controls/ZoomControls.tsx   ⬜
components/controls/EraJumper.tsx      ⬜
components/controls/ConnectionFilter.tsx ⬜
```

Files modified:
```
app/layout.tsx   ✅
app/globals.css  ✅
app/page.tsx     ✅
CLAUDE.md        ✅
```

## Verification
- ✅ `pnpm build` passes with no errors
- ✅ Timeline renders with era bands, axis, event dots
- ✅ Click event → detail card appears with full info + cross-ref links
- ✅ Scroll wheel → zoom in/out centered on cursor
- ✅ Track toggles hide/show tracks
- ✅ Event clustering handles overlapping events
- ⬜ Cross-reference lines appear between OT/NT events
- ⬜ Era jump scrolls to correct position
