export default {
  levels: {
    values: {
      pm25: [0, 25, 50, 100, 300, Infinity],
      pm10: [0, 40, 80, 120, 300, Infinity]
    },
    names: [
      'Bardzo dobra',
      'Dobra',
      'Umiarkowana',
      'Dostateczna',
      'Zła',
      'Bardzo zła',
      'Niebezpieczna'
    ]
  },
  types: [
    { value: 'PM25', label: 'PM2.5' },
    { value: 'PM10', label: 'PM10' },
    { value: 'CO', label: 'CO' },
    { value: 'NO2', label: 'NO2' },
    { value: 'O3', label: 'O3' },
    { value: 'SO2', label: 'SO2' }
  ]
};
