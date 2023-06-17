import axios from 'axios';
import { format } from 'date-fns';
import { type Dispatch, type SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { type ChartData } from 'react-windrose-chart';

import { BACKEND_URL_BASE } from '@/config';
import { pollutionTypes } from '@/constants/pollution';

interface WindRoseFormProps {
  setChartData: Dispatch<SetStateAction<ChartData[]>>;
}

type WindRoseFormData = {
  start: string;
  end: string;
  pollutant: string;
};

const DATE_FORMAT = 'yyyy-MM-dd';

function WindRoseForm({ setChartData }: WindRoseFormProps) {
  const [isError, setIsError] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<WindRoseFormData>({
    defaultValues: {
      start: format(new Date('2021-01-01'), DATE_FORMAT),
      end: format(new Date('2021-01-30'), DATE_FORMAT),
      pollutant: 'PM25'
    }
  });

  const fetchData = async (formData: WindRoseFormData): Promise<void> => {
    try {
      const { data } = await axios.get<ChartData[]>(
        `${BACKEND_URL_BASE}/data/windrose/aggr`,
        {
          params: formData,
          paramsSerializer: { indexes: null }
        }
      );
      setChartData(data);
      setIsError(false);
    } catch {
      setIsError(true);
    }
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
      <form
        onSubmit={event => {
          void handleSubmit(fetchData)(event);
        }}
        className='flex flex-col items-center justify-center m-1'>
        {isError && <p>Something went wrong</p>}
        <p className='mt-2 text-lg'>Date from</p>
        <input type='date' {...register('start')} />
        <p className='mt-2 text-lg'>Date to</p>
        <input type='date' {...register('end')} />
        <p className='mt-2 text-lg'>Pollution types</p>
        <select {...register('pollutant', { required: true })}>
          {pollutionTypes.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
        <input
          className='p-3 mx-2 my-5 back hover:bg-slate-200 bg-slate-100 hover:cursor-pointer rounded text-slate-700'
          type='submit'
        />
      </form>
    </div>
  );
}

export default WindRoseForm;
