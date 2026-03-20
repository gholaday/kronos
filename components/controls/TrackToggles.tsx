'use client';

import type { Track } from '@/lib/types';

interface TrackTogglesProps {
  visibleTracks: Track[];
  onToggle: (track: Track) => void;
}

const LABELS: Record<Track, string> = { ot: 'OT', nt: 'NT', church: 'Church Fathers', world: 'World' };

export default function TrackToggles({ visibleTracks, onToggle }: TrackTogglesProps) {
  return (
    <div className="flex items-center gap-2" style={{ fontFamily: 'var(--font-ui)' }}>
      {(['ot', 'nt', 'church', 'world'] as const).map((track) => {
        const active = visibleTracks.includes(track);
        return (
          <button
            key={track}
            onClick={() => onToggle(track)}
            className="px-3 py-1 rounded-full text-sm font-medium transition-colors"
            style={{
              backgroundColor: active ? 'var(--color-text)' : 'transparent',
              color: active ? 'var(--color-bg)' : 'var(--color-text-secondary)',
              border: `1px solid ${active ? 'var(--color-text)' : 'var(--color-border)'}`,
            }}
          >
            {LABELS[track]}
          </button>
        );
      })}
    </div>
  );
}
