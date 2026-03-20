'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Era, Track } from '@/lib/types';
import { formatYear } from '@/lib/timeline-math';

interface EraJumperProps {
  eras: Era[];
  visibleTracks: Track[];
  onJumpToEra: (era: Era) => void;
}

const TRACK_GROUPS: { track: Track | 'inter' | 'church'; label: string; showWhen: Track }[] = [
  { track: 'ot', label: 'Old Testament', showWhen: 'ot' },
  { track: 'inter', label: 'Intertestamental', showWhen: 'ot' },
  { track: 'nt', label: 'New Testament', showWhen: 'nt' },
  { track: 'church', label: 'Church Fathers & Councils', showWhen: 'church' },
  { track: 'world', label: 'World History', showWhen: 'world' },
];

export default function EraJumper({ eras, visibleTracks, onJumpToEra }: EraJumperProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-1 rounded-lg text-sm font-medium transition-colors"
        style={{
          fontFamily: 'var(--font-ui)',
          color: open ? 'var(--color-text)' : 'var(--color-text-secondary)',
          backgroundColor: open ? 'var(--color-bg)' : 'transparent',
          border: `1px solid ${open ? 'var(--color-text)' : 'var(--color-border)'}`,
        }}
      >
        Jump to Era
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformOrigin: 'top right' }}
            className="absolute top-full mt-2 right-0 rounded-lg shadow-lg overflow-hidden z-50"
          >
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                minWidth: 240,
                maxHeight: 400,
                overflowY: 'auto',
                borderRadius: 'inherit',
              }}
              onWheel={(e) => e.stopPropagation()}
            >
              {TRACK_GROUPS.filter((g) => visibleTracks.includes(g.showWhen)).map((group) => {
                const groupEras = eras.filter((e) => e.track === group.track);
                if (groupEras.length === 0) return null;

                return (
                  <div key={group.track}>
                    <div
                      className="px-3 py-1.5 sticky top-0"
                      style={{
                        fontSize: 10,
                        fontFamily: 'var(--font-ui)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--color-text-secondary)',
                        backgroundColor: 'var(--color-surface)',
                        borderBottom: '1px solid var(--color-border)',
                      }}
                    >
                      {group.label}
                    </div>
                    {groupEras.map((era) => (
                      <button
                        key={era.id}
                        onClick={() => {
                          onJumpToEra(era);
                          setOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-[var(--color-bg)] transition-colors"
                        style={{ borderBottom: '1px solid var(--color-border)' }}
                      >
                        <span
                          className="shrink-0 rounded-full"
                          style={{ width: 8, height: 8, backgroundColor: era.color }}
                        />
                        <span className="min-w-0 flex-1">
                          <span
                            className="text-xs font-medium block truncate"
                            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}
                          >
                            {era.label}
                          </span>
                          <span
                            className="text-[10px] block"
                            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
                          >
                            {formatYear(era.start)} — {formatYear(era.end)}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
