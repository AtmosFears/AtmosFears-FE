export interface MeasurementDTO {
  id: string;
  date: string;
  sensorCode: string;
  CO: number;
  NO2: number;
  PM10: number;
  PM25: number;
  O3: number;
  SO2: number;
  windDirection: number;
  windSpeed: number;
}

export type MeasurementsResponse = MeasurementDTO[];
