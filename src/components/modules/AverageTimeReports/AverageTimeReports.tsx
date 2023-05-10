// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';

import { type AirQuality } from '@/components/modules/AverageTimeReports/types';

import data from './data/csvjson.json';

type FormValues = {
  dateFrom: string;
  dateTo: string;
};

const DATE_FORMAT = 'YYYY-MM-DD';

function AverageTimeReports() {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      dateTo: moment().format(DATE_FORMAT),
      dateFrom: moment().format(DATE_FORMAT)
    }
  });
  const [chartData, setChartData] = useState<AirQuality[]>([]);
  const [avgData, setAvgData] = useState<AirQuality[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const { errors } = formState;

  useEffect(() => {
    setChartData(data);
  }, []);

  const loadAvgData = (dateFrom: string, dateTo: string): void => {
    const filteredData = chartData.filter(item => {
      const date = moment(item.date).format(DATE_FORMAT);
      return date >= dateFrom && date <= dateTo;
    });
    setAvgData(filteredData);
    setSubmitted(true);
  };

  const onSubmit = (formData: FormValues): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { dateFrom, dateTo } = formData;
    loadAvgData(dateFrom, dateTo);
  };

  return (
    <div>
      <h1>Average Time Reports</h1>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Date from</p>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input type='date' {...register('dateFrom')} />
        <p>Date to</p>
        {errors.dateFrom && <span>Start date is required</span>}
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input type='date' {...register('dateTo')} />

        {errors.dateTo && <span>End date is required</span>}
        <br />
        <button type='submit'>Submit</button>
      </form>
      {avgData.length > 0 && submitted && (
        <table>
          <thead>
            <tr>
              {avgData[0] &&
                Object.keys(avgData[0] as object).map(key => (
                  <th key={key}>{key}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {avgData.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={index}>
                {Object.values(item).map(value => (
                  <td key={value}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {submitted && !avgData.length && <p>No data in this range</p>}
    </div>
  );
}

export default AverageTimeReports;
