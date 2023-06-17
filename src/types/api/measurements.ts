export interface MeasurementDTO {
  id: string;
  date: string;
  sensorCode: string;
  windDirection: number;
  windSpeed: number;
  longitude: number;
  latitude: number;
  co?: number;
  no2?: number;
  pm10?: number;
  pm25?: number;
  o3?: number;
  so2?: number;
}

export type MeasurementsResponse = MeasurementDTO[];
