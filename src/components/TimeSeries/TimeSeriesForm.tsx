import axios from 'axios';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { BACKEND_URL } from '@/config';
import type {
  Location,
  LocationResponse,
  TimeSeriesResponse
} from '@/types/models/timeSeries';

interface TimeSeriesFormProps {
  setChartData: (data: TimeSeriesResponse) => void;
}

type TimeSeriesFormData = {
  dateFrom: string;
  dateTo: string;
  pollutions: string;
  sensors: string;
};

const DATE_FORMAT = 'yyyy-MM-dd';

const pollutionTypes = [
  { value: 'PM25', label: 'PM2.5' },
  { value: 'PM10', label: 'PM10' },
  { value: 'CO', label: 'CO' },
  { value: 'NO2', label: 'NO2' },
  { value: 'O3', label: 'O3' },
  { value: 'SO2', label: 'SO2' }
];

function TimeSeriesForm({ setChartData }: TimeSeriesFormProps) {
  const [sensorsList, setLocationsList] = useState<Location[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<TimeSeriesFormData>({
    defaultValues: {
      dateFrom: format(new Date('2021-01-01'), DATE_FORMAT),
      dateTo: format(new Date('2021-01-02'), DATE_FORMAT),
      pollutions: 'PM25,PM10',
      sensors: 'MpKrakAlKras'
    }
  });

  const fetchData = async (formData: TimeSeriesFormData): Promise<void> => {
    const { data } = await axios.get<TimeSeriesResponse>(
      `${BACKEND_URL}/timeseries/data`,
      {
        params: formData,
        paramsSerializer: { indexes: null }
      }
    );
    setChartData(data);
  };

  useEffect(() => {
    axios
      .get<LocationResponse>(`${BACKEND_URL}/timeseries/locations`)
      .then(({ data: { locations } }) => {
        setLocationsList(locations);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  const renderSensors = sensorsList.map(station => (
    <option value={station.code} key={station.code}>
      {station.name}
    </option>
  ));

  return (
    <div>
      <form
        onSubmit={event => {
          void handleSubmit(fetchData)(event);
        }}
        className='flex flex-col items-center justify-center m-1'>
        {isError && <p>Something went wrong</p>}
        <p>Date from</p>
        <input type='date' {...register('dateFrom')} />
        <p>Date to</p>
        <input type='date' {...register('dateTo')} />
        <p>Pollution type</p>
        <select {...register('pollutions', { required: true })} multiple>
          {pollutionTypes.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
        <p>Sensors</p>
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
