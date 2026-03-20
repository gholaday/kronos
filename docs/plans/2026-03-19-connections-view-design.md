# Connections View — Design Plan

## Overview

A new "Connections" view that replaces the current bezier curve cross-reference lines with a parallel-column layout. OT/World events on the left, NT/Church events on the right, with flowing gradient ribbons between connected events in a center channel. The view lives alongside the main timeline as a toggleable mode.

## Layout Structure

### Two-Column + Center Channel

- **Left column (~30% width):** OT and World History events, ordered chronologically top-to-bottom
- **Right column (~30% width):** NT and Church History events, ordered chronologically top-to-bottom
- **Center channel (~40% width):** gradient ribbons flow between connected events

### Event Nodes

- Each event renders as a compact node: small era-colored dot + event title
- **Connected events:** full opacity, slightly larger text, cursor pointer
- **Unconnected events:** smaller text, ~40% opacity, acting as timeline landmarks
- Era headings appear as subtle horizontal dividers within each column (e.g., "Patriarchs", "Exile") for chronological context

### Scrolling

- Vertical scroll for the full view. No zoom or pan controls needed.

## Ribbon Design

### Shape

Smooth cubic bezier curves flowing from source event (left) to target event (right) through the center channel.

### Color by Connection Type

| Type                   | Color                  |
| ---------------------- | ---------------------- |
| Prophecy-fulfillment   | Deep gold `#B8860B`    |
| Type-antitype          | Warm crimson `#8B2252` |
| Quotation              | Sage green `#5B7744`   |
| Thematic               | Muted blue `#4A6B8A`   |
| Covenant               | Royal purple `#6A4C93` |
| Doctrinal-development  | Burnt sienna `#A0522D` |
| Historical-echo        | Dusty teal `#5F8A8B`   |

### States

- **Default:** ~3px width, ~30% opacity, subtle gradient from source color to a lighter variant across the channel
- **Ribbon hover:** thickens to ~6px, full opacity, all other ribbons fade to ~10%. Floating tooltip at ribbon midpoint shows connection label, type badge, and both scripture references (OT + NT)
- **Event hover (ribbon response):** all ribbons connected to that event animate to full opacity/thickness, all others fade to ~5%

### Entrance Animation

On view load, ribbons draw in sequentially with a staggered Framer Motion animation — left to right, top to bottom — like ink flowing across parchment.

## Interaction

### Hover Event Node

- All ribbons connected to that event highlight (full opacity, ~6px)
- Connected events on the opposite column get a subtle background glow
- All other ribbons fade to ~5% opacity
- Unrelated events stay at default muted state

### Click Event Node

- Opens a modal overlay with full event details: title, date, description, significance, scripture reference, figures, location
- Modal uses Sacred Codex styling (parchment surface, Playfair heading, Source Serif body)
- Ribbon highlight state persists behind the modal so connections remain visible
- Close via X button, clicking outside, or pressing Escape

### Hover Ribbon

- Ribbon thickens and brightens to full opacity
- Others fade to ~10%
- Tooltip appears at ribbon midpoint: connection label, type badge, both scripture references

## Navigation & Entry Point

### View Toggle

A toggle in the header switches between "Timeline" and "Connections" views. Both views share the same track visibility state.

### Connection Type Legend

A small legend in the corner with color swatches and type labels. Each swatch is toggleable to filter ribbon visibility by connection type — reuses the existing `visibleConnections` state.

## Components to Create

| Component              | Location                               | Purpose                                              |
| ---------------------- | -------------------------------------- | ---------------------------------------------------- |
| `ConnectionsView`      | `components/connections/ConnectionsView.tsx`  | Root layout — two columns + center SVG channel       |
| `EventColumn`          | `components/connections/EventColumn.tsx`       | Renders chronological list of events with era dividers |
| `EventNode`            | `components/connections/EventNode.tsx`         | Single event dot + label, handles hover/click         |
| `RibbonCanvas`         | `components/connections/RibbonCanvas.tsx`      | SVG layer rendering all gradient ribbons              |
| `Ribbon`               | `components/connections/Ribbon.tsx`            | Single bezier ribbon with hover tooltip               |
| `ConnectionLegend`     | `components/connections/ConnectionLegend.tsx`  | Toggleable color legend for connection types          |
| `EventModal`           | `components/connections/EventModal.tsx`        | Detail modal for clicked event                        |

## State

Managed at page level, consistent with existing patterns (no Context, no Zustand):

- `activeView: 'timeline' | 'connections'` — which view is shown
- `hoveredEventId: string | null` — drives ribbon highlighting
- `selectedEventId: string | null` — drives modal open state
- `visibleConnections` — reused from existing state for legend filtering
- `visibleTracks` — reused from existing state

## Styling

All styling follows the Sacred Codex design system:

- Background: `#F7F2E8`
- Surface (modal, legend): `#EDE7D9`
- Text: `#2C2416`
- Fonts: Playfair (headings), Source Serif (body), DM Sans (UI labels)
- No dark mode, no emoji

## Build Sequence

1. Create `ConnectionsView` shell with two-column + center channel layout
2. Build `EventColumn` and `EventNode` — render all events chronologically with era dividers, connected vs. unconnected styling
3. Build `RibbonCanvas` and `Ribbon` — SVG ribbons with gradient colors, default state
4. Add ribbon hover interaction — tooltip, opacity transitions
5. Add event node hover — highlight connected ribbons, glow connected events
6. Add entrance animation — staggered Framer Motion ribbon draw-in
7. Build `EventModal` — click event to open detail overlay
8. Build `ConnectionLegend` — toggleable type filter
9. Add view toggle to header — switch between Timeline and Connections
10. Polish — transitions between views, responsive scroll behavior
