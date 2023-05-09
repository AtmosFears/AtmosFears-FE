import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import DatePicker from 'react-datepicker';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Controller, useForm } from 'react-hook-form';

import { type AirQuality } from '@/components/modules/AverageTimeReports/types';

import data from './data/csvjson.json';

type FormValues = {
  startDate: Date;
  endDate: Date;
};

function AverageTimeReports() {
  const todayDate = new Date();
  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      startDate: new Date(),
      endDate: todayDate
    }
  });
  const [chartData, setChartData] = useState<AirQuality[]>([]);

  const { errors } = formState;

  useEffect(() => {
    setChartData(data);
  }, []);

  const onSubmit = (formData: FormValues): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { startDate, endDate } = formData;
    // eslint-disable-next-line
    console.log(startDate, endDate, chartData);
  };

  return (
    <div>
      <h1>Average Time Reports</h1>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            control={control}
            name='startDate'
            render={({ field }) => (
              <DatePicker
                placeholderText='date start'
                onChange={(date: any) => {
                  field.onChange(date);
                }}
                selected={field.value}
              />
            )}
          />
          {errors.startDate && <span>Start date is required</span>}
        </div>
        <div>
          <Controller
            control={control}
            name='startDate'
            render={({ field }) => (
              <DatePicker
                placeholderText='date start'
                onChange={(date: any) => {
                  field.onChange(date);
                }}
                selected={field.value}
              />
            )}
          />
          {errors.endDate && <span>End date is required</span>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AverageTimeReports;
