/*eslint-disable*/
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import data from '@/mocks/avg-data.json';
import { AirQuality } from '@/types/models/airQuality';

type FormValues = {
  dateFrom: string;
  dateTo: string;
};

const DATE_FORMAT = 'yyyy-MM-dd';

function SpatialAirVis() {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      dateTo: format(Date.now(), DATE_FORMAT),
      dateFrom: format(Date.now(), DATE_FORMAT)
    }
  });

  const [avgData, setAvgData] = useState<AirQuality | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const { errors } = formState;

  useEffect(() => {
    setAvgData(data);
  }, []);

  const onSubmit = (): void => {
    // TODO fetch from API and set to chartData
    setSubmitted(true);
  };

  return (
    <div>
      <h1 className='text-center text-3xl font-bold my-6'>
        Average Time Reports
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center my-6'>
        <div className='my-4'>
          <label className='block text-gray-700 font-bold mb-2'>
            Date from
          </label>
          <input
            type='date'
            {...register('dateFrom')}
            className='form-input w-full'
          />
          {errors.dateFrom && (
            <span className='text-red-500'>Start date is required</span>
          )}
        </div>
        <div className='my-4'>
          <label className='block text-gray-700 font-bold mb-2'>Date to</label>
          <input
            type='date'
            {...register('dateTo')}
            className='form-input w-full'
          />
          {errors.dateTo && (
            <span className='text-red-500'>End date is required</span>
          )}
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-6'>
          Submit
        </button>
      </form>
      {avgData && submitted && (
        <ul className='flex flex-wrap list-none p-0 m-auto w-1/2 my-6'>
          {Object.entries(avgData).map(([key, value]) => (
            <React.Fragment key={key}>
              <li className='w-1/2 p-4 border text-center'>{key}</li>
              <li className='w-1/2 p-4 border text-center bg-gray-200'>
                {value}
              </li>
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SpatialAirVis;
