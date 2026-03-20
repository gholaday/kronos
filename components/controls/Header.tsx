'use client';

import type { Track, ConnectionType, Era } from '@/lib/types';
import { ZOOM_MIN, ZOOM_MAX, ZOOM_STEP } from '@/lib/constants';
import TrackToggles from './TrackToggles';
import EraJumper from './EraJumper';
import ConnectionFilter from './ConnectionFilter';

type ViewMode = 'timeline' | 'connections';

interface HeaderProps {
  visibleTracks: Track[];
  onToggleTrack: (track: Track) => void;
  eras: Era[];
  onJumpToEra: (era: Era) => void;
  visibleConnections: ConnectionType[];
  onToggleConnection: (type: ConnectionType) => void;
  activeView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  zoom: number;
  onZoomDelta: (delta: number) => void;
}

export default function Header({
  visibleTracks,
  onToggleTrack,
  eras,
  onJumpToEra,
  visibleConnections,
  onToggleConnection,
  activeView,
  onViewChange,
  zoom,
  onZoomDelta,
}: HeaderProps) {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)] shrink-0">
      <div className="h-14 flex items-center justify-between px-6">
        <h1
          className="text-xl font-bold tracking-tight shrink-0"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Bible Timeline
        </h1>

        <div className="flex items-center gap-3">
          {/* View toggle */}
          <div
            className="flex rounded-md overflow-hidden"
            style={{ border: '1px solid var(--color-border)' }}
          >
            <button
              onClick={() => onViewChange('timeline')}
              className="px-3 py-1 transition-colors flex items-center gap-1.5"
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 12,
                fontWeight: 500,
                backgroundColor:
                  activeView === 'timeline' ? 'var(--color-bg)' : 'transparent',
                color:
                  activeView === 'timeline'
                    ? 'var(--color-text)'
                    : 'var(--color-text-secondary)',
              }}
            >
              {/* Horizontal axis with event dots */}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="3.5" cy="7" r="1.3" fill="currentColor" />
                <circle cx="7" cy="7" r="1.3" fill="currentColor" />
                <circle cx="10.5" cy="7" r="1.3" fill="currentColor" />
                <line x1="3.5" y1="4" x2="3.5" y2="5.7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <line x1="7" y1="8.3" x2="7" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <line x1="10.5" y1="4" x2="10.5" y2="5.7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
              Timeline
            </button>
            <button
              onClick={() => onViewChange('connections')}
              className="px-3 py-1 transition-colors flex items-center gap-1.5"
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 12,
                fontWeight: 500,
                backgroundColor:
                  activeView === 'connections' ? 'var(--color-bg)' : 'transparent',
                color:
                  activeView === 'connections'
                    ? 'var(--color-text)'
                    : 'var(--color-text-secondary)',
                borderLeft: '1px solid var(--color-border)',
              }}
            >
              {/* Two dots with arc between them */}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="3" cy="10" r="1.5" fill="currentColor" />
                <circle cx="11" cy="10" r="1.5" fill="currentColor" />
                <path d="M3 8.5C3 4.5 11 4.5 11 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              </svg>
              Connections
            </button>
          </div>

          <div className="w-px h-5 bg-[var(--color-border)]" />

          <TrackToggles visibleTracks={visibleTracks} onToggle={onToggleTrack} />

          {activeView === 'timeline' && (
            <>
              <div className="w-px h-5 bg-[var(--color-border)]" />
              <EraJumper eras={eras} visibleTracks={visibleTracks} onJumpToEra={onJumpToEra} />

              <div className="w-px h-5 bg-[var(--color-border)]" />
              <div className="flex items-center gap-1">
                <button
                  onClick={() => onZoomDelta(-ZOOM_STEP)}
                  disabled={zoom <= ZOOM_MIN}
                  className="flex items-center justify-center rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--color-bg)]"
                  style={{
                    width: 28,
                    height: 28,
                    fontFamily: 'var(--font-ui)',
                    fontSize: 16,
                    color: 'var(--color-text)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => onZoomDelta(ZOOM_STEP)}
                  disabled={zoom >= ZOOM_MAX}
                  className="flex items-center justify-center rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--color-bg)]"
                  style={{
                    width: 28,
                    height: 28,
                    fontFamily: 'var(--font-ui)',
                    fontSize: 16,
                    color: 'var(--color-text)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  +
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
