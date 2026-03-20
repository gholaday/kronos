import type { ConnectionType } from '@/lib/types';

interface ConnectionIconProps {
  type: ConnectionType;
  color: string;
  size?: number;
}

export default function ConnectionIcon({ type, color, size = 12 }: ConnectionIconProps) {
  const props = { width: size, height: size, viewBox: '0 0 12 12', fill: 'none' } as const;
  const s = { stroke: color, strokeWidth: 1.3, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (type) {
    case 'prophecy-fulfillment':
      return (
        <svg {...props}>
          <path d="M2 6h7M7 3.5 9.5 6 7 8.5" {...s} />
        </svg>
      );
    case 'type-antitype':
      return (
        <svg {...props}>
          <path d="M2 3v6M10 3v6M4 4.5 6 6 4 7.5M8 4.5 6 6 8 7.5" {...s} />
        </svg>
      );
    case 'quotation':
      return (
        <svg {...props}>
          <path d="M3 4C1.5 4 1.5 6 3 6 3 8 1 8 1 8M8 4C6.5 4 6.5 6 8 6 8 8 6 8 6 8" {...s} />
        </svg>
      );
    case 'thematic':
      return (
        <svg {...props}>
          <circle cx="4.5" cy="6" r="2.8" {...s} fill="none" />
          <circle cx="7.5" cy="6" r="2.8" {...s} fill="none" />
        </svg>
      );
    case 'covenant':
      return (
        <svg {...props}>
          <path d="M1 9 4 3h4l3 6" {...s} />
          <path d="M4 3 6 5.5 8 3" {...s} />
        </svg>
      );
    case 'doctrinal-development':
      return (
        <svg {...props}>
          <path d="M6 10V4M6 4 3 1.5M6 4 9 1.5" {...s} />
          <circle cx="3" cy="1.5" r="0.8" fill={color} stroke="none" />
          <circle cx="9" cy="1.5" r="0.8" fill={color} stroke="none" />
        </svg>
      );
    case 'historical-echo':
      return (
        <svg {...props}>
          <path d="M3 3c2 1 4 1 6 0M2.5 6c2.5 1.2 4.5 1.2 7 0M3 9c2 1 4 1 6 0" {...s} />
        </svg>
      );
  }
}
