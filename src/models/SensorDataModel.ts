import { type AirImpurityData, type SensorData } from '@/mocks/SensorData';

export class SensorDataModel implements SensorData {
  code: string;
  data: AirImpurityData[];
  date: Date;

  constructor(code: string, data: AirImpurityData[], date: Date) {
    this.code = code;
    this.data = data;
    this.date = date;
  }
}
