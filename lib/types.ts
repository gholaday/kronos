export type Track = 'ot' | 'nt' | 'church' | 'world';

export type ConnectionType =
  | 'prophecy-fulfillment'
  | 'type-antitype'
  | 'quotation'
  | 'thematic'
  | 'covenant'
  | 'doctrinal-development'
  | 'historical-echo';

export interface BiblicalEvent {
  id: string;
  track: Track;
  era: string;
  year: number; // negative for BC
  endYear?: number;
  approximate: boolean;
  title: string;
  scripture?: string;
  description: string;
  significance: string;
  figures: string[];
  location: {
    name: string;
    lat: number;
    lng: number;
  };
  tags?: string[];
  historicalContext?: string;
}

export interface CrossReference {
  id: string;
  sourceEventId: string;
  targetEventId: string;
  type: ConnectionType;
  label: string;
  otReference?: string;
  ntReference?: string;
  explanation: string;
}

export interface Era {
  id: string;
  track: Track | 'inter';
  label: string;
  start: number; // negative for BC
  end: number;
  color: string;
  summary: string;
}
