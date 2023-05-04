/* eslint-disable react/jsx-props-no-spreading,@typescript-eslint/no-misused-promises */
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

import './TimeSeriesForm.scss';

interface Props {
  setChartData: (data: any) => void;
}

function TimeSeriesForm(props: Props) {
  const { setChartData } = props;

  const { register, handleSubmit } = useForm({
    defaultValues: {
      dateFrom: new Date().toISOString().substring(0, 10)
    }
  });

  function fetchData(formData): void {
    void (async () => {
      // TODO: Load data from the API
      const { data } = await axios.get(
        'https://6453b021e9ac46cedf2cb604.mockapi.io/api/v1/timeseries',
        {
          params: formData
        }
      );
      setChartData(data);
    })();
  }

  return (
    <div>
      <h1>Time Series Form</h1>
      <form onSubmit={handleSubmit(fetchData)} className='timeSeriesForm'>
        <p>Date from</p>
        <input type='date' {...register('dateFrom')} />
        <p>Date to</p>
        <input type='date' {...register('dateTo')} />
        <input className='submitButton' type='submit' />
      </form>
    </div>
  );
}

export default TimeSeriesForm;
