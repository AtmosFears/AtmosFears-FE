import { format } from 'date-fns';
import { type Dispatch, type SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { type ChartData } from 'react-windrose-chart';

import { pollutionTypes } from '@/constants/pollution';
import data from '@/mocks/windrose/data.json';

interface WindRoseFormProps {
  setChartData: Dispatch<SetStateAction<ChartData[]>>;
}

type WindRoseFormData = {
  dateFrom: string;
  dateTo: string;
  pollution: string;
};

const DATE_FORMAT = 'yyyy-MM-dd';

function WindRoseForm({ setChartData }: WindRoseFormProps) {
  const [isError, setIsError] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<WindRoseFormData>({
    defaultValues: {
      dateFrom: format(new Date('2021-01-01'), DATE_FORMAT),
      dateTo: format(new Date('2021-01-30'), DATE_FORMAT),
      pollution: 'PM25'
    }
  });

  // eslint-disable-next-line
  const fetchData = async (formData: WindRoseFormData): Promise<void> => {
    // @TODO replace with backend real data
    // setChartData(null);
    // try {
    // const { data } = await axios.get<ChartData[]>(
    //   `${BACKEND_URL}/windrose/data`,
    //   {
    //     params: formData,
    //     paramsSerializer: { indexes: null }
    //   }
    // );
    // }catch {
    //   setIsError(true);
    // }
    setChartData(data as ChartData[]);
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
        <input type='date' {...register('dateFrom')} />
        <p className='mt-2 text-lg'>Date to</p>
        <input type='date' {...register('dateTo')} />
        <p className='mt-2 text-lg'>Pollution types</p>
        <select {...register('pollution', { required: true })}>
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
