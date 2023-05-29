export type RangeFilter<V extends Date | number> = {
  name: string;
  range: { min: V; max: V };
};

export type ListFilter<V extends string | number> = {
  name: string;
  options: Array<{ value: V; count: number; label?: string }>;
};

export type Filter =
  | RangeFilter<Date>
  | RangeFilter<number>
  | ListFilter<string>
  | ListFilter<number>;
