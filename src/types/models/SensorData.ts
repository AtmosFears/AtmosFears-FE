export interface SensorData {
  date: Date;
  data: AirImpurityData[];
  code: string;
}

export interface AirImpurityData {
  name: string;
  value: number;
}
