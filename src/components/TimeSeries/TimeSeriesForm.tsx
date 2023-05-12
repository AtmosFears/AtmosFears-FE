/* eslint-disable @typescript-eslint/no-misused-promises */
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import './TimeSeriesForm.scss';
import {
  type Station,
  type StationsResponse,
  type TimeSeriesResponse
} from './TimeSeriesTypes';

interface TimeSeriesFormProps {
  setChartData: (data: TimeSeriesResponse) => void;
}

const DATE_FORMAT = 'YYYY-MM-DD';

function TimeSeriesForm({ setChartData }: TimeSeriesFormProps) {
  const [stationsList, setStationsList] = useState<Station[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      dateFrom: moment().format(DATE_FORMAT),
      dateTo: moment().add(7, 'days').format(DATE_FORMAT),
      types: ['PM2-5']
    }
  });

  const fetchData = async (formData: FormData): Promise<void> => {
    // TODO: Load data from the API
    const { data } = await axios.get<TimeSeriesResponse>(
      'https://atmosfears.free.beeceptor.com/timeseries',
      {
        params: formData
      }
    );
    setChartData(data);
  };

  useEffect(() => {
    axios
      // TODO: Load data from the API
      .get<StationsResponse>('https://atmosfears.free.beeceptor.com/stations')
      .then(({ data }) => {
        const { stations } = data;
        setStationsList(stations);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  const stationsComponent = stationsList.map(station => (
    <option value={station.id} key={station.id}>
      {station.name}
    </option>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit(fetchData)} className='timeSeriesForm'>
        {isError && <p>Something went wrong</p>}
        <p>Date from</p>
        <input type='date' {...register('dateFrom')} />
        <p>Date to</p>
        <input type='date' {...register('dateTo')} />
        <p>Pollution type</p>
        <select {...register('types', { required: true })} multiple>
          <option value='PM1'>PM1</option>
          <option value='PM2-5'>PM2.5</option>
          <option value='PM10'>PM10</option>
        </select>
        <p>Station</p>
        <select {...register('stations', { required: true })} multiple>
          {stationsComponent}
        </select>
        <input className='submitButton' type='submit' />
      </form>
    </div>
  );
}

export default TimeSeriesForm;
