'use client';

import type { BiblicalEvent } from '@/lib/types';
import { formatYear } from '@/lib/timeline-math';

interface EventNodeProps {
  event: BiblicalEvent;
  isConnected: boolean;
  isHighlighted: boolean;
  isAnythingHovered: boolean;
  eraColor: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export default function EventNode({
  event,
  isConnected,
  isHighlighted,
  isAnythingHovered,
  eraColor,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: EventNodeProps) {
  let opacity: number;
  if (isAnythingHovered) {
    opacity = isHighlighted ? 1 : isConnected ? 0.15 : 0.08;
  } else {
    opacity = isConnected ? 1 : 0.4;
  }

  return (
    <div
      data-event-id={event.id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className="flex items-center gap-2.5 w-full"
      style={{
        padding: isConnected ? '10px 16px' : '6px 16px',
        opacity,
        backgroundColor: isHighlighted ? `${eraColor}12` : 'transparent',
        cursor: 'pointer',
        transition: 'opacity 0.2s ease, background-color 0.2s ease',
      }}
    >
      <span
        className="shrink-0 rounded-full"
        style={{
          width: isConnected ? 8 : 5,
          height: isConnected ? 8 : 5,
          backgroundColor: eraColor,
          boxShadow: isHighlighted ? `0 0 12px ${eraColor}80` : 'none',
          transition: 'box-shadow 0.2s ease',
        }}
      />
      <span
        className="min-w-0 truncate"
        style={{
          fontFamily: isConnected ? 'var(--font-body)' : 'var(--font-ui)',
          fontSize: isConnected ? 13 : 11,
          color: 'var(--color-text)',
          fontWeight: isHighlighted ? 600 : 400,
        }}
      >
        {event.title}
      </span>
      {isConnected && (
        <span
          className="shrink-0 ml-auto"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--color-text-secondary)',
          }}
        >
          {formatYear(event.year, event.approximate)}
        </span>
      )}
    </div>
  );
}
