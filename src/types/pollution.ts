import { type SensorMeasurements } from './timeSeries';

export type PollutionType = 'CO' | 'NO2' | 'PM10' | 'PM25' | 'O3' | 'SO2';

export interface AirQuality extends SensorMeasurements {
  [key: string]: string | number;
  location: string;
}
