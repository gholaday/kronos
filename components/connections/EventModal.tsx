'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { BiblicalEvent, CrossReference } from '@/lib/types';
import { CONNECTION_STYLES } from '@/lib/constants';
import { RIBBON_COLORS } from './RibbonCanvas';
import ConnectionIcon from './ConnectionIcons';
import { formatYear } from '@/lib/timeline-math';

interface EventModalProps {
  event: BiblicalEvent | null;
  crossRefs: CrossReference[];
  allEvents: BiblicalEvent[];
  onClose: () => void;
  onNavigate: (eventId: string) => void;
}

export default function EventModal({ event, crossRefs, allEvents, onClose, onNavigate }: EventModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!event) return;
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [event, handleKeyDown]);

  const eraLabel = event?.era
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const hasConnections = crossRefs.length > 0;

  return (
    <AnimatePresence>
      {event && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40"
            style={{
              backgroundColor: 'rgba(44, 36, 22, 0.35)',
              backdropFilter: 'blur(2px)',
            }}
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className={`fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-h-[85vh] overflow-hidden rounded-lg ${hasConnections ? 'max-w-4xl' : 'max-w-lg'}`}
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              boxShadow:
                '0 24px 48px rgba(44, 36, 22, 0.15), 0 8px 16px rgba(44, 36, 22, 0.08)',
            }}
          >
            <div className={`flex ${hasConnections ? '' : 'flex-col'} h-full max-h-[85vh]`}>
              {/* Left side: Event details */}
              <div
                className={`overflow-y-auto px-6 py-5 relative ${hasConnections ? 'w-1/2 border-r' : 'w-full'}`}
                style={hasConnections ? { borderColor: 'var(--color-border)' } : undefined}
              >
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded hover:bg-[var(--color-bg)]"
                  style={{
                    color: 'var(--color-text-secondary)',
                    border: '1px solid var(--color-border)',
                    fontFamily: 'var(--font-ui)',
                    fontSize: 12,
                    transition: 'background-color 0.15s',
                  }}
                >
                  &#x2715;
                </button>

                <h2
                  className="text-lg font-semibold leading-tight pr-10"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {event.title}
                </h2>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {formatYear(event.year, event.approximate)}
                    {event.endYear != null && ` \u2014 ${formatYear(event.endYear)}`}
                  </span>
                  {event.scripture && (
                    <span
                      className="px-1.5 py-0.5 rounded"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        color: 'var(--color-text)',
                        backgroundColor: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      {event.scripture}
                    </span>
                  )}
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
                    {event.location.name}
                  </span>
                  <span
                    className="px-1.5 py-0.5 rounded"
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

                {event.figures.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {event.figures.map((figure) => (
                      <span
                        key={figure}
                        className="px-2 py-0.5 rounded-full"
                        style={{
                          fontFamily: 'var(--font-ui)',
                          fontSize: 11,
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

                {event.description && (
                  <p
                    className="mt-4 text-sm leading-relaxed"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-text)',
                    }}
                  >
                    {event.description}
                  </p>
                )}

                {event.significance && (
                  <div className="mt-4">
                    <h3
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{
                        fontFamily: 'var(--font-ui)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      Significance
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-text)',
                      }}
                    >
                      {event.significance}
                    </p>
                  </div>
                )}

                {event.historicalContext && (
                  <div className="mt-4">
                    <h3
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{
                        fontFamily: 'var(--font-ui)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      Historical Context
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {event.historicalContext}
                    </p>
                  </div>
                )}
              </div>

              {/* Right side: Connections with full explanations */}
              {hasConnections && (
                <div className="w-1/2 overflow-y-auto px-6 py-5">
                  <h3
                    className="text-xs font-semibold uppercase tracking-wide mb-4"
                    style={{
                      fontFamily: 'var(--font-ui)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    Connections
                  </h3>
                  <div className="flex flex-col gap-5">
                    {crossRefs.map((ref) => {
                      const isSource = ref.sourceEventId === event.id;
                      const linkedId = isSource ? ref.targetEventId : ref.sourceEventId;
                      const linkedEvent = allEvents.find((e) => e.id === linkedId);
                      const color = RIBBON_COLORS[ref.type];
                      const connStyle = CONNECTION_STYLES[ref.type];

                      return (
                        <div key={ref.id}>
                          {/* Connection header */}
                          <div className="flex items-center gap-2 mb-1.5">
                            <ConnectionIcon type={ref.type} color={color} size={14} />
                            <span
                              style={{
                                fontSize: 9,
                                fontFamily: 'var(--font-ui)',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                color,
                              }}
                            >
                              {connStyle.label}
                            </span>
                          </div>

                          {/* Label as title */}
                          <button
                            onClick={() => onNavigate(linkedId)}
                            className="text-left hover:underline"
                            style={{
                              fontFamily: 'var(--font-heading)',
                              fontSize: 14,
                              fontWeight: 600,
                              color: 'var(--color-text)',
                              textDecorationColor: color,
                            }}
                          >
                            {ref.label}
                          </button>

                          {/* Linked event */}
                          <button
                            onClick={() => onNavigate(linkedId)}
                            className="flex items-center gap-1.5 mt-1 hover:underline"
                            style={{
                              fontSize: 11,
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--color-text-secondary)',
                              textDecorationColor: 'var(--color-text-secondary)',
                            }}
                          >
                            <span>&rarr;</span>
                            <span>{linkedEvent?.title ?? linkedId}</span>
                          </button>

                          {/* Scripture references */}
                          {(ref.otReference || ref.ntReference) && (
                            <div
                              className="flex flex-wrap gap-1.5 mt-2"
                            >
                              {ref.otReference && (
                                <span
                                  className="px-1.5 py-0.5 rounded"
                                  style={{
                                    fontSize: 10,
                                    fontFamily: 'var(--font-mono)',
                                    color: 'var(--color-text-secondary)',
                                    backgroundColor: 'var(--color-bg)',
                                    border: '1px solid var(--color-border)',
                                  }}
                                >
                                  {ref.otReference}
                                </span>
                              )}
                              {ref.ntReference && (
                                <span
                                  className="px-1.5 py-0.5 rounded"
                                  style={{
                                    fontSize: 10,
                                    fontFamily: 'var(--font-mono)',
                                    color: 'var(--color-text-secondary)',
                                    backgroundColor: 'var(--color-bg)',
                                    border: '1px solid var(--color-border)',
                                  }}
                                >
                                  {ref.ntReference}
                                </span>
                              )}
                            </div>
                          )}

                          {/* Full explanation */}
                          <p
                            className="mt-2 text-sm leading-relaxed"
                            style={{
                              fontFamily: 'var(--font-body)',
                              color: 'var(--color-text-secondary)',
                            }}
                          >
                            {ref.explanation}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
