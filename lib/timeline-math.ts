import { PIXELS_PER_YEAR_BASE, ZOOM_MULTIPLIER, YEAR_ORIGIN, YEAR_END, AD_SCALE_FACTOR, CHURCH_SCALE_FACTOR, CHURCH_YEAR_START } from './constants';

/** Pixels per year (base rate for BC) at a given zoom level (0–1) */
export function getPixelsPerYear(zoom: number): number {
  // Exponential scaling: at zoom=0 → 2px/yr, at zoom=1 → 2*50=100px/yr
  return PIXELS_PER_YEAR_BASE * (1 + zoom * ZOOM_MULTIPLIER);
}

/**
 * Convert year to pixel offset from YEAR_ORIGIN.
 * Three-tier scaling:
 *   BC (year <= 0):           base ppy
 *   NT AD (0 < year <= 100):  ppy * AD_SCALE_FACTOR
 *   Church (year > 100):      ppy * CHURCH_SCALE_FACTOR
 */
function yearToPixelOffset(year: number, ppy: number): number {
  if (year <= 0) {
    return (year - YEAR_ORIGIN) * ppy;
  }
  const bcWidth = (0 - YEAR_ORIGIN) * ppy;
  if (year <= CHURCH_YEAR_START) {
    return bcWidth + year * ppy * AD_SCALE_FACTOR;
  }
  // BC portion + NT portion (0-100) + Church portion (100-year)
  const ntWidth = CHURCH_YEAR_START * ppy * AD_SCALE_FACTOR;
  return bcWidth + ntWidth + (year - CHURCH_YEAR_START) * ppy * CHURCH_SCALE_FACTOR;
}

/** Inverse of yearToPixelOffset */
function pixelOffsetToYear(offset: number, ppy: number): number {
  const bcWidth = (0 - YEAR_ORIGIN) * ppy;
  if (offset <= bcWidth) {
    return offset / ppy + YEAR_ORIGIN;
  }
  const ntWidth = CHURCH_YEAR_START * ppy * AD_SCALE_FACTOR;
  if (offset <= bcWidth + ntWidth) {
    return (offset - bcWidth) / (ppy * AD_SCALE_FACTOR);
  }
  return CHURCH_YEAR_START + (offset - bcWidth - ntWidth) / (ppy * CHURCH_SCALE_FACTOR);
}

/** Convert a year to an x pixel position */
export function yearToX(year: number, zoom: number, panOffset: number): number {
  const ppy = getPixelsPerYear(zoom);
  return yearToPixelOffset(year, ppy) + panOffset;
}

/** Convert an x pixel position back to a year */
export function xToYear(x: number, zoom: number, panOffset: number): number {
  const ppy = getPixelsPerYear(zoom);
  return pixelOffsetToYear(x - panOffset, ppy);
}

/** Get the total width of the timeline in pixels at a given zoom */
export function getTimelineWidth(zoom: number): number {
  const ppy = getPixelsPerYear(zoom);
  return yearToPixelOffset(YEAR_END, ppy);
}

/** Get the visible year range given viewport width and current pan/zoom */
export function getVisibleYearRange(
  viewportWidth: number,
  zoom: number,
  panOffset: number
): { start: number; end: number } {
  const start = xToYear(0, zoom, panOffset);
  const end = xToYear(viewportWidth, zoom, panOffset);
  return { start, end };
}

/** Format a year for display (e.g., -586 → "586 BC", 30 → "30 AD") */
export function formatYear(year: number, approximate: boolean = false): string {
  const prefix = approximate ? '~' : '';
  if (year < 0) {
    return `${prefix}${Math.abs(year)} BC`;
  }
  if (year === 0) {
    return `${prefix}1 BC`; // There is no year 0
  }
  return `${prefix}${year} AD`;
}

/** Compute panOffset that centers a given year in the viewport */
export function panOffsetToCenter(year: number, zoom: number, viewportWidth: number): number {
  const ppy = getPixelsPerYear(zoom);
  return viewportWidth / 2 - yearToPixelOffset(year, ppy);
}

/** Compute new panOffset that keeps the year under cursorX stationary after a zoom change */
export function zoomAtPoint(
  currentZoom: number,
  newZoom: number,
  panOffset: number,
  cursorX: number
): number {
  const ppy = getPixelsPerYear(currentZoom);
  const yearUnderCursor = pixelOffsetToYear(cursorX - panOffset, ppy);
  const newPpy = getPixelsPerYear(newZoom);
  return cursorX - yearToPixelOffset(yearUnderCursor, newPpy);
}

/** Clamp panOffset so the viewport stays within [YEAR_ORIGIN, YEAR_END] plus padding for edge ticks */
export function clampPanOffset(panOffset: number, zoom: number, viewportWidth: number): number {
  const ppy = getPixelsPerYear(zoom);
  const padding = 80; // extra pixels so edge tick labels remain readable
  const minOffset = viewportWidth - yearToPixelOffset(YEAR_END, ppy) - padding;
  const maxOffset = -yearToPixelOffset(YEAR_ORIGIN, ppy) + padding;
  return Math.max(minOffset, Math.min(maxOffset, panOffset));
}

/** Get appropriate tick interval based on zoom level and year position */
export function getTickInterval(zoom: number, year: number = -1): number {
  let scaleFactor = 1;
  if (year > CHURCH_YEAR_START) scaleFactor = CHURCH_SCALE_FACTOR;
  else if (year > 0) scaleFactor = AD_SCALE_FACTOR;

  const ppy = getPixelsPerYear(zoom) * scaleFactor;
  // Want ticks roughly every 60-150px apart
  let interval: number;
  if (ppy < 4) interval = 500;
  else if (ppy < 8) interval = 100;
  else if (ppy < 20) interval = 10;
  else if (ppy < 60) interval = 5;
  else interval = 1;

  // Cap minimum interval per region
  if (year <= 0) return Math.max(interval, 250);           // OT: no finer than 250yr
  if (year > CHURCH_YEAR_START) return 100; // Church: always every 100yr
  return interval;                                          // NT: unchanged
}
