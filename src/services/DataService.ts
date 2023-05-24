import axios from 'axios';

import { type SensorData } from '@/mocks/SensorData';
import { AirImpurityDataModel } from '@/models/AirImpurityDataModel';
import { SensorDataModel } from '@/models/SensorDataModel';

const locationsURI = `${import.meta.env.VITE_LOCAL_API as string}/sampleData`;
export default async function getRecent() {
  const res = await axios.get(locationsURI);
  if (res.status) {
    const resJSON: [
      { id: string; deviceLocation: string; pm10Quantity: number }
    ] = res.data;
    const sampleData: [SensorData] = resJSON.map(
      value =>
        new SensorDataModel(
          value.deviceLocation,
          [new AirImpurityDataModel('pm10Qunatity', value.pm10Quantity)],
          new Date()
        )
    );
    return sampleData;
  }
  console.log('Failed to fetch locations.');
  return [];
}
