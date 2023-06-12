import axios from 'axios';
import { format } from 'date-fns';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { BACKEND_URL_BASE } from '@/config';
import { type AirQuality } from '@/types/models/AirQuality';

type FormValues = {
  end: string;
  start: string;
};

const DATE_FORMAT = 'yyyy-MM-dd';

const tableHeaders = ['location', 'CO', 'NO2', 'O3', 'PM10', 'PM25', 'SO2'];

function SpatialAirVis() {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      start: format(Date.now(), DATE_FORMAT),
      end: format(Date.now(), DATE_FORMAT)
    }
  });

  const [avgData, setAvgData] = useState<AirQuality[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const { errors } = formState;

  const onSubmit = async (formData: FormValues) => {
    setAvgData([]);
    try {
      const { data } = await axios.get<AirQuality[]>(
        `${BACKEND_URL_BASE}/data/average`,
        {
          params: formData,
          paramsSerializer: { indexes: null }
        }
      );
      setAvgData(data);
    } catch {
      setIsError(true);
    }
    setSubmitted(true);
  };

  if (isError) {
    return (
      <div className='text-center'>
        <p>Błąd połączenia z serwerem</p>
        <button
          className='bg-slate-300 rounded m-1 p-2'
          onClick={() => {
            setIsError(false);
          }}>
          Spróbuj ponownie
        </button>
      </div>
    );
  }

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
            {...register('start')}
            className='form-input w-full'
          />
          {errors.end && (
            <span className='text-red-500'>Start date is required</span>
          )}
        </div>
        <div className='my-4'>
          <p className='text-gray-700 font-bold mb-2'>Date to</p>
          <input
            type='date'
            {...register('end')}
            className='form-input w-full'
          />
          {errors.start && (
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
              {tableHeaders.map(header => (
                <th key={header} className='border border-gray-400 px-4 py-2'>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {avgData.map((row, index) => (
              <tr
                key={row.location}
                className={index % 2 === 1 ? 'bg-gray-200' : ''}>
                {tableHeaders.map(header => (
                  <td className='border border-gray-400 px-4 py-2'>
                    {row[header]}
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
