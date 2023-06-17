import axios from 'axios';

import { API } from '@/config';
import { type MeasurementsResponse } from '@/types/api/measurements';
import { type AirImpurityData, type SensorData } from '@/types/models/sensors';

const createSensorData = (data: MeasurementsResponse): SensorData[] =>
  data.map(value => ({
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
    ].filter(v => v.value !== undefined) as AirImpurityData[]
  }));

export const getRecentMeasurements = async (): Promise<SensorData[]> => {
  try {
    const res = await axios.get<MeasurementsResponse>(API.recentMeasurements);
    return createSensorData(res.data);
  } catch (error) {
    console.error(error);
  }
  return [];
};

export const getMeasurements = async (
  format: string
): Promise<SensorData[]> => {
  try {
    const url = `${API.averageMeasurements}?format=${format}`;
    const res = await axios.get<MeasurementsResponse>(url);
    return createSensorData(res.data);
  } catch (error) {
    console.error(error);
  }
  return [];
};
