export interface SensorData {
  date: Date;
  data: AirImpurityData[];
  name?: string;
}

export interface AirImpurityData {
  name: string;
  value: number;
}
