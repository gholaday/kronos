'use client';

import { motion } from 'framer-motion';
import type { BiblicalEvent, CrossReference, Era } from '@/lib/types';
import Globe from '@/components/globe/Globe';
import EventCard from './EventCard';

interface EventDetailPanelProps {
  event: BiblicalEvent;
  crossRefs: CrossReference[];
  allEvents: BiblicalEvent[];
  eras: Era[];
  onClose: () => void;
  onNavigate: (eventId: string) => void;
}

function getEraColor(event: BiblicalEvent, eras: Era[]): string {
  const era = eras.find((e) => e.id === event.era);
  return era?.color ?? '#9E9685';
}

export default function EventDetailPanel({
  event,
  crossRefs,
  allEvents,
  eras,
  onClose,
  onNavigate,
}: EventDetailPanelProps) {
  return (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)] flex"
      style={{ height: '50vh' }}
    >
      {/* Globe */}
      <div
        className="shrink-0 border-r border-[var(--color-border)]"
        style={{ width: '40%' }}
      >
        <Globe
          lat={event.location.lat}
          lng={event.location.lng}
          ringColor={getEraColor(event, eras)}
          isApproximate={event.approximate}
        />
      </div>

      {/* Event details */}
      <div className="flex-1 min-w-0 overflow-y-auto">
        <EventCard
          event={event}
          crossRefs={crossRefs}
          allEvents={allEvents}
          onClose={onClose}
          onNavigate={onNavigate}
        />
      </div>
    </motion.div>
  );
}
