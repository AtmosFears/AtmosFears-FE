export interface AirImpurityData {
  name: string;
  value: number;
}

export interface SensorLocation {
  name: string;
  code: string;
  longitude: number;
  latitude: number;
}

export interface SensorData {
  date: Date;
  data: AirImpurityData[];
  code: string;
  longitude: number;
  latitude: number;
}
