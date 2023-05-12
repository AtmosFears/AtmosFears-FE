import { useState } from 'react';

import './TimeSeries.scss';
import TimeSeriesChart from './TimeSeriesChart';
import TimeSeriesForm from './TimeSeriesForm';
import type { TimeSeriesData } from './TimeSeriesTypes';

function TimeSeries() {
  const [chartData, setChartData] = useState<TimeSeriesData>(null);

  return (
    <div className='row'>
      <div className='column-left'>
        <h1 className='header'>Time Series Form</h1>
        <TimeSeriesForm setChartData={setChartData} />
      </div>
      <div className='column-right'>
        <h1 className='header'>Time Series View</h1>
        <TimeSeriesChart chartData={chartData} />
      </div>
    </div>
  );
}

export default TimeSeries;
