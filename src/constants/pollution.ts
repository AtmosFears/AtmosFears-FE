export default {
  pollutionLevels: {
    'PM2.5': [0, 25, 50, 100, 300, Infinity],
    PM10: [0, 40, 80, 120, 300, Infinity]
  }
};

export const pollutionTypes = [
  { value: 'PM25', label: 'PM2.5' },
  { value: 'PM10', label: 'PM10' },
  { value: 'CO', label: 'CO' },
  { value: 'NO2', label: 'NO2' },
  { value: 'O3', label: 'O3' },
  { value: 'SO2', label: 'SO2' }
];

export const windroseColumns = [
  'angle',
  '0-1',
  '1-2',
  '2-3',
  '3-4',
  '4-5',
  '5-6',
  '6-7',
  '7+'
];
