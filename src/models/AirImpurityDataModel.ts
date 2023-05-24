import { type AirImpurityData } from '@/mocks/SensorData';

export class AirImpurityDataModel implements AirImpurityData {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
}
