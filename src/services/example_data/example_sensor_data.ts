import { type SensorData } from '../../models/SensorData';

// eslint-disable-next-line import/prefer-default-export
export const data: [SensorData] = [
  {
    name: 'MpKrakAlKras',
    date: new Date(),
    data: [
      {
        name: 'PM1',
        value: 21
      },
      {
        name: 'PM2.5',
        value: 21
      },
      {
        name: 'PM10',
        value: 0.003
      }
    ]
  }
];
