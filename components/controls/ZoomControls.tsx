'use client';

import { ZOOM_MIN, ZOOM_MAX, ZOOM_STEP } from '@/lib/constants';

interface ZoomControlsProps {
  zoom: number;
  onZoomDelta: (delta: number) => void;
}

export default function ZoomControls({ zoom, onZoomDelta }: ZoomControlsProps) {
  return (
    <div
      className="absolute bottom-4 right-4 flex flex-col gap-1 z-40"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => onZoomDelta(ZOOM_STEP)}
        disabled={zoom >= ZOOM_MAX}
        className="flex items-center justify-center rounded-lg shadow-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--color-bg)]"
        style={{
          width: 36,
          height: 36,
          fontFamily: 'var(--font-ui)',
          fontSize: 18,
          backgroundColor: 'var(--color-surface)',
          color: 'var(--color-text)',
          border: '1px solid var(--color-border)',
        }}
      >
        +
      </button>
      <button
        onClick={() => onZoomDelta(-ZOOM_STEP)}
        disabled={zoom <= ZOOM_MIN}
        className="flex items-center justify-center rounded-lg shadow-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--color-bg)]"
        style={{
          width: 36,
          height: 36,
          fontFamily: 'var(--font-ui)',
          fontSize: 18,
          backgroundColor: 'var(--color-surface)',
          color: 'var(--color-text)',
          border: '1px solid var(--color-border)',
        }}
      >
        -
      </button>
    </div>
  );
}
