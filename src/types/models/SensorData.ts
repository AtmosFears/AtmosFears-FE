// eslint-disable-next-line max-classes-per-file
export interface SensorData {
  date: Date;
  data: AirImpurityData[];
  code: string;
}

export interface AirImpurityData {
  name: string;
  value: number;
}

export class SensorDataClass implements SensorData {
  code: string;
  data: AirImpurityData[];
  date: Date;

  constructor(code: string, data: AirImpurityData[], date: Date) {
    this.code = code;
    this.data = data;
    this.date = date;
  }
}

export class AirImpurityDataClass implements AirImpurityData {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
}
