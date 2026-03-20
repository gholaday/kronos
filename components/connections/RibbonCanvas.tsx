'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { CrossReference, ConnectionType } from '@/lib/types';

export const RIBBON_COLORS: Record<ConnectionType, string> = {
  'prophecy-fulfillment': '#B8860B',
  'type-antitype': '#8B2252',
  quotation: '#5B7744',
  thematic: '#4A6B8A',
  covenant: '#6A4C93',
  'doctrinal-development': '#A0522D',
  'historical-echo': '#5F8A8B',
};

export interface RibbonDatum {
  crossRef: CrossReference;
  sourceY: number;
  targetY: number;
  isCrossColumn: boolean;
}

interface RibbonCanvasProps {
  ribbons: RibbonDatum[];
  containerWidth: number;
  contentHeight: number;
  highlightedRibbonIds: Set<string>;
  isAnythingHovered: boolean;
  onHoverRibbon: (id: string, midX: number, midY: number) => void;
  onUnhoverRibbon: () => void;
}

function cubicBezierAt(
  t: number,
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number {
  const mt = 1 - t;
  return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3;
}

export default function RibbonCanvas({
  ribbons,
  containerWidth,
  contentHeight,
  highlightedRibbonIds,
  isAnythingHovered,
  onHoverRibbon,
  onUnhoverRibbon,
}: RibbonCanvasProps) {
  const leftEdge = containerWidth * 0.3;
  const rightEdge = containerWidth * 0.7;

  const sortedRibbons = useMemo(
    () => [...ribbons].sort((a, b) => a.sourceY - b.sourceY),
    [ribbons],
  );

  if (containerWidth === 0 || contentHeight === 0) {
    return <svg className="absolute inset-0 w-full pointer-events-none" />;
  }

  return (
    <svg
      className="absolute inset-0 w-full pointer-events-none"
      style={{ height: contentHeight }}
    >
      <defs>
        {sortedRibbons.map((ribbon) => {
          const color = RIBBON_COLORS[ribbon.crossRef.type];
          const id = ribbon.crossRef.id;

          if (ribbon.isCrossColumn) {
            return (
              <linearGradient
                key={`grad-${id}`}
                id={`grad-${id}`}
                gradientUnits="userSpaceOnUse"
                x1={leftEdge}
                y1={ribbon.sourceY}
                x2={rightEdge}
                y2={ribbon.targetY}
              >
                <stop offset="0%" stopColor={color} stopOpacity="1" />
                <stop offset="100%" stopColor={color} stopOpacity="0.5" />
              </linearGradient>
            );
          }

          return (
            <linearGradient
              key={`grad-${id}`}
              id={`grad-${id}`}
              gradientUnits="userSpaceOnUse"
              x1={rightEdge}
              y1={ribbon.sourceY}
              x2={rightEdge}
              y2={ribbon.targetY}
            >
              <stop offset="0%" stopColor={color} stopOpacity="1" />
              <stop offset="100%" stopColor={color} stopOpacity="0.5" />
            </linearGradient>
          );
        })}
      </defs>

      {sortedRibbons.map((ribbon, index) => {
        const { crossRef, sourceY, targetY, isCrossColumn } = ribbon;
        const isHighlighted = highlightedRibbonIds.has(crossRef.id);

        let pathD: string;
        let midX: number;
        let midY: number;

        if (isCrossColumn) {
          const cx = (leftEdge + rightEdge) / 2;
          pathD = `M ${leftEdge} ${sourceY} C ${cx} ${sourceY}, ${cx} ${targetY}, ${rightEdge} ${targetY}`;
          midX = cubicBezierAt(0.5, leftEdge, cx, cx, rightEdge);
          midY = cubicBezierAt(0.5, sourceY, sourceY, targetY, targetY);
        } else {
          // Same-column: arc into center channel
          const vertDist = Math.abs(targetY - sourceY);
          const arcDepth = Math.min(containerWidth * 0.15, vertDist * 0.4);
          const arcX = rightEdge - arcDepth;
          pathD = `M ${rightEdge} ${sourceY} C ${arcX} ${sourceY}, ${arcX} ${targetY}, ${rightEdge} ${targetY}`;
          midX = cubicBezierAt(0.5, rightEdge, arcX, arcX, rightEdge);
          midY = cubicBezierAt(0.5, sourceY, sourceY, targetY, targetY);
        }

        let animateOpacity: number;
        let animateStrokeWidth: number;

        if (isAnythingHovered) {
          animateOpacity = isHighlighted ? 1 : 0.06;
          animateStrokeWidth = isHighlighted ? 5 : 2;
        } else {
          animateOpacity = 0.3;
          animateStrokeWidth = 2.5;
        }

        return (
          <motion.path
            key={crossRef.id}
            d={pathD}
            fill="none"
            stroke={`url(#grad-${crossRef.id})`}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: animateOpacity,
              strokeWidth: animateStrokeWidth,
            }}
            transition={{
              pathLength: {
                duration: 1.0,
                ease: [0.4, 0, 0.2, 1],
                delay: index * 0.04,
              },
              opacity: { duration: 0.25 },
              strokeWidth: { duration: 0.25 },
            }}
            style={{ pointerEvents: 'auto', cursor: 'pointer' }}
            onMouseEnter={() => onHoverRibbon(crossRef.id, midX, midY)}
            onMouseLeave={onUnhoverRibbon}
          />
        );
      })}
    </svg>
  );
}
