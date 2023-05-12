import { format, subDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { stations } from '@/mocks/timeSeries/stations.json';
import timeSeries from '@/mocks/timeSeries/timeSeries.json';
import {
  type Station,
  type TimeSeriesResponse
} from '@/types/models/timeSeries';

interface TimeSeriesFormProps {
  setChartData: (data: TimeSeriesResponse) => void;
}

type TimeSeriesFormData = {
  dateFrom: string;
  dateTo: string;
  types: string[];
  stations: string[];
};

const DATE_FORMAT = 'yyyy-MM-dd';

function TimeSeriesForm({ setChartData }: TimeSeriesFormProps) {
  const [stationsList, setStationsList] = useState<Station[]>([]);
  const [isError] = useState<boolean>(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      dateFrom: format(subDays(new Date(), 7), DATE_FORMAT),
      dateTo: format(new Date(), DATE_FORMAT),
      types: ['PM2.5'],
      stations: ['KRK']
    }
  });

  const fetchData = async (formData: TimeSeriesFormData): Promise<void> => {
    setChartData(timeSeries as unknown as TimeSeriesResponse);
    // TODO: Load data from the API
    // const { data } = await axios.get<TimeSeriesResponse>(
    //   'https://atmosfears.free.beeceptor.com/timeseries',
    //   {
    //     params: formData
    //   }
    // );
    // setChartData(data);
  };

  useEffect(() => {
    setStationsList(stations);
    // TODO: Load data from the API
    // axios
    //   .get<StationsResponse>('https://atmosfears.free.beeceptor.com/stations')
    //   .then(({ data: { stations } }) => {
    //     setStationsList(stations);
    //   })
    //   .catch(() => {
    //     setIsError(true);
    //   });
  }, []);

  const renderStations = stationsList.map(station => (
    <option value={station.id} key={station.id}>
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
        <select {...register('types', { required: true })} multiple>
          <option value='PM1'>PM1</option>
          <option value='PM2.5'>PM2.5</option>
          <option value='PM10'>PM10</option>
        </select>
        <p>Station</p>
        <select {...register('stations', { required: true })} multiple>
          {renderStations}
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
