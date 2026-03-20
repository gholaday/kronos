'use client';

import { useMemo } from 'react';
import type { BiblicalEvent, Era } from '@/lib/types';
import { TRACK_HEIGHT } from '@/lib/constants';
import { clusterEvents } from '@/lib/clustering';
import EventDot from './EventDot';
import ClusterDot from './ClusterDot';

interface TrackRowProps {
  label: string;
  events: BiblicalEvent[];
  eras: Era[];
  zoom: number;
  panOffset: number;
  selectedEventId: string | null;
  hoveredEventId: string | null;
  onSelectEvent: (id: string) => void;
  onHoverEvent: (id: string | null) => void;
}

function getEraColor(event: BiblicalEvent, eras: Era[]): string {
  const era = eras.find((e) => e.id === event.era);
  return era?.color ?? '#9E9685';
}

export default function TrackRow({
  label,
  events,
  eras,
  zoom,
  panOffset,
  selectedEventId,
  hoveredEventId,
  onSelectEvent,
  onHoverEvent,
}: TrackRowProps) {
  const clusters = useMemo(
    () => clusterEvents(events, zoom, panOffset),
    [events, zoom, panOffset]
  );

  // Global index counter for alternating labels across singles
  let singleIndex = 0;

  return (
    <div className="relative overflow-visible" style={{ height: TRACK_HEIGHT }}>
      {/* Track label */}
      <div
        className="absolute left-3 top-1 z-30 px-2 py-0.5 rounded"
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: 11,
          fontWeight: 500,
          color: 'var(--color-text-secondary)',
          backgroundColor: 'var(--color-bg)',
          border: '1px solid var(--color-border)',
          opacity: 0.9,
        }}
      >
        {label}
      </div>

      {clusters.map((cluster) => {
        if (cluster.events.length === 1) {
          const event = cluster.events[0];
          const idx = singleIndex++;
          return (
            <EventDot
              key={event.id}
              event={event}
              eraColor={getEraColor(event, eras)}
              zoom={zoom}
              panOffset={panOffset}
              index={idx}
              isSelected={selectedEventId === event.id}
              isHovered={hoveredEventId === event.id}
              onSelect={onSelectEvent}
              onHover={onHoverEvent}
            />
          );
        }

        // Multi-event cluster
        return (
          <ClusterDot
            key={cluster.id}
            events={cluster.events}
            centerYear={cluster.centerYear}
            eras={eras}
            zoom={zoom}
            panOffset={panOffset}
            selectedEventId={selectedEventId}
            onSelectEvent={onSelectEvent}
            isHovered={cluster.events.some((e) => e.id === hoveredEventId)}
            onHover={onHoverEvent}
          />
        );
      })}
    </div>
  );
}
