export type TimeSeriesData = TimeSeriesResponse | null;

export interface TimeSeriesResponse {
  leftAxis: AxisConfig;
  rightAxis?: AxisConfig;
  lines: LineConfig[];
  data: TimeSeriesPoint[];
}

export interface AxisConfig {
  label: string;
}

export interface LineConfig {
  dataKey: string;
  stroke: string;
  yAxisId: 'left-axis' | 'right-axis';
}

export interface TimeSeriesPoint {
  code: number;
  date: string;

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
