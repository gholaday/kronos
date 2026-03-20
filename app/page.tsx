'use client';

import { useState, useCallback, useMemo, useRef } from 'react';
import { AnimatePresence, animate } from 'framer-motion';
import type { AnimationPlaybackControls } from 'framer-motion';
import type { Track, ConnectionType, Era } from '@/lib/types';
import { ZOOM_MIN, ZOOM_MAX } from '@/lib/constants';
import { panOffsetToCenter, zoomAtPoint, clampPanOffset } from '@/lib/timeline-math';
import Timeline from '@/components/timeline/Timeline';
import EventCard from '@/components/timeline/EventCard';
import Header from '@/components/controls/Header';
import ZoomControls from '@/components/controls/ZoomControls';
import ConnectionsView from '@/components/connections/ConnectionsView';
import { eventsOT } from '@/data/events-ot';
import { eventsNT } from '@/data/events-nt';
import { eventsChurch } from '@/data/events-church';
import { eventsWorld } from '@/data/events-world';
import { eras } from '@/data/eras';
import { crossReferences } from '@/data/cross-references';

const allEvents = [...eventsOT, ...eventsNT, ...eventsChurch, ...eventsWorld];

export default function Home() {
  // View mode
  const [activeView, setActiveView] = useState<'timeline' | 'connections'>('timeline');

  // Track visibility
  const [visibleTracks, setVisibleTracks] = useState<Track[]>(['ot', 'nt', 'church', 'world']);

  // Event selection
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);

  // Timeline viewport (lifted from Timeline)
  const [zoom, setZoom] = useState(0);
  const [panOffset, setPanOffset] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [initialized, setInitialized] = useState(false);

  // Connection filter
  const [visibleConnections, setVisibleConnections] = useState<ConnectionType[]>([
    'prophecy-fulfillment',
    'type-antitype',
    'quotation',
    'thematic',
    'covenant',
    'doctrinal-development',
    'historical-echo',
  ]);

  // Clamped pan offset setter
  const handlePanOffsetChange = useCallback(
    (offset: number) => {
      setPanOffset(clampPanOffset(offset, zoom, viewportWidth));
    },
    [zoom, viewportWidth]
  );

  // Initial centering: set panOffset when viewport width first becomes known
  const handleViewportWidthChange = useCallback(
    (width: number) => {
      setViewportWidth(width);
      if (width > 0 && !initialized) {
        setPanOffset(panOffsetToCenter(-500, 0, width));
        setInitialized(true);
      }
    },
    [initialized]
  );

  const selectedEvent = useMemo(
    () => (selectedEventId ? allEvents.find((e) => e.id === selectedEventId) ?? null : null),
    [selectedEventId]
  );

  const toggleTrack = (track: Track) => {
    setVisibleTracks((prev) =>
      prev.includes(track) ? prev.filter((t) => t !== track) : [...prev, track]
    );
  };

  const handleZoomAtCursor = useCallback(
    (newZoom: number, cursorX: number) => {
      const newOffset = zoomAtPoint(zoom, newZoom, panOffset, cursorX);
      setPanOffset(clampPanOffset(newOffset, newZoom, viewportWidth));
      setZoom(newZoom);
    },
    [zoom, panOffset, viewportWidth]
  );

  const handleZoomDelta = useCallback(
    (delta: number) => {
      const newZoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, zoom + delta));
      if (newZoom !== zoom) {
        handleZoomAtCursor(newZoom, viewportWidth / 2);
      }
    },
    [zoom, viewportWidth, handleZoomAtCursor]
  );

  const handleJumpToEra = useCallback(
    (era: Era) => {
      const midYear = (era.start + era.end) / 2;
      const offset = panOffsetToCenter(midYear, zoom, viewportWidth);
      setPanOffset(clampPanOffset(offset, zoom, viewportWidth));
    },
    [zoom, viewportWidth]
  );

  // Smooth pan to center on an event when navigating via prev/next arrows
  const panAnimationRef = useRef<AnimationPlaybackControls | null>(null);

  const handleNavigateToEvent = useCallback(
    (eventId: string) => {
      setSelectedEventId(eventId);
      const event = allEvents.find((e) => e.id === eventId);
      if (!event || viewportWidth <= 0) return;

      const targetOffset = clampPanOffset(
        panOffsetToCenter(event.year, zoom, viewportWidth),
        zoom,
        viewportWidth
      );

      // Cancel any in-flight pan animation
      panAnimationRef.current?.stop();

      panAnimationRef.current = animate(panOffset, targetOffset, {
        type: 'spring',
        stiffness: 200,
        damping: 30,
        onUpdate: (v) => setPanOffset(v),
        onComplete: () => { panAnimationRef.current = null; },
      });
    },
    [zoom, viewportWidth, panOffset]
  );

  const toggleConnection = (type: ConnectionType) => {
    setVisibleConnections((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="flex flex-col flex-1 h-screen overflow-hidden">
      <Header
        visibleTracks={visibleTracks}
        onToggleTrack={toggleTrack}
        eras={eras}
        onJumpToEra={handleJumpToEra}
        visibleConnections={visibleConnections}
        onToggleConnection={toggleConnection}
        activeView={activeView}
        onViewChange={setActiveView}
      />

      {activeView === 'timeline' ? (
        <>
          <main className="flex-1 relative">
            <Timeline
              events={allEvents}
              eras={eras}
              visibleTracks={visibleTracks}
              selectedEventId={selectedEventId}
              hoveredEventId={hoveredEventId}
              zoom={zoom}
              panOffset={panOffset}
              onZoomAtCursor={handleZoomAtCursor}
              onPanOffsetChange={handlePanOffsetChange}
              onViewportWidthChange={handleViewportWidthChange}
              onSelectEvent={setSelectedEventId}
              onHoverEvent={setHoveredEventId}
            />
            <ZoomControls zoom={zoom} onZoomDelta={handleZoomDelta} />
          </main>

          {/* Event detail card */}
          <AnimatePresence mode="wait">
            {selectedEvent && (
              <EventCard
                key={selectedEvent.id}
                event={selectedEvent}
                crossRefs={crossReferences.filter(
                  (r) => r.sourceEventId === selectedEvent.id || r.targetEventId === selectedEvent.id
                )}
                allEvents={allEvents}
                onClose={() => setSelectedEventId(null)}
                onNavigate={handleNavigateToEvent}
              />
            )}
          </AnimatePresence>
        </>
      ) : (
        <ConnectionsView
          events={allEvents}
          eras={eras}
          crossRefs={crossReferences}
          visibleTracks={visibleTracks}
          visibleConnections={visibleConnections}
          onToggleConnection={toggleConnection}
        />
      )}
    </div>
  );
}
