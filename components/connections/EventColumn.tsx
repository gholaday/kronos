'use client';

import { useMemo } from 'react';
import type { BiblicalEvent, Era } from '@/lib/types';
import EventNode from './EventNode';

interface EventColumnProps {
  events: BiblicalEvent[];
  eras: Era[];
  connectedIds: Set<string>;
  highlightedIds: Set<string>;
  isAnythingHovered: boolean;
  onHoverEvent: (id: string | null) => void;
  onClickEvent: (id: string) => void;
}

export default function EventColumn({
  events,
  eras,
  connectedIds,
  highlightedIds,
  isAnythingHovered,
  onHoverEvent,
  onClickEvent,
}: EventColumnProps) {
  const rows = useMemo(() => {
    // Group events by era
    const eraMap = new Map<string, BiblicalEvent[]>();
    const eraIds: string[] = [];

    for (const event of events) {
      if (!eraMap.has(event.era)) {
        eraMap.set(event.era, []);
        eraIds.push(event.era);
      }
      eraMap.get(event.era)!.push(event);
    }

    // Sort eras by start date
    eraIds.sort((a, b) => {
      const eraA = eras.find((e) => e.id === a);
      const eraB = eras.find((e) => e.id === b);
      return (eraA?.start ?? 0) - (eraB?.start ?? 0);
    });

    const result: Array<
      | { kind: 'era'; era: Era }
      | { kind: 'event'; event: BiblicalEvent; eraColor: string }
    > = [];

    for (const eraId of eraIds) {
      const era = eras.find((e) => e.id === eraId);
      if (era) result.push({ kind: 'era', era });

      const eraEvents = eraMap.get(eraId)!.sort((a, b) => a.year - b.year);
      for (const event of eraEvents) {
        result.push({
          kind: 'event',
          event,
          eraColor: era?.color ?? '#6B5D4F',
        });
      }
    }

    return result;
  }, [events, eras]);

  return (
    <div className="flex flex-col py-4">
      {rows.map((row) => {
        if (row.kind === 'era') {
          return (
            <div key={`era-${row.era.id}`} className="px-4 pt-6 pb-1.5">
              <div className="flex items-center gap-2">
                <span
                  className="shrink-0 rounded-full"
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: row.era.color,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                    color: 'var(--color-text)',
                  }}
                >
                  {row.era.label}
                </span>
              </div>
              <div
                className="mt-1.5 h-px"
                style={{ backgroundColor: 'var(--color-border)', opacity: 0.4 }}
              />
            </div>
          );
        }

        const { event, eraColor } = row;
        const isConnected = connectedIds.has(event.id);

        return (
          <EventNode
            key={event.id}
            event={event}
            isConnected={isConnected}
            isHighlighted={highlightedIds.has(event.id)}
            isAnythingHovered={isAnythingHovered}
            eraColor={eraColor}
            onMouseEnter={() => isConnected ? onHoverEvent(event.id) : undefined}
            onMouseLeave={() => onHoverEvent(null)}
            onClick={() => onClickEvent(event.id)}
          />
        );
      })}
    </div>
  );
}
