import { type AirImpurityData } from '@/types/sensors/sensors';

export class AirImpurityDataModel implements AirImpurityData {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
}
