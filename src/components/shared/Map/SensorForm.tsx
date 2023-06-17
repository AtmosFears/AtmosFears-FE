import { format } from 'date-fns';
import { useForm } from 'react-hook-form';

import { type PollutionType } from '@/types/pollution';

export type FormValues = {
  date: string;
  dateType: 'day' | 'month' | 'year';
  pollutionType: PollutionType;
};

export const DATE_FORMAT = 'yyyy-MM-dd';
export const POLLUTION_TYPES = ['CO', 'NO2', 'PM10', 'PM25', 'O3', 'SO2'];

export function SensorForm() {
  const { register, formState } = useForm<FormValues>({
    defaultValues: {
      date: format(Date.now(), DATE_FORMAT),
      dateType: 'day',
      pollutionType: 'CO'
    }
  });

  const { errors } = formState;

  return (
    <form className='w-[500px] h-24 absolute z-[1000] bg-white flex flex-column justify-center right-0'>
      <article className='flex'>
        <section className='flex-1'>
          <label htmlFor='date' className='block text-gray-700 font-bold mb-2'>
            Start Date
            <input
              id='date'
              type='date'
              {...register('date')}
              className='form-input w-full'
            />
          </label>
          {errors.date && (
            <span className='text-red-500'>Start date is required</span>
          )}
        </section>

        <section className='bg-white flex-1'>
          <label
            htmlFor='dateType'
            className='block text-gray-700 font-bold mb-2'>
            Date Type
            <select id='dateType' {...register('dateType')}>
              <option value='day'>day</option>
              <option value='month'>month</option>
              <option value='year'>year</option>
            </select>
          </label>
        </section>

        <section className='bg-white flex-1'>
          <label
            htmlFor='pollutionType'
            className='block text-gray-700 font-bold mb-2'>
            Pollution Type
            <select id='pollutionType' {...register('pollutionType')}>
              {POLLUTION_TYPES.map(pollutionType => (
                <option value={pollutionType} key={pollutionType}>
                  {pollutionType}
                </option>
              ))}
            </select>
          </label>
        </section>
      </article>
      <input type='submit' value='filter' />
    </form>
  );
}
