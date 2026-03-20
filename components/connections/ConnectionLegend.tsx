'use client';

import type { ConnectionType } from '@/lib/types';
import { RIBBON_COLORS } from './RibbonCanvas';
import ConnectionIcon from './ConnectionIcons';

const LABELS: Record<ConnectionType, string> = {
  'prophecy-fulfillment': 'Prophecy',
  'type-antitype': 'Typology',
  quotation: 'Quotation',
  thematic: 'Thematic',
  covenant: 'Covenant',
  'doctrinal-development': 'Doctrinal',
  'historical-echo': 'Historical',
};

const ALL_TYPES: ConnectionType[] = [
  'prophecy-fulfillment',
  'type-antitype',
  'quotation',
  'thematic',
  'covenant',
  'doctrinal-development',
  'historical-echo',
];

interface ConnectionLegendProps {
  visibleConnections: ConnectionType[];
  onToggle: (type: ConnectionType) => void;
}

export default function ConnectionLegend({
  visibleConnections,
  onToggle,
}: ConnectionLegendProps) {
  return (
    <div className="flex flex-wrap gap-1.5" style={{ fontFamily: 'var(--font-ui)' }}>
      {ALL_TYPES.map((type) => {
        const active = visibleConnections.includes(type);
        const color = RIBBON_COLORS[type];
        return (
          <button
            key={type}
            onClick={() => onToggle(type)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{
              fontSize: 11,
              fontWeight: 500,
              backgroundColor: active ? `${color}18` : 'transparent',
              color: active ? 'var(--color-text)' : 'var(--color-text-secondary)',
              border: `1px solid ${active ? `${color}50` : 'var(--color-border)'}`,
              opacity: active ? 1 : 0.6,
              transition: 'all 0.15s ease',
            }}
          >
            <ConnectionIcon type={type} color={active ? color : 'var(--color-text-secondary)'} />
            {LABELS[type]}
          </button>
        );
      })}
    </div>
  );
}
