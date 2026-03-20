import type { ConnectionType } from './types';

// Timeline range
export const YEAR_ORIGIN = -3500; // leftmost year
export const YEAR_END = 1500; // rightmost year

// Church history scale (between BC 1x and NT 4x)
export const CHURCH_SCALE_FACTOR = 1.5;
export const CHURCH_YEAR_START = 100; // year where church scale begins

// Zoom config
export const PIXELS_PER_YEAR_BASE = 2;
export const ZOOM_MULTIPLIER = 50;
export const ZOOM_MIN = 0;
export const ZOOM_MAX = 1;
export const ZOOM_STEP = 0.05;

// AD years get more pixels-per-year so NT events are spread out
export const AD_SCALE_FACTOR = 4;

// Sacred Codex palette
export const COLORS = {
  background: '#F7F2E8',
  surface: '#EDE7D9',
  textPrimary: '#2C2416',
  textSecondary: '#6B5D4F',
  border: '#C4B8A4',

  // OT eras
  patriarchs: '#C9A84C',
  exodusConquest: '#B8612A',
  judges: '#8B5E3C',
  unitedKingdom: '#A67C32',
  dividedKingdomIsrael: '#6B7C3F',
  dividedKingdomJudah: '#3B4F7A',
  exile: '#6B6B6B',
  returnRestoration: '#4A7C6F',

  // Intertestamental
  intertestamental: '#9E9685',

  // NT eras
  lifeOfChrist: '#8B1A1A',
  earlyChurch: '#5B3A6B',

  // World history
  egypt: '#2E6B5A',
  assyria: '#5A5A5A',
  babylon: '#8B6914',
  persia: '#1B4D6E',
  greece: '#6A8CAF',
  rome: '#7B1535',

  // Church history eras
  apostolicFathers: '#7B4B3A',
  anteNicene: '#4A6741',
  nicenePostNicene: '#996B32',
  earlyMedievalChurch: '#3A5A7A',

  // Extended world history eras
  byzantine: '#6B3A6B',
  medievalWest: '#5A6B3A',
  islamic: '#C4793A',

  // Map
  water: '#C8D6D0',
  land: '#E2DACC',
  mapBorder: '#B8AD9A',
} as const;

// Cross-reference line styles
export const CONNECTION_STYLES: Record<ConnectionType, {
  color: string;
  dashArray: string;
  strokeWidth: number;
  label: string;
}> = {
  'prophecy-fulfillment': {
    color: '#C4956A',
    dashArray: 'none',
    strokeWidth: 2,
    label: 'Prophecy → Fulfillment',
  },
  'type-antitype': {
    color: '#8B5A2B',
    dashArray: '8 4',
    strokeWidth: 2,
    label: 'Type → Antitype',
  },
  quotation: {
    color: '#4A7C6F',
    dashArray: '3 3',
    strokeWidth: 1.5,
    label: 'Quotation / Allusion',
  },
  thematic: {
    color: '#9E9685',
    dashArray: '12 4',
    strokeWidth: 1.5,
    label: 'Thematic Echo',
  },
  covenant: {
    color: '#A67C32',
    dashArray: 'none',
    strokeWidth: 3,
    label: 'Covenant Progression',
  },
  'doctrinal-development': {
    color: '#5B3A6B',
    dashArray: '6 3',
    strokeWidth: 2,
    label: 'Doctrinal Development',
  },
  'historical-echo': {
    color: '#B8612A',
    dashArray: '10 3 2 3',
    strokeWidth: 1.5,
    label: 'Historical Echo',
  },
};

// Track layout heights (px)
export const TRACK_HEIGHT = 160;
export const AXIS_HEIGHT = 44;
export const ERA_BAND_OPACITY = 0.15;
