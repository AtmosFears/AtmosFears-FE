export type FormValues = {
  date: string;
  dateType: 'day' | 'month' | 'year';
  pollutionType: 'CO' | 'NO2' | 'PM10' | 'PM25' | 'O3' | 'SO2';
};
export const DATE_FORMAT = 'yyyy-MM-dd';
export const pollutionTypes = ['CO', 'NO2', 'PM10', 'PM25', 'O3', 'SO2'];
