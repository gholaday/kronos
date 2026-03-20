'use client';

import { useRef, useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { BiblicalEvent, Era, Track } from '@/lib/types';
import { ZOOM_MIN, ZOOM_MAX, ZOOM_STEP, TRACK_HEIGHT, AXIS_HEIGHT } from '@/lib/constants';
import TimelineAxis from './TimelineAxis';
import EraBand from './EraBand';
import TrackRow from './TrackRow';

interface TimelineProps {
  events: BiblicalEvent[];
  eras: Era[];
  visibleTracks: Track[];
  selectedEventId: string | null;
  hoveredEventId: string | null;
  zoom: number;
  panOffset: number;
  onZoomAtCursor: (newZoom: number, cursorViewportX: number) => void;
  onPanOffsetChange: (panOffset: number) => void;
  onViewportWidthChange: (width: number) => void;
  onSelectEvent: (id: string) => void;
  onHoverEvent: (id: string | null) => void;
}

export default function Timeline({
  events,
  eras,
  visibleTracks,
  selectedEventId,
  hoveredEventId,
  zoom,
  panOffset,
  onZoomAtCursor,
  onPanOffsetChange,
  onViewportWidthChange,
  onSelectEvent,
  onHoverEvent,
}: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(1200);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; panOffset: number } | null>(null);

  // Measure viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        setViewportWidth(w);
        onViewportWidthChange(w);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  // onViewportWidthChange is stable (setPanOffset from parent)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Zoom on wheel
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
      const newZoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, zoom + delta));

      if (newZoom !== zoom) {
        const rect = containerRef.current?.getBoundingClientRect();
        const cursorX = rect ? e.clientX - rect.left : viewportWidth / 2;
        onZoomAtCursor(newZoom, cursorX);
      }
    },
    [zoom, viewportWidth, onZoomAtCursor]
  );

  // Pan on drag
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.button !== 0) return;
      setIsDragging(true);
      dragStartRef.current = { x: e.clientX, panOffset };
    },
    [panOffset]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !dragStartRef.current) return;
      const dx = e.clientX - dragStartRef.current.x;
      onPanOffsetChange(dragStartRef.current.panOffset + dx);
    },
    [isDragging, onPanOffsetChange]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    dragStartRef.current = null;
  }, []);

  // Filter events and eras by visible tracks
  const showOT = visibleTracks.includes('ot');
  const showNT = visibleTracks.includes('nt');
  const showChurch = visibleTracks.includes('church');
  const showBiblical = showOT || showNT || showChurch;
  const showWorld = visibleTracks.includes('world');

  // Biblical track: OT + NT + Church events on one row (they don't overlap in time)
  const biblicalEvents = events.filter(
    (e) =>
      (e.track === 'ot' && showOT) ||
      (e.track === 'nt' && showNT) ||
      (e.track === 'church' && showChurch)
  );
  const worldEvents = events.filter((e) => e.track === 'world');

  // Era bands for the biblical track include OT, intertestamental, NT, and church eras
  const biblicalEras = eras.filter(
    (e) =>
      (e.track === 'ot' && showOT) ||
      (e.track === 'inter' && (showOT || showNT)) ||
      (e.track === 'nt' && showNT) ||
      (e.track === 'church' && showChurch)
  );
  const worldEras = eras.filter((e) => e.track === 'world');

  // Calculate vertical layout: Biblical track → Axis → World track
  let currentY = 0;
  const biblicalTop = currentY;
  if (showBiblical) currentY += TRACK_HEIGHT;
  const axisTop = currentY;
  currentY += AXIS_HEIGHT;
  const worldTop = currentY;
  if (showWorld) currentY += TRACK_HEIGHT;
  const totalHeight = currentY;

  return (
    <motion.div
      ref={containerRef}
      className="relative overflow-hidden select-none"
      animate={{ height: totalHeight }}
      transition={{ type: 'spring', stiffness: 400, damping: 35, mass: 0.8 }}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Era bands - Biblical (OT + NT on same row) */}
      <AnimatePresence>
        {showBiblical &&
          biblicalEras.map((era) => (
            <motion.div
              key={`biblical-era-${era.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <EraBand
                era={era}
                zoom={zoom}
                panOffset={panOffset}
                viewportWidth={viewportWidth}
                height={TRACK_HEIGHT}
                top={biblicalTop}
                labelAlign={era.labelAlign}
              />
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Era bands - World */}
      <AnimatePresence>
        {showWorld &&
          worldEras.map((era) => (
            <motion.div
              key={`world-era-${era.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <EraBand
                era={era}
                zoom={zoom}
                panOffset={panOffset}
                viewportWidth={viewportWidth}
                height={TRACK_HEIGHT}
                top={worldTop}
                labelAlign={era.labelAlign}
              />
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Biblical Track (OT + NT combined) */}
      <AnimatePresence>
        {showBiblical && (
          <motion.div
            key="biblical-track"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0"
            style={{ top: biblicalTop }}
          >
            <TrackRow
              label="Biblical"
              events={biblicalEvents}
              eras={eras}
              zoom={zoom}
              panOffset={panOffset}
              selectedEventId={selectedEventId}
              hoveredEventId={hoveredEventId}
              onSelectEvent={onSelectEvent}
              onHoverEvent={onHoverEvent}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Axis */}
      <div className="absolute left-0 right-0" style={{ top: axisTop }}>
        <TimelineAxis zoom={zoom} panOffset={panOffset} viewportWidth={viewportWidth} />
      </div>

      {/* World History Track */}
      <AnimatePresence>
        {showWorld && (
          <motion.div
            key="world-track"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0"
            style={{ top: worldTop }}
          >
            <TrackRow
              label="World History"
              events={worldEvents}
              eras={eras}
              zoom={zoom}
              panOffset={panOffset}
              selectedEventId={selectedEventId}
              hoveredEventId={hoveredEventId}
              onSelectEvent={onSelectEvent}
              onHoverEvent={onHoverEvent}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Track divider line */}
      <AnimatePresence>
        {showBiblical && (
          <motion.div
            key="biblical-divider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 h-px bg-[var(--color-border)]"
            style={{ top: biblicalTop + TRACK_HEIGHT }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
