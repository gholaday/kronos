'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { BiblicalEvent } from '@/lib/types';
import { yearToX, formatYear } from '@/lib/timeline-math';

interface EventDotProps {
  event: BiblicalEvent;
  eraColor: string;
  zoom: number;
  panOffset: number;
  index: number;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}

export default function EventDot({
  event,
  eraColor,
  zoom,
  panOffset,
  index,
  isSelected,
  isHovered,
  onSelect,
  onHover,
}: EventDotProps) {
  const x = yearToX(event.year, zoom, panOffset);
  const showLabel = zoom > 0.15;
  const showDate = zoom > 0.35;
  const labelAbove = index % 2 === 0;

  const lineWidth = isSelected ? 8 : isHovered ? 7 : 5;
  const lineOpacity = isSelected ? 0.8 : isHovered ? 0.55 : 0.3;

  return (
    <div
      className="absolute cursor-pointer"
      style={{
        left: x,
        top: 0,
        bottom: 0,
        transform: 'translateX(-50%)',
        zIndex: isSelected ? 20 : isHovered ? 10 : 1,
        width: 22,
      }}
      onClick={() => onSelect(event.id)}
      onMouseEnter={() => onHover(event.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Vertical stroke with gradient fade at edges */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0"
        animate={
          isSelected
            ? { opacity: [0.5, 1, 0.5] }
            : { opacity: lineOpacity }
        }
        transition={
          isSelected
            ? { duration: 2, ease: 'easeInOut', repeat: Infinity }
            : { duration: 0.15 }
        }
        style={{
          width: lineWidth,
          transform: 'translateX(-50%)',
          transformOrigin: 'center',
          background: `linear-gradient(to bottom, transparent, ${eraColor} 12%, ${eraColor} 88%, transparent)`,
          boxShadow: isSelected
            ? `0 0 12px ${eraColor}77, 0 0 4px ${eraColor}55`
            : isHovered
              ? `0 0 5px ${eraColor}33`
              : 'none',
        }}
      />

      {/* Label (at top or bottom of track) */}
      {showLabel && (
        <div
          className={`absolute whitespace-nowrap pointer-events-none ${
            labelAbove ? 'top-1.5' : 'bottom-1.5'
          }`}
          style={{
            left: 20,
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 600,
            color: isSelected || isHovered ? 'var(--color-text)' : 'var(--color-text-secondary)',
          }}
        >
          {event.title}
          {showDate && (
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                fontWeight: 400,
                color: 'var(--color-text-secondary)',
              }}
            >
              {formatYear(event.year, event.approximate)}
            </div>
          )}
        </div>
      )}

      {/* Tooltip at low zoom */}
      <AnimatePresence>
        {!showLabel && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-1/2 bottom-full mb-2 px-2 py-1 rounded shadow-md whitespace-nowrap pointer-events-none"
            style={{
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: 'var(--color-text)',
            }}
          >
            {event.title}
            <span
              className="ml-2"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-text-secondary)' }}
            >
              {formatYear(event.year, event.approximate)}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
