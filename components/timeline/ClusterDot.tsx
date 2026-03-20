'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { BiblicalEvent, Era } from '@/lib/types';
import { yearToX, formatYear } from '@/lib/timeline-math';

interface ClusterDotProps {
  events: BiblicalEvent[];
  centerYear: number;
  eras: Era[];
  zoom: number;
  panOffset: number;
  selectedEventId: string | null;
  onSelectEvent: (id: string) => void;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

function getEraColor(event: BiblicalEvent, eras: Era[]): string {
  const era = eras.find((e) => e.id === event.era);
  return era?.color ?? '#9E9685';
}

export default function ClusterDot({
  events,
  centerYear,
  eras,
  zoom,
  panOffset,
  selectedEventId,
  onSelectEvent,
  isHovered,
  onHover,
}: ClusterDotProps) {
  const [open, setOpen] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [popoverPos, setPopoverPos] = useState<{ top: number; left: number; openBelow: boolean } | null>(null);
  const x = yearToX(centerYear, zoom, panOffset);

  const containsSelected = events.some((e) => e.id === selectedEventId);
  const primaryColor = getEraColor(events[0], eras);

  // Position popover anchored to the badge element
  useEffect(() => {
    if (!open || !badgeRef.current) return;
    const rect = badgeRef.current.getBoundingClientRect();
    const estimatedHeight = Math.min(30 + events.length * 40, 222);
    const openBelow = rect.top < estimatedHeight + 16;
    setPopoverPos({
      top: openBelow
        ? rect.bottom + window.scrollY
        : rect.top + window.scrollY,
      left: rect.left + rect.width / 2 + window.scrollX,
      openBelow,
    });
  }, [open, x, events.length]);

  // Close popover on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        popoverRef.current && !popoverRef.current.contains(target) &&
        badgeRef.current && !badgeRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <>
      <div
        className="absolute cursor-pointer"
        style={{
          left: x,
          top: 0,
          bottom: 0,
          transform: 'translateX(-50%)',
          zIndex: open ? 30 : containsSelected ? 20 : isHovered ? 10 : 5,
          width: 26,
        }}
        onClick={() => setOpen(!open)}
        onMouseEnter={() => onHover(events[0].id)}
        onMouseLeave={() => onHover(null)}
      >
        {/* Vertical band for cluster */}
        <div
          className="absolute left-1/2 top-0 bottom-0 transition-all duration-150"
          style={{
            width: containsSelected ? 12 : isHovered ? 10 : 8,
            transform: 'translateX(-50%)',
            background: `linear-gradient(to bottom, transparent, ${primaryColor} 12%, ${primaryColor} 88%, transparent)`,
            opacity: containsSelected ? 0.7 : isHovered ? 0.55 : 0.3,
            borderRadius: 2,
            boxShadow: containsSelected
              ? `0 0 8px ${primaryColor}55`
              : isHovered
                ? `0 0 5px ${primaryColor}33`
                : 'none',
          }}
        />

        {/* Count badge at center */}
        <div
          ref={badgeRef}
          className="absolute left-1/2 top-1/2 flex items-center justify-center rounded-full"
          style={{
            transform: 'translate(-50%, -50%)',
            width: 20,
            height: 20,
            fontSize: 10,
            fontFamily: 'var(--font-ui)',
            fontWeight: 600,
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)',
            border: `1.5px solid ${primaryColor}`,
            boxShadow: containsSelected
              ? `0 0 0 3px ${primaryColor}22, 0 1px 3px ${primaryColor}22`
              : `0 1px 3px ${primaryColor}22`,
          }}
        >
          {events.length}
        </div>
      </div>

      {/* Popover via portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {open && popoverPos && (
            <motion.div
              ref={popoverRef}
              initial={{ opacity: 0, scale: 0.95, y: popoverPos.openBelow ? -4 : 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: popoverPos.openBelow ? -4 : 4 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="fixed rounded-lg shadow-lg overflow-hidden"
              style={{
                top: popoverPos.top,
                left: popoverPos.left,
                transform: popoverPos.openBelow
                  ? 'translate(-50%, 8px)'
                  : 'translate(-50%, -100%) translateY(-8px)',
                transformOrigin: popoverPos.openBelow ? 'top center' : 'bottom center',
                zIndex: 9999,
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                minWidth: 200,
                maxWidth: 280,
              }}
              onWheel={(e) => e.stopPropagation()}
            >
              <div
                className="px-3 py-1.5 border-b"
                style={{
                  borderColor: 'var(--color-border)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {formatYear(centerYear, true)} — {events.length} events
              </div>
              <div className="max-h-48 overflow-y-auto">
                {events.map((event) => {
                  const color = getEraColor(event, eras);
                  const isSelected = event.id === selectedEventId;
                  return (
                    <button
                      key={event.id}
                      onClick={() => {
                        onSelectEvent(event.id);
                        setOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 flex items-start gap-2 hover:bg-[var(--color-bg)] transition-colors cursor-pointer"
                      style={{
                        backgroundColor: isSelected ? 'var(--color-bg)' : undefined,
                        borderBottom: '1px solid var(--color-border)',
                      }}
                    >
                      <span
                        className="shrink-0 mt-1 rounded-full"
                        style={{
                          width: 6,
                          height: 6,
                          backgroundColor: color,
                        }}
                      />
                      <span className="min-w-0">
                        <span
                          className="text-xs font-semibold block truncate"
                          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}
                        >
                          {event.title}
                        </span>
                        {event.scripture && (
                          <span
                            className="text-[10px] block truncate"
                            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
                          >
                            {event.scripture}
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
