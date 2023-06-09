import { type SensorData } from '@/types/models/timeSeries';

export interface AirQuality extends SensorData {
  location: string;
}
