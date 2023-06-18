import axios from 'axios';

import { API } from '@/config';
import { type SensorLocation } from '@/types/sensors';

export const getLocations = async (): Promise<SensorLocation[]> => {
  try {
    return (await axios.get<SensorLocation[]>(API.locations)).data;
  } catch (error) {
    console.error(error);
  }
  return [];
};
