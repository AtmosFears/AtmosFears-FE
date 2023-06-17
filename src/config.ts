const LOCAL_API_BASE = import.meta.env.VITE_LOCAL_API as string;

const LOCAL_API = {
  base: LOCAL_API_BASE,
  recentMeasurements: `${LOCAL_API_BASE}/data/recent`,
  averageMeasurements: `${LOCAL_API_BASE}/data/sensors/average`,
  averageData: `${LOCAL_API_BASE}/data/average`,
  aggregateWindrose: `${LOCAL_API_BASE}/data/windrose/aggr`,
  timeSeries: `${LOCAL_API_BASE}/timeseries/data`,
  timeSeriesLocations: `${LOCAL_API_BASE}/timeseries/locations`,
  locations: `${LOCAL_API_BASE}/locations`
};

export const API = LOCAL_API;
