import type { BiblicalEvent } from './types';
import { yearToX } from './timeline-math';

export interface EventCluster {
  id: string;
  events: BiblicalEvent[];
  centerYear: number;
}

const MIN_PX_BETWEEN = 40; // minimum pixels between dots before clustering

export function clusterEvents(
  events: BiblicalEvent[],
  zoom: number,
  panOffset: number,
): EventCluster[] {
  const sorted = [...events].sort((a, b) => a.year - b.year);
  const clusters: EventCluster[] = [];

  for (const event of sorted) {
    const x = yearToX(event.year, zoom, panOffset);

    // Try to add to the last cluster
    const last = clusters[clusters.length - 1];
    if (last) {
      const lastX = yearToX(last.centerYear, zoom, panOffset);
      if (Math.abs(x - lastX) < MIN_PX_BETWEEN) {
        last.events.push(event);
        // Recalculate center as average year
        last.centerYear =
          last.events.reduce((sum, e) => sum + e.year, 0) / last.events.length;
        continue;
      }
    }

    clusters.push({
      id: `cluster-${event.id}`,
      events: [event],
      centerYear: event.year,
    });
  }

  return clusters;
}
