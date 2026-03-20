'use client';

import {
  useState,
  useMemo,
  useCallback,
  useLayoutEffect,
  useEffect,
  useRef,
} from 'react';
import type {
  BiblicalEvent,
  Era,
  CrossReference,
  Track,
  ConnectionType,
} from '@/lib/types';
import { CONNECTION_STYLES } from '@/lib/constants';
import EventColumn from './EventColumn';
import RibbonCanvas, { RIBBON_COLORS } from './RibbonCanvas';
import type { RibbonDatum } from './RibbonCanvas';
import ConnectionLegend from './ConnectionLegend';
import EventModal from './EventModal';

interface ConnectionsViewProps {
  events: BiblicalEvent[];
  eras: Era[];
  crossRefs: CrossReference[];
  visibleTracks: Track[];
  visibleConnections: ConnectionType[];
  onToggleConnection: (type: ConnectionType) => void;
}

export default function ConnectionsView({
  events,
  eras,
  crossRefs,
  visibleTracks,
  visibleConnections,
  onToggleConnection,
}: ConnectionsViewProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Map<string, { x: number; y: number }>>(
    new Map(),
  );
  const [contentHeight, setContentHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);
  const [hoveredRibbonId, setHoveredRibbonId] = useState<string | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [tooltipData, setTooltipData] = useState<{
    x: number;
    y: number;
    ref: CrossReference;
  } | null>(null);

  // ── Split events into columns ───────────────────────────────────────
  const leftEvents = useMemo(
    () =>
      events.filter(
        (e) =>
          visibleTracks.includes(e.track) && (e.track === 'ot' || e.track === 'world'),
      ),
    [events, visibleTracks],
  );

  const rightEvents = useMemo(
    () =>
      events.filter(
        (e) =>
          visibleTracks.includes(e.track) && (e.track === 'nt' || e.track === 'church'),
      ),
    [events, visibleTracks],
  );

  const leftIds = useMemo(() => new Set(leftEvents.map((e) => e.id)), [leftEvents]);
  const rightIds = useMemo(() => new Set(rightEvents.map((e) => e.id)), [rightEvents]);

  // ── Filter cross-refs ───────────────────────────────────────────────
  const visibleRefs = useMemo(
    () =>
      crossRefs.filter((ref) => {
        if (!visibleConnections.includes(ref.type)) return false;
        const sourceVisible =
          leftIds.has(ref.sourceEventId) || rightIds.has(ref.sourceEventId);
        const targetVisible =
          leftIds.has(ref.targetEventId) || rightIds.has(ref.targetEventId);
        return sourceVisible && targetVisible;
      }),
    [crossRefs, visibleConnections, leftIds, rightIds],
  );

  // ── Connected event IDs ─────────────────────────────────────────────
  const connectedIds = useMemo(() => {
    const ids = new Set<string>();
    visibleRefs.forEach((ref) => {
      ids.add(ref.sourceEventId);
      ids.add(ref.targetEventId);
    });
    return ids;
  }, [visibleRefs]);

  // ── Highlighted IDs (event hover or ribbon hover) ───────────────────
  const highlightedIds = useMemo(() => {
    if (!hoveredEventId && !hoveredRibbonId) return new Set<string>();

    if (hoveredRibbonId) {
      const ref = visibleRefs.find((r) => r.id === hoveredRibbonId);
      return ref
        ? new Set([ref.sourceEventId, ref.targetEventId])
        : new Set<string>();
    }

    const connected = new Set<string>([hoveredEventId!]);
    visibleRefs.forEach((ref) => {
      if (ref.sourceEventId === hoveredEventId) connected.add(ref.targetEventId);
      if (ref.targetEventId === hoveredEventId) connected.add(ref.sourceEventId);
    });
    return connected;
  }, [hoveredEventId, hoveredRibbonId, visibleRefs]);

  const highlightedRibbonIds = useMemo(() => {
    if (!hoveredEventId && !hoveredRibbonId) return new Set<string>();
    if (hoveredRibbonId) return new Set([hoveredRibbonId]);

    return new Set(
      visibleRefs
        .filter(
          (ref) =>
            ref.sourceEventId === hoveredEventId ||
            ref.targetEventId === hoveredEventId,
        )
        .map((ref) => ref.id),
    );
  }, [hoveredEventId, hoveredRibbonId, visibleRefs]);

  const isAnythingHovered = hoveredEventId !== null || hoveredRibbonId !== null;

  // ── Measure event node positions ────────────────────────────────────
  const measurePositions = useCallback(() => {
    if (!contentRef.current) return;
    const content = contentRef.current;
    const contentRect = content.getBoundingClientRect();

    const pos = new Map<string, { x: number; y: number }>();
    content.querySelectorAll('[data-event-id]').forEach((el) => {
      const id = el.getAttribute('data-event-id')!;
      const rect = el.getBoundingClientRect();
      pos.set(id, {
        x: rect.left - contentRect.left + rect.width / 2,
        y: rect.top - contentRect.top + rect.height / 2,
      });
    });

    setPositions(pos);
    setContentHeight(content.scrollHeight);
    setContainerWidth(content.clientWidth);
  }, []);

  // Measure after DOM is committed (before paint)
  useLayoutEffect(() => {
    measurePositions();
  }, [leftEvents, rightEvents, measurePositions]);

  // Re-measure on resize
  useEffect(() => {
    const ro = new ResizeObserver(measurePositions);
    if (contentRef.current) ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, [measurePositions]);

  // ── Compute ribbon data ─────────────────────────────────────────────
  const ribbonData: RibbonDatum[] = useMemo(() => {
    if (positions.size === 0 || containerWidth === 0) return [];

    return visibleRefs
      .map((ref) => {
        const sourcePos = positions.get(ref.sourceEventId);
        const targetPos = positions.get(ref.targetEventId);
        if (!sourcePos || !targetPos) return null;

        const sourceInLeft = leftIds.has(ref.sourceEventId);
        const targetInLeft = leftIds.has(ref.targetEventId);
        const isCrossColumn = sourceInLeft !== targetInLeft;

        let sourceY: number;
        let targetY: number;

        if (isCrossColumn) {
          // Ensure source = left, target = right for consistent rendering
          sourceY = sourceInLeft ? sourcePos.y : targetPos.y;
          targetY = sourceInLeft ? targetPos.y : sourcePos.y;
        } else {
          // Same column: top event first
          if (sourcePos.y <= targetPos.y) {
            sourceY = sourcePos.y;
            targetY = targetPos.y;
          } else {
            sourceY = targetPos.y;
            targetY = sourcePos.y;
          }
        }

        return { crossRef: ref, sourceY, targetY, isCrossColumn };
      })
      .filter(Boolean) as RibbonDatum[];
  }, [visibleRefs, positions, containerWidth, leftIds]);

  // ── Selected event for modal ────────────────────────────────────────
  const selectedEvent = useMemo(
    () =>
      selectedEventId ? events.find((e) => e.id === selectedEventId) ?? null : null,
    [selectedEventId, events],
  );

  // ── Ribbon hover handlers ──────────────────────────────────────────
  const handleRibbonHover = useCallback(
    (id: string, midX: number, midY: number) => {
      setHoveredRibbonId(id);
      const ref = visibleRefs.find((r) => r.id === id);
      if (ref) setTooltipData({ x: midX, y: midY, ref });
    },
    [visibleRefs],
  );

  const handleRibbonUnhover = useCallback(() => {
    setHoveredRibbonId(null);
    setTooltipData(null);
  }, []);

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Legend bar */}
      <div
        className="shrink-0 px-6 py-3 border-b"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <ConnectionLegend
          visibleConnections={visibleConnections}
          onToggle={onToggleConnection}
        />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div ref={contentRef} className="relative min-h-full">
          {/* SVG ribbon overlay */}
          <RibbonCanvas
            ribbons={ribbonData}
            containerWidth={containerWidth}
            contentHeight={contentHeight}
            highlightedRibbonIds={highlightedRibbonIds}
            isAnythingHovered={isAnythingHovered}
            onHoverRibbon={handleRibbonHover}
            onUnhoverRibbon={handleRibbonUnhover}
          />

          {/* Ribbon tooltip */}
          {tooltipData && (
            <div
              className="absolute z-30 pointer-events-none px-3 py-2 rounded-md max-w-xs"
              style={{
                left: tooltipData.x,
                top: tooltipData.y,
                transform: 'translate(-50%, -120%)',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 4px 12px rgba(44, 36, 22, 0.12)',
              }}
            >
              <div
                className="font-medium"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'var(--color-text)',
                }}
              >
                {tooltipData.ref.label}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className="px-1.5 py-0.5 rounded"
                  style={{
                    fontSize: 9,
                    fontFamily: 'var(--font-ui)',
                    fontWeight: 600,
                    color: RIBBON_COLORS[tooltipData.ref.type],
                    backgroundColor: `${RIBBON_COLORS[tooltipData.ref.type]}15`,
                    border: `1px solid ${RIBBON_COLORS[tooltipData.ref.type]}30`,
                  }}
                >
                  {CONNECTION_STYLES[tooltipData.ref.type].label}
                </span>
              </div>
              {(tooltipData.ref.otReference || tooltipData.ref.ntReference) && (
                <div
                  className="mt-1.5 flex gap-2"
                  style={{
                    fontSize: 10,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {tooltipData.ref.otReference && (
                    <span>{tooltipData.ref.otReference}</span>
                  )}
                  {tooltipData.ref.otReference && tooltipData.ref.ntReference && (
                    <span>&rarr;</span>
                  )}
                  {tooltipData.ref.ntReference && (
                    <span>{tooltipData.ref.ntReference}</span>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Two-column layout */}
          <div className="flex">
            {/* Left column: OT + World */}
            <div
              className="w-[30%]"
              style={{
                borderRight: '1px dashed var(--color-border)',
                borderRightColor: 'rgba(196, 184, 164, 0.5)',
              }}
            >
              <div className="px-4 pt-4 pb-1">
                <span
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Old Testament &amp; World
                </span>
              </div>
              <EventColumn
                events={leftEvents}
                eras={eras}
                connectedIds={connectedIds}
                highlightedIds={highlightedIds}
                isAnythingHovered={isAnythingHovered}
                onHoverEvent={setHoveredEventId}
                onClickEvent={setSelectedEventId}
              />
            </div>

            {/* Center channel (spacer for ribbons) */}
            <div className="w-[40%]" />

            {/* Right column: NT + Church */}
            <div
              className="w-[30%]"
              style={{
                borderLeft: '1px dashed var(--color-border)',
                borderLeftColor: 'rgba(196, 184, 164, 0.5)',
              }}
            >
              <div className="px-4 pt-4 pb-1">
                <span
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  New Testament &amp; Church
                </span>
              </div>
              <EventColumn
                events={rightEvents}
                eras={eras}
                connectedIds={connectedIds}
                highlightedIds={highlightedIds}
                isAnythingHovered={isAnythingHovered}
                onHoverEvent={setHoveredEventId}
                onClickEvent={setSelectedEventId}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Event detail modal */}
      <EventModal
        event={selectedEvent}
        crossRefs={
          selectedEvent
            ? crossRefs.filter(
                (r) =>
                  r.sourceEventId === selectedEvent.id ||
                  r.targetEventId === selectedEvent.id,
              )
            : []
        }
        allEvents={events}
        onClose={() => setSelectedEventId(null)}
        onNavigate={setSelectedEventId}
      />
    </div>
  );
}
