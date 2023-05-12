import {
  AirImpurityDataClass,
  type SensorData,
  SensorDataClass
} from '@/types/models/SensorData';

const locationsURI = 'http://localhost:8080/sampleData';
export default async function getRecent() {
  const res = await fetch(locationsURI);
  if (res.ok) {
    const resJSON: [
      { id: string; deviceLocation: string; pm10Quantity: number }
    ] = await res.json();
    const sampleData: [SensorData] = resJSON.map(
      value =>
        new SensorDataClass(
          value.deviceLocation,
          [new AirImpurityDataClass('pm10Qunatity', value.pm10Quantity)],
          new Date()
        )
    );
    return sampleData;
  }
  console.log('Failed to fetch locations.');
  return [];
}
