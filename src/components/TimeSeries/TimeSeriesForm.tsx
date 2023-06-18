import axios from 'axios';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { API } from '@/config';
import { POLLUTION } from '@/constants';
import type {
  Location,
  LocationResponse,
  TimeSeriesResponse
} from '@/types/timeSeries';

const DATE_FORMAT = 'yyyy-MM-dd';

interface TimeSeriesFormProps {
  setChartData: (data: TimeSeriesResponse | null) => void;
}

type TimeSeriesFormData = {
  dateFrom: string;
  dateTo: string;
  pollution1: string;
  pollution2: string;
  sensors: string;
};

function TimeSeriesForm({ setChartData }: TimeSeriesFormProps) {
  const [sensorsList, setLocationsList] = useState<Location[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<TimeSeriesFormData>({
    defaultValues: {
      dateFrom: format(new Date('2021-01-01'), DATE_FORMAT),
      dateTo: format(new Date('2021-01-30'), DATE_FORMAT),
      pollution1: 'PM25',
      pollution2: 'PM10',
      sensors: 'MpKrakAlKras'
    }
  });

  const fetchData = async (formData: TimeSeriesFormData): Promise<void> => {
    setChartData(null);
    const { data } = await axios.get<TimeSeriesResponse>(API.timeSeries, {
      params: formData,
      paramsSerializer: { indexes: null }
    });
    setChartData(data);
  };

  useEffect(() => {
    axios
      .get<LocationResponse>(API.timeSeriesLocations)
      .then(({ data: { locations } }) => {
        setLocationsList(locations);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [isError]);

  const renderSensors = sensorsList.map(station => (
    <option value={station.code} key={station.code}>
      {station.name}
    </option>
  ));

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

  const pollutionTypes = POLLUTION.types;

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
        <select {...register('pollution1', { required: true })}>
          {pollutionTypes.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
        <select {...register('pollution2', { required: true })}>
          {pollutionTypes.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
        <p className='mt-2 text-lg'>Sensors</p>
        <select {...register('sensors', { required: true })} multiple>
          {renderSensors}
        </select>
        <input
          className='p-3 mx-2 my-5 back hover:bg-slate-200 bg-slate-100 hover:cursor-pointer rounded text-slate-700'
          type='submit'
        />
      </form>
    </div>
  );
}

export default TimeSeriesForm;
