import { type SensorData } from '@/types/models/timeSeries';

export interface AirQuality extends SensorData {
  [key: string]: string | number;
  location: string;
}
