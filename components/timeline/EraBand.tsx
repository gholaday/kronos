'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { Era } from '@/lib/types';
import { yearToX } from '@/lib/timeline-math';
import { ERA_BAND_OPACITY } from '@/lib/constants';

interface EraBandProps {
  era: Era;
  zoom: number;
  panOffset: number;
  viewportWidth: number;
  height: number;
  top: number;
}

export default function EraBand({ era, zoom, panOffset, viewportWidth, height, top }: EraBandProps) {
  const x1 = yearToX(era.start, zoom, panOffset);
  const x2 = yearToX(era.end, zoom, panOffset);

  // Skip if entirely out of viewport
  if (x2 < -100 || x1 > viewportWidth + 100) return null;

  const width = x2 - x1;
  const showLabel = width > 60;

  return (
    <>
      {/* Background fill */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: x1,
          top,
          width,
          height,
          backgroundColor: era.color,
          opacity: ERA_BAND_OPACITY,
          borderRadius: 2,
        }}
      />
      {/* Label (separate element so it's not affected by background opacity) */}
      <AnimatePresence>
        {showLabel && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute flex items-end justify-center text-center px-1 pb-1 truncate pointer-events-none"
            style={{
              left: x1,
              top,
              width,
              height,
              fontFamily: 'var(--font-heading)',
              fontSize: width > 120 ? 13 : 10,
              fontWeight: 600,
              color: era.color,
            }}
          >
            {era.label}
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );
}
