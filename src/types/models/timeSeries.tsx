export type TimeSeriesData = TimeSeriesResponse | null;

export interface TimeSeriesResponse {
  lines: LineConfig[];
  data: TimeSeriesPoint[];
}

export interface LineConfig {
  dataKey: string;
  stroke: string;
  yAxisId: 'left-axis' | 'right-axis';
}

export interface TimeSeriesPoint {
  date: string;
  pm1: number;
  pm25: number;
  pm10: number;
  id: number;
}

export interface StationsResponse {
  stations: Station[];
}

export interface Station {
  id: string;
  name: string;
}
