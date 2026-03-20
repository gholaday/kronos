'use client';

import { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const GlobeRenderer = dynamic(() => import('./GlobeRenderer'), {
  ssr: false,
  loading: () => <GlobePlaceholder />,
});

function GlobePlaceholder() {
  return (
    <div
      className="flex items-center justify-center w-full h-full"
      style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}
    >
      <div
        className="rounded-full flex items-center justify-center"
        style={{
          width: 120,
          height: 120,
          backgroundColor: 'var(--color-bg)',
          border: '1px solid var(--color-border)',
        }}
      >
        <span className="text-xs">Loading globe...</span>
      </div>
    </div>
  );
}

interface GlobeProps {
  lat: number;
  lng: number;
  ringColor: string;
  isApproximate: boolean;
}

export default function Globe({ lat, lng, ringColor, isApproximate }: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        const { width, height } = entry.contentRect;
        setSize({ width: Math.floor(width), height: Math.floor(height) });
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden">
      {size.width > 0 && size.height > 0 && (
        <GlobeRenderer
          lat={lat}
          lng={lng}
          width={size.width}
          height={size.height}
          ringColor={ringColor}
          isApproximate={isApproximate}
        />
      )}
    </div>
  );
}
