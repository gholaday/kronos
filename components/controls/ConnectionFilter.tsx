'use client';

import type { ConnectionType } from '@/lib/types';
import { CONNECTION_STYLES } from '@/lib/constants';

interface ConnectionFilterProps {
  visibleConnections: ConnectionType[];
  onToggle: (type: ConnectionType) => void;
}

const ALL_TYPES: ConnectionType[] = [
  'prophecy-fulfillment',
  'type-antitype',
  'quotation',
  'thematic',
  'covenant',
  'doctrinal-development',
  'historical-echo',
];

export default function ConnectionFilter({ visibleConnections, onToggle }: ConnectionFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-1" style={{ fontFamily: 'var(--font-ui)' }}>
      {ALL_TYPES.map((type) => {
        const style = CONNECTION_STYLES[type];
        const active = visibleConnections.includes(type);
        return (
          <button
            key={type}
            onClick={() => onToggle(type)}
            className="flex cursor-pointer items-center gap-1.5 px-2 py-0.5 rounded-full transition-colors"
            style={{
              fontSize: 11,
              backgroundColor: active ? `${style.color}20` : 'transparent',
              color: active ? 'var(--color-text)' : 'var(--color-text-secondary)',
              border: `1px solid ${active ? style.color : 'var(--color-border)'}`,
            }}
          >
            <span
              className="shrink-0"
              style={{
                width: 12,
                height: 2,
                backgroundColor: style.color,
                borderRadius: 1,
                opacity: active ? 1 : 0.4,
              }}
            />
            {style.label}
          </button>
        );
      })}
    </div>
  );
}
