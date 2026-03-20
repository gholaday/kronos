'use client';

import { useMemo } from 'react';
import type { BiblicalEvent, CrossReference } from '@/lib/types';
import { formatYear } from '@/lib/timeline-math';
import { CONNECTION_STYLES } from '@/lib/constants';

interface EventCardProps {
  event: BiblicalEvent;
  crossRefs: CrossReference[];
  allEvents: BiblicalEvent[];
  onClose: () => void;
  onNavigate: (eventId: string) => void;
}

export default function EventCard({ event, crossRefs, allEvents, onClose, onNavigate }: EventCardProps) {
  const eraLabel = event.era
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  // Same-track events sorted chronologically for prev/next navigation
  const trackEvents = useMemo(() => {
    return allEvents
      .filter((e) => e.track === event.track)
      .sort((a, b) => a.year - b.year);
  }, [allEvents, event.track]);

  const currentIndex = trackEvents.findIndex((e) => e.id === event.id);
  const prevEvent = currentIndex > 0 ? trackEvents[currentIndex - 1] : null;
  const nextEvent = currentIndex < trackEvents.length - 1 ? trackEvents[currentIndex + 1] : null;

  return (
    <div className="h-full">
      <div className="max-w-3xl mx-auto px-6 py-4">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2
              className="text-lg font-semibold leading-tight"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {event.title}
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
              <span
                className="text-xs"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
              >
                {formatYear(event.year, event.approximate)}
                {event.endYear != null && ` — ${formatYear(event.endYear)}`}
              </span>
              {event.scripture && (
                <span
                  className="text-xs px-1.5 py-0.5 rounded"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-text)',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {event.scripture}
                </span>
              )}
              <span
                className="text-xs"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {event.location.name}
              </span>
              <span
                className="text-xs px-1.5 py-0.5 rounded"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 10,
                  color: 'var(--color-text-secondary)',
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {eraLabel}
              </span>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-1.5">
            <button
              onClick={() => prevEvent && onNavigate(prevEvent.id)}
              disabled={!prevEvent}
              className="text-sm px-2 py-1 rounded cursor-pointer hover:bg-[var(--color-bg)] transition-colors disabled:opacity-30 disabled:cursor-default"
              style={{
                fontFamily: 'var(--font-ui)',
                color: 'var(--color-text-secondary)',
                border: '1px solid var(--color-border)',
              }}
              title={prevEvent ? prevEvent.title : undefined}
            >
              &#8592;
            </button>
            <button
              onClick={() => nextEvent && onNavigate(nextEvent.id)}
              disabled={!nextEvent}
              className="text-sm px-2 py-1 rounded cursor-pointer hover:bg-[var(--color-bg)] transition-colors disabled:opacity-30 disabled:cursor-default"
              style={{
                fontFamily: 'var(--font-ui)',
                color: 'var(--color-text-secondary)',
                border: '1px solid var(--color-border)',
              }}
              title={nextEvent ? nextEvent.title : undefined}
            >
              &#8594;
            </button>
            <button
              onClick={onClose}
              className="text-sm px-3 py-1 rounded cursor-pointer hover:bg-[var(--color-bg)] transition-colors"
              style={{
                fontFamily: 'var(--font-ui)',
                color: 'var(--color-text-secondary)',
                border: '1px solid var(--color-border)',
              }}
            >
              Close
            </button>
          </div>
        </div>

        {/* Key figures */}
        {event.figures.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {event.figures.map((figure) => (
              <span
                key={figure}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  fontFamily: 'var(--font-ui)',
                  color: 'var(--color-text)',
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {figure}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        {event.description && (
          <p
            className="mt-3 text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}
          >
            {event.description}
          </p>
        )}

        {/* Significance */}
        {event.significance && (
          <div className="mt-3">
            <h3
              className="text-xs font-semibold uppercase tracking-wide mb-1"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-text-secondary)' }}
            >
              Significance
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}
            >
              {event.significance}
            </p>
          </div>
        )}

        {/* Historical Context */}
        {event.historicalContext && (
          <div className="mt-3">
            <h3
              className="text-xs font-semibold uppercase tracking-wide mb-1"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-text-secondary)' }}
            >
              Historical Context
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              {event.historicalContext}
            </p>
          </div>
        )}

        {/* Cross-References */}
        {crossRefs.length > 0 && (
          <div className="mt-3">
            <h3
              className="text-xs font-semibold uppercase tracking-wide mb-1.5"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-text-secondary)' }}
            >
              Connections
            </h3>
            <div className="flex flex-col gap-1.5">
              {crossRefs.map((ref) => {
                const isSource = ref.sourceEventId === event.id;
                const linkedId = isSource ? ref.targetEventId : ref.sourceEventId;
                const linkedEvent = allEvents.find((e) => e.id === linkedId);
                const style = CONNECTION_STYLES[ref.type];

                return (
                  <button
                    key={ref.id}
                    onClick={() => onNavigate(linkedId)}
                    className="flex items-center gap-2 text-left px-2 py-1.5 rounded hover:bg-[var(--color-bg)] transition-colors"
                    style={{ border: '1px solid var(--color-border)' }}
                  >
                    <span
                      className="shrink-0 w-3 h-0.5 rounded-full"
                      style={{ backgroundColor: style.color }}
                    />
                    <span className="min-w-0">
                      <span
                        className="text-xs font-medium block truncate"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}
                      >
                        {ref.label}
                      </span>
                      <span
                        className="text-[10px] block truncate"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
                      >
                        {style.label} — {linkedEvent?.title ?? linkedId}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
