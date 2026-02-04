export type DisasterType = 'earthquake' | 'hurricane' | 'flood' | 'wildfire' | 'tsunami' | 'tornado';

export interface Disaster {
  id: string;
  type: DisasterType;
  location: string;
  latitude: number;
  longitude: number;
  severity: 'low' | 'medium' | 'high';
  timestamp: Date;
}

export const disasterColors: Record<DisasterType, string> = {
  earthquake: '#ef4444', // red
  hurricane: '#1e40af', // dark blue
  flood: '#3b82f6', // blue
  wildfire: '#f97316', // orange
  tsunami: '#0c4a6e', // deep blue
  tornado: '#6b7280', // gray
};

export const disasterNames: Record<DisasterType, string> = {
  earthquake: 'Terremoto',
  hurricane: 'Huracán',
  flood: 'Inundación',
  wildfire: 'Incendio Forestal',
  tsunami: 'Tsunami',
  tornado: 'Tornado',
};

// Datos simulados de desastres naturales en tiempo real
export const mockDisasters: Disaster[] = [
  {
    id: '1',
    type: 'earthquake',
    location: 'Tokio, Japón',
    latitude: 35.6762,
    longitude: 139.6503,
    severity: 'medium',
    timestamp: new Date('2026-02-03T10:30:00'),
  },
  {
    id: '2',
    type: 'hurricane',
    location: 'Miami, Florida, EE.UU.',
    latitude: 25.7617,
    longitude: -80.1918,
    severity: 'high',
    timestamp: new Date('2026-02-03T08:15:00'),
  },
  {
    id: '3',
    type: 'flood',
    location: 'Venecia, Italia',
    latitude: 45.4408,
    longitude: 12.3155,
    severity: 'medium',
    timestamp: new Date('2026-02-03T12:00:00'),
  },
  {
    id: '4',
    type: 'wildfire',
    location: 'California, EE.UU.',
    latitude: 36.7783,
    longitude: -119.4179,
    severity: 'high',
    timestamp: new Date('2026-02-03T09:45:00'),
  },
  {
    id: '5',
    type: 'tsunami',
    location: 'Sumatra, Indonesia',
    latitude: -0.5897,
    longitude: 101.3431,
    severity: 'high',
    timestamp: new Date('2026-02-03T11:20:00'),
  },
  {
    id: '6',
    type: 'tornado',
    location: 'Oklahoma, EE.UU.',
    latitude: 35.4676,
    longitude: -97.5164,
    severity: 'medium',
    timestamp: new Date('2026-02-03T07:30:00'),
  },
  {
    id: '7',
    type: 'earthquake',
    location: 'Ciudad de México, México',
    latitude: 19.4326,
    longitude: -99.1332,
    severity: 'low',
    timestamp: new Date('2026-02-03T13:10:00'),
  },
  {
    id: '8',
    type: 'flood',
    location: 'Bangladesh',
    latitude: 23.6850,
    longitude: 90.3563,
    severity: 'high',
    timestamp: new Date('2026-02-03T06:00:00'),
  },
  {
    id: '9',
    type: 'wildfire',
    location: 'Australia',
    latitude: -33.8688,
    longitude: 151.2093,
    severity: 'medium',
    timestamp: new Date('2026-02-03T14:25:00'),
  },
  {
    id: '10',
    type: 'earthquake',
    location: 'Santiago, Chile',
    latitude: -33.4489,
    longitude: -70.6693,
    severity: 'medium',
    timestamp: new Date('2026-02-03T05:40:00'),
  },
];
