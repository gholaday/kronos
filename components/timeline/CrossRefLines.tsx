'use client';

import { useState, useMemo } from 'react';
import type { BiblicalEvent, CrossReference, Track, ConnectionType } from '@/lib/types';
import { yearToX } from '@/lib/timeline-math';
import { CONNECTION_STYLES, TRACK_HEIGHT, AXIS_HEIGHT } from '@/lib/constants';

interface CrossRefLinesProps {
  crossReferences: CrossReference[];
  events: BiblicalEvent[];
  visibleTracks: Track[];
  visibleConnections: ConnectionType[];
  zoom: number;
  panOffset: number;
  viewportWidth: number;
  trackPositions: {
    otTop: number;
    axisTop: number;
    ntTop: number;
    worldTop: number;
  };
  totalHeight: number;
  selectedEventId: string | null;
  hoveredEventId: string | null;
}

function trackCenterY(
  track: Track,
  positions: CrossRefLinesProps['trackPositions']
): number {
  switch (track) {
    case 'ot':
      return positions.otTop + TRACK_HEIGHT / 2;
    case 'nt':
    case 'church':
      return positions.ntTop + TRACK_HEIGHT / 2;
    case 'world':
      return positions.worldTop + TRACK_HEIGHT / 2;
  }
}

export default function CrossRefLines({
  crossReferences,
  events,
  visibleTracks,
  visibleConnections,
  zoom,
  panOffset,
  viewportWidth,
  trackPositions,
  totalHeight,
  selectedEventId,
  hoveredEventId,
}: CrossRefLinesProps) {
  const [hoveredRefId, setHoveredRefId] = useState<string | null>(null);

  const eventMap = useMemo(() => {
    const map = new Map<string, BiblicalEvent>();
    for (const e of events) map.set(e.id, e);
    return map;
  }, [events]);

  // Filter and compute visible lines
  const lines = useMemo(() => {
    return crossReferences
      .filter((ref) => {
        if (!visibleConnections.includes(ref.type)) return false;
        const source = eventMap.get(ref.sourceEventId);
        const target = eventMap.get(ref.targetEventId);
        if (!source || !target) return false;
        if (!visibleTracks.includes(source.track) || !visibleTracks.includes(target.track))
          return false;
        return true;
      })
      .map((ref) => {
        const source = eventMap.get(ref.sourceEventId)!;
        const target = eventMap.get(ref.targetEventId)!;
        const sourceX = yearToX(source.year, zoom, panOffset);
        const targetX = yearToX(target.year, zoom, panOffset);
        const sourceY = trackCenterY(source.track, trackPositions);
        const targetY = trackCenterY(target.track, trackPositions);
        const midX = (sourceX + targetX) / 2;
        const controlY = trackPositions.axisTop + AXIS_HEIGHT / 2;

        return {
          ref,
          sourceX,
          targetX,
          sourceY,
          targetY,
          midX,
          controlY,
          sourceEventId: source.id,
          targetEventId: target.id,
        };
      })
      .filter((line) => {
        // Cull if both endpoints far off viewport
        const margin = 200;
        if (line.sourceX < -margin && line.targetX < -margin) return false;
        if (line.sourceX > viewportWidth + margin && line.targetX > viewportWidth + margin)
          return false;
        return true;
      });
  }, [crossReferences, eventMap, visibleTracks, visibleConnections, zoom, panOffset, viewportWidth, trackPositions]);

  // Compute opacity for each line based on selection/hover state
  function getOpacity(line: (typeof lines)[number]): number {
    const isLineHovered = hoveredRefId === line.ref.id;
    if (isLineHovered) return 1.0;

    const isConnectedToSelected =
      selectedEventId != null &&
      (line.sourceEventId === selectedEventId || line.targetEventId === selectedEventId);

    const isConnectedToHovered =
      hoveredEventId != null &&
      (line.sourceEventId === hoveredEventId || line.targetEventId === hoveredEventId);

    if (selectedEventId != null) {
      return isConnectedToSelected ? 0.9 : 0.12;
    }
    if (hoveredEventId != null) {
      return isConnectedToHovered ? 0.7 : 0.3;
    }
    return 0.5;
  }

  if (lines.length === 0) return null;

  return (
    <>
      <svg
        className="absolute left-0 top-0 pointer-events-none"
        style={{ width: '100%', height: totalHeight }}
      >
        {lines.map((line) => {
          const style = CONNECTION_STYLES[line.ref.type];
          const isLineHovered = hoveredRefId === line.ref.id;
          const d = `M ${line.sourceX} ${line.sourceY} Q ${line.midX} ${line.controlY} ${line.targetX} ${line.targetY}`;

          return (
            <path
              key={line.ref.id}
              d={d}
              fill="none"
              stroke={style.color}
              strokeWidth={isLineHovered ? style.strokeWidth + 1 : style.strokeWidth}
              strokeDasharray={style.dashArray === 'none' ? undefined : style.dashArray}
              opacity={getOpacity(line)}
              style={{
                pointerEvents: 'stroke',
                cursor: 'pointer',
                transition: 'opacity 150ms, stroke-width 150ms',
              }}
              onMouseEnter={() => setHoveredRefId(line.ref.id)}
              onMouseLeave={() => setHoveredRefId(null)}
            />
          );
        })}
      </svg>

      {/* Tooltip for hovered line */}
      {hoveredRefId != null &&
        (() => {
          const line = lines.find((l) => l.ref.id === hoveredRefId);
          if (!line) return null;
          const style = CONNECTION_STYLES[line.ref.type];

          return (
            <div
              className="absolute pointer-events-none px-2.5 py-1.5 rounded-lg shadow-md z-30"
              style={{
                left: line.midX,
                top: line.controlY,
                transform: 'translate(-50%, -100%) translateY(-8px)',
                backgroundColor: 'var(--color-surface)',
                border: `1px solid ${style.color}`,
                maxWidth: 220,
              }}
            >
              <div
                className="text-xs font-medium"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}
              >
                {line.ref.label}
              </div>
              <div
                className="flex items-center gap-1.5 mt-0.5"
                style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
              >
                <span
                  className="shrink-0"
                  style={{
                    width: 10,
                    height: 2,
                    backgroundColor: style.color,
                    borderRadius: 1,
                  }}
                />
                {style.label}
              </div>
              {(line.ref.otReference || line.ref.ntReference) && (
                <div
                  className="mt-0.5"
                  style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
                >
                  {[line.ref.otReference, line.ref.ntReference].filter(Boolean).join(' / ')}
                </div>
              )}
            </div>
          );
        })()}
    </>
  );
}
