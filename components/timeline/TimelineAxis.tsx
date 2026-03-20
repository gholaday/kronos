'use client';

import { yearToX, xToYear, formatYear, getTickInterval } from '@/lib/timeline-math';
import { CHURCH_YEAR_START } from '@/lib/constants';

interface TimelineAxisProps {
  zoom: number;
  panOffset: number;
  viewportWidth: number;
}

export default function TimelineAxis({ zoom, panOffset, viewportWidth }: TimelineAxisProps) {
  // Calculate visible year range using the (possibly non-linear) conversion
  const startYear = xToYear(0, zoom, panOffset);
  const endYear = xToYear(viewportWidth, zoom, panOffset);

  const ticks: number[] = [];

  // Generate BC ticks (years <= 0)
  if (startYear < 0) {
    const bcInterval = getTickInterval(zoom, -1);
    const bcEnd = Math.min(endYear, 0);
    const firstBcTick = Math.ceil((startYear - bcInterval) / bcInterval) * bcInterval;
    const lastBcTick = Math.floor((bcEnd + bcInterval) / bcInterval) * bcInterval;
    for (let y = firstBcTick; y <= lastBcTick; y += bcInterval) {
      ticks.push(y);
    }
  }

  // Generate NT AD ticks (years 1-100)
  if (endYear > 0 && startYear < CHURCH_YEAR_START) {
    const ntInterval = getTickInterval(zoom, 50);
    const ntStart = Math.max(startYear, 1);
    const ntEnd = Math.min(endYear, CHURCH_YEAR_START);
    const firstNtTick = Math.ceil((ntStart - ntInterval) / ntInterval) * ntInterval;
    const lastNtTick = Math.floor(ntEnd / ntInterval) * ntInterval;
    for (let y = Math.max(firstNtTick, ntInterval); y <= lastNtTick; y += ntInterval) {
      if (!ticks.includes(y)) ticks.push(y);
    }
  }

  // Generate Church AD ticks (years > 100)
  if (endYear > CHURCH_YEAR_START) {
    const churchInterval = getTickInterval(zoom, 500);
    const churchStart = Math.max(startYear, CHURCH_YEAR_START + 1);
    const firstChurchTick = Math.ceil((churchStart - churchInterval) / churchInterval) * churchInterval;
    const lastChurchTick = Math.floor((endYear + churchInterval) / churchInterval) * churchInterval;
    // Round first church tick up to the nearest clean multiple that isn't jarringly close to 100
    const minChurchTick = Math.max(200, churchInterval);
    for (let y = Math.max(firstChurchTick, minChurchTick); y <= lastChurchTick; y += churchInterval) {
      if (!ticks.includes(y)) ticks.push(y);
    }
  }

  return (
    <div className="relative h-10 border-y border-[var(--color-border)] bg-[var(--color-surface)] select-none overflow-hidden">
      {/* Axis line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-[var(--color-border)]" />

      {ticks.map((year) => {
        const x = yearToX(year, zoom, panOffset);
        if (x < -50 || x > viewportWidth + 50) return null;

        const interval = getTickInterval(zoom, year);
        // Label every tick in NT (0-100) and Church (>100) regions; use 5x multiple for BC
        const isMajor = year > 0 || year % (interval * 5) === 0 || interval >= 500;

        return (
          <div
            key={year}
            className="absolute top-0 h-full flex flex-col items-center justify-end"
            style={{ left: x, transform: 'translateX(-50%)' }}
          >
            <div
              className={`w-px ${isMajor ? 'h-4 bg-[var(--color-text)]' : 'h-2.5 bg-[var(--color-border)]'}`}
              style={{ marginBottom: isMajor ? 0 : 2 }}
            />
            {isMajor && (
              <span
                className="text-[11px] leading-none whitespace-nowrap pb-1"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
              >
                {formatYear(year)}
              </span>
            )}
          </div>
        );
      })}

      {/* "AD/BC" divider marker at year 0 */}
      {(() => {
        const x0 = yearToX(0, zoom, panOffset);
        if (x0 < -20 || x0 > viewportWidth + 20) return null;
        return (
          <div
            className="absolute top-0 h-full w-px bg-[var(--color-text)] opacity-30"
            style={{ left: x0 }}
          />
        );
      })()}
    </div>
  );
}
