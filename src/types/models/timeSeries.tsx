export type TimeSeriesData = TimeSeriesResponse | null;

export interface TimeSeriesResponse {
  leftAxis: AxisConfig;
  rightAxis?: AxisConfig;
  lines: LineConfig[];
  stations: string[];
  data: TimeSeriesPoint[];
}
export interface TimeSeriesPoint {
  date: number;
  displayDate: string;
  sensors: Record<string, SensorData>;
}

export interface AxisConfig {
  label: string;
}

export interface LineConfig {
  dataKey: string;
  stroke: string;
  yAxisId: 'left-axis' | 'right-axis';
}

export interface SensorData {
  CO: number;
  NO2: number;
  O3: number;
  PM10: number;
  PM25: number;
  SO2: number;
}

export interface LocationResponse {
  locations: Location[];
}

export interface Location {
  code: string;
  name: string;
}
