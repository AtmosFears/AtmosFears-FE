/* eslint-disable react/jsx-props-no-spreading,@typescript-eslint/no-misused-promises */
import axios from 'axios';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import './TimeSeriesForm.scss';
import {
  type Station,
  type StationsResponse,
  type TimeSeriesResponse
} from './TimeSeriesTypes';

interface Props {
  setChartData: (data: any) => void;
}

const DATE_FORMAT = 'YYYY-MM-DD';

function TimeSeriesForm(props: Props) {
  const { setChartData } = props;

  const [stationsList, setStationsList] = React.useState<Station[]>([]);
  const [isError, setIsError] = React.useState<boolean>(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      dateFrom: moment().format(DATE_FORMAT),
      dateTo: moment().add(7, 'days').format(DATE_FORMAT),
      types: ['PM2-5']
    }
  });

  function fetchData(formData): void {
    void (async () => {
      // TODO: Load data from the API
      const { data } = await axios.get<TimeSeriesResponse>(
        'https://atmosfears.free.beeceptor.com/timeseries',
        {
          params: formData
        }
      );
      setChartData(data);
    })();
  }

  useEffect(() => {
    axios
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
      <h1>Time Series Form</h1>
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
