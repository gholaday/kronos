'use client';

import { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import ReactGlobe from 'react-globe.gl';
import type { GlobeMethods } from 'react-globe.gl';
import { feature } from 'topojson-client';
import type { Topology, Objects } from 'topojson-specification';
import {
  COLORS,
  GLOBE_ALTITUDE_START,
  GLOBE_ALTITUDE_ZOOMED,
  GLOBE_ROTATION_MS,
  GLOBE_RING_MAX_RADIUS,
  GLOBE_RING_MAX_RADIUS_APPROX,
  GLOBE_RING_PROPAGATION_SPEED,
  GLOBE_RING_REPEAT_PERIOD,
} from '@/lib/constants';

interface GlobeRendererProps {
  lat: number;
  lng: number;
  width: number;
  height: number;
  ringColor: string;
  isApproximate: boolean;
}

const COUNTRIES_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Solid-color SVG as globe texture — avoids importing three directly (which causes duplicate instance warnings)
const GLOBE_IMAGE_URL = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect width="1" height="1" fill="${COLORS.water}"/></svg>`
)}`;

export default function GlobeRenderer({
  lat,
  lng,
  width,
  height,
  ringColor,
  isApproximate,
}: GlobeRendererProps) {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const [countries, setCountries] = useState<object[]>([]);
  const initializedRef = useRef(false);

  // Fetch country polygons once
  useEffect(() => {
    fetch(COUNTRIES_URL)
      .then((r) => r.json())
      .then((data: Topology<Objects<Record<string, unknown>>>) => {
        const geo = feature(data, data.objects.countries);
        if (geo.type === 'FeatureCollection') {
          setCountries(geo.features);
        }
      })
      .catch(() => {
        // Fail silently — globe still renders without land polygons
      });
  }, []);

  // Set initial camera position then animate zoom-in; animate on subsequent changes
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    if (!initializedRef.current) {
      // Start zoomed out, then animate in
      globe.pointOfView({ lat, lng, altitude: GLOBE_ALTITUDE_START }, 0);
      initializedRef.current = true;

      // Disable zoom so scroll doesn't hijack
      const controls = globe.controls();
      controls.enableZoom = false;

      // Animate zoom-in after a brief delay so the globe is visible first
      requestAnimationFrame(() => {
        globe.pointOfView({ lat, lng, altitude: GLOBE_ALTITUDE_ZOOMED }, GLOBE_ROTATION_MS);
      });
    } else {
      globe.pointOfView({ lat, lng, altitude: GLOBE_ALTITUDE_ZOOMED }, GLOBE_ROTATION_MS);
    }
  }, [lat, lng]);

  const ringsData = useMemo(
    () => [{ lat, lng }],
    [lat, lng]
  );

  const pointsData = useMemo(
    () => [{ lat, lng }],
    [lat, lng]
  );

  const ringMaxRadius = isApproximate
    ? GLOBE_RING_MAX_RADIUS_APPROX
    : GLOBE_RING_MAX_RADIUS;

  const ringColorFn = useCallback(
    (t: number) => {
      // Fade ring opacity as it propagates outward
      const alpha = 1 - t;
      // Parse hex to rgb
      const r = parseInt(ringColor.slice(1, 3), 16);
      const g = parseInt(ringColor.slice(3, 5), 16);
      const b = parseInt(ringColor.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    },
    [ringColor]
  );

  return (
    <ReactGlobe
      ref={globeRef}
      width={width}
      height={height}
      backgroundColor="rgba(0,0,0,0)"
      globeImageUrl={GLOBE_IMAGE_URL}
      showAtmosphere
      atmosphereColor={COLORS.mapBorder}
      atmosphereAltitude={0.12}
      showGraticules={false}
      animateIn={false}
      // Land polygons
      polygonsData={countries}
      polygonCapColor={() => COLORS.land}
      polygonSideColor={() => 'rgba(226,218,204,0.6)'}
      polygonStrokeColor={() => COLORS.mapBorder}
      polygonAltitude={0.005}
      // Location ring
      ringsData={ringsData}
      ringLat="lat"
      ringLng="lng"
      ringAltitude={0.01}
      ringColor={() => ringColorFn}
      ringMaxRadius={() => ringMaxRadius}
      ringPropagationSpeed={() => GLOBE_RING_PROPAGATION_SPEED}
      ringRepeatPeriod={() => GLOBE_RING_REPEAT_PERIOD}
      // Location dot
      pointsData={pointsData}
      pointLat="lat"
      pointLng="lng"
      pointColor={() => ringColor}
      pointRadius={0.4}
      pointAltitude={0.01}
      pointsTransitionDuration={0}
      // Interaction
      enablePointerInteraction={false}
    />
  );
}
