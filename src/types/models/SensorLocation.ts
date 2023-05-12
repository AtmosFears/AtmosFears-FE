import { type SensorData } from '@/types/models/SensorData';

export interface SensorLocation {
  code: string;
  n: number;
  e: number;
}

export interface SensorLocationData {
  key: number;
  location: SensorLocation;
  data: SensorData;
}
