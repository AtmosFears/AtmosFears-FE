import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import data from '@/mocks/avg-data.json';
import { type AirQuality } from '@/types/models/AirQuality';

type FormValues = {
  dateFrom: string;
  dateTo: string;
};

const DATE_FORMAT = 'yyyy-MM-dd';

const initialAirQuality: AirQuality = {
  location: '',
  CO: 0,
  NO2: 0,
  O3: 0,
  PM10: 0,
  PM25: 0,
  SO2: 0.1
};

function SpatialAirVis() {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      dateTo: format(Date.now(), DATE_FORMAT),
      dateFrom: format(Date.now(), DATE_FORMAT)
    }
  });

  const [avgData, setAvgData] = useState<AirQuality[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const { errors } = formState;

  useEffect(() => {
    setAvgData(data);
  }, []);

  const onSubmit = (): void => {
    // TODO: Fetch data from API and update chartData
    setSubmitted(true);
  };

  return (
    <div>
      <h1 className='text-center text-3xl font-bold my-6'>
        Average Time Reports
      </h1>
      <form
        onSubmit={event => {
          void handleSubmit(onSubmit)(event);
        }}
        className='flex flex-col items-center my-6'>
        <div className='my-4'>
          <p className='text-gray-700 font-bold mb-2'>Date from</p>
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
          <p className='text-gray-700 font-bold mb-2'>Date to</p>
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
      {submitted && (
        <table className='w-full border border-collapse'>
          <thead>
            <tr>
              {Object.keys(initialAirQuality).map(key => (
                <th key={key} className='border border-gray-400 px-4 py-2'>
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {avgData.map((row, index) => (
              <tr
                key={Symbol(index).toString()}
                className={index % 2 === 1 ? 'bg-gray-200' : ''}>
                {Object.values(row).map((value, colIndex) => (
                  <td
                    key={Symbol(colIndex).toString()}
                    className='border border-gray-400 px-4 py-2'>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SpatialAirVis;
