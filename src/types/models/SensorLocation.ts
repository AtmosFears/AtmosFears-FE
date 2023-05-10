export interface SensorLocation {
  code: string;
  N: number;
  E: number;
}

export class SensorLocationClass implements SensorLocation {
  E: number;
  N: number;
  code: string;
  constructor(code: string, N: number, E: number) {
    this.code = code;
    this.N = N;
    this.E = E;
  }
}
