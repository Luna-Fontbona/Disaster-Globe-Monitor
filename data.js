
const disasterColors = {
  earthquake: '#ef4444', // red
  hurricane: '#1e40af', // dark blue
  flood: '#3b82f6', // blue
  wildfire: '#f97316', // orange
  tsunami: '#0c4a6e', // deep blue
  tornado: '#6b7280', // gray
};

const disasterInformation = {
  earthquake: {
    type: 'earthquake',
    name: 'Terremoto',
    description:
      'Un terremoto es la vibración de la Tierra producida por una rápida liberación de energía. Pueden ocurrir sin advertencia.',
    preparation: [
      'Identifica lugares seguros: debajo de muebles sólidos',
      'Prepara un kit de emergencia',
      'Asegura muebles pesados'
    ],
    keyFacts: [
      'Ocurren sin advertencia previa',
      'Las réplicas pueden ocurrir días después',
      'La escala de Richter mide la magnitud'
    ],
  },
  hurricane: {
    type: 'hurricane',
    name: 'Huracán',
    description:
      'Tormenta tropical intensa con vientos sostenidos de 119 km/h o más. Causa daños por viento y lluvia.',
    preparation: [
      'Conoce rutas de evacuación',
      'Protege ventanas',
      'Suministros para 72 horas'
    ],
    keyFacts: [
      'Categorías 1-5 escala Saffir-Simpson',
      'Temporada: junio a noviembre',
      'Las marejadas son la mayor amenaza'
    ],
  },
  flood: {
    type: 'flood',
    name: 'Inundación',
    description:
      'Desbordamiento de agua sobre tierra seca. Una de las amenazas naturales más comunes.',
    preparation: [
      'Conoce el riesgo de tu área',
      'Plan de evacuación familiar',
      'Kit de emergencia en lugar elevado'
    ],
    keyFacts: [
      'Desastre natural más común',
      'La mayoría de muertes ocurren en vehículos',
      '15 cm de agua pueden derribarte'
    ],
  },
  wildfire: {
    type: 'wildfire',
    name: 'Incendio Forestal',
    description:
      'Fuego no controlado que se propaga rápidamente a través de vegetación.',
    preparation: [
      'Zona de defensa de 30m alrededor del hogar',
      'Materiales resistentes al fuego',
      'Kit de evacuación listo'
    ],
    keyFacts: [
      'Pueden viajar a 23 km/h',
      'Causados mayormente por humanos',
      'El humo viaja cientos de kilómetros'
    ],
  },
  tsunami: {
    type: 'tsunami',
    name: 'Tsunami',
    description:
      'Serie de olas oceánicas largas causadas por desplazamiento súbito de agua.',
    preparation: [
      'Conoce rutas a terreno elevado',
      'Señales de advertencia naturales',
      'Plan de evacuación'
    ],
    keyFacts: [
      'Olas pueden viajar a 800 km/h',
      'El 80% ocurren en el Pacífico',
      'La primera ola no siempre es la más grande'
    ],
  },
  tornado: {
    type: 'tornado',
    name: 'Tornado',
    description:
      'Columna de aire que gira violentamente desde una tormenta hasta el suelo.',
    preparation: [
      'Identifica refugio seguro (sótano)',
      'Simulacros familiares',
      'Múltiples formas de recibir alertas'
    ],
    keyFacts: [
      'Vientos pueden exceder 300 km/h',
      'EE.UU. tiene la mayor cantidad',
      'Escala EF 0-5'
    ],
  },
};

const mockDisasters = [
  {
    id: '1',
    type: 'earthquake',
    location: 'Tokio, Japón',
    lat: 35.6762,
    lng: 139.6503,
    severity: 'medium',
    date: '2026-02-03'
  },
  {
    id: '2',
    type: 'hurricane',
    location: 'Miami, Florida, EE.UU.',
    lat: 25.7617,
    lng: -80.1918,
    severity: 'high',
    date: '2026-02-03'
  },
  {
    id: '3',
    type: 'flood',
    location: 'Venecia, Italia',
    lat: 45.4408,
    lng: 12.3155,
    severity: 'medium',
    date: '2026-02-03'
  },
  {
    id: '4',
    type: 'wildfire',
    location: 'California, EE.UU.',
    lat: 36.7783,
    lng: -119.4179,
    severity: 'high',
    date: '2026-02-03'
  },
  {
    id: '5',
    type: 'tsunami',
    location: 'Sumatra, Indonesia',
    lat: -0.5897,
    lng: 101.3431,
    severity: 'high',
    date: '2026-02-03'
  },
  {
    id: '6',
    type: 'tornado',
    location: 'Oklahoma, EE.UU.',
    lat: 35.4676,
    lng: -97.5164,
    severity: 'medium',
    date: '2026-02-03'
  },
  {
    id: '7',
    type: 'earthquake',
    location: 'Ciudad de México, México',
    lat: 19.4326,
    lng: -99.1332,
    severity: 'low',
    date: '2026-02-03'
  },
  {
    id: '8',
    type: 'flood',
    location: 'Bangladesh',
    lat: 23.6850,
    lng: 90.3563,
    severity: 'high',
    date: '2026-02-03'
  },
  {
    id: '9',
    type: 'wildfire',
    location: 'Australia',
    lat: -33.8688,
    lng: 151.2093,
    severity: 'medium',
    date: '2026-02-03'
  },
  {
    id: '10',
    type: 'earthquake',
    location: 'Santiago, Chile',
    lat: -33.4489,
    lng: -70.6693,
    severity: 'medium',
    date: '2026-02-03'
  },
];
