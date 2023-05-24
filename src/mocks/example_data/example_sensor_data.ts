import { type SensorData } from '@/mocks/SensorData';

export const data: [SensorData] = [
  {
    code: 'MpKrakAlKras',
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
