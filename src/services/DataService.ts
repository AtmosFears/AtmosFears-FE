import axios from 'axios';

import { type MeasurementsResponse } from '@/types/api/measurements';
import { type SensorData } from '@/types/sensors/sensors';

const measurementsURI = `${
  import.meta.env.VITE_LOCAL_API as string
}/data/recent`;

export const getMeasurements = async (): Promise<SensorData[]> => {
  try {
    const res = await axios.get<MeasurementsResponse>(measurementsURI);
    return res.data.map(value => ({
      code: value.sensorCode,
      date: new Date(value.date),
      longitude: value.longitude,
      latitude: value.latitude,
      data: [
        {
          name: 'CO',
          value: value.co
        },
        {
          name: 'NO2',
          value: value.no2
        },

        {
          name: 'PM10',
          value: value.pm10
        },
        {
          name: 'PM25',
          value: value.pm25
        },
        {
          name: 'O3',
          value: value.o3
        },
        {
          name: 'SO2',
          value: value.so2
        }
      ]
    }));
  } catch (error) {
    console.error(error);
  }
  return [];
};
