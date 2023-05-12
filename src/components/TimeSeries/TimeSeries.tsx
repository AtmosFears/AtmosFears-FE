import { useState } from 'react';

import type { TimeSeriesData } from '../../types/models/timeSeries';
import './TimeSeries.scss';
import TimeSeriesChart from './TimeSeriesChart';
import TimeSeriesForm from './TimeSeriesForm';

function TimeSeries() {
  const [chartData, setChartData] = useState<TimeSeriesData>(null);

  return (
    <div className='flex-1 pt-2 flex'>
      <div className='column-left'>
        <h1 className='text-lg text-center font-black'>Time Series Form</h1>
        <TimeSeriesForm setChartData={setChartData} />
      </div>
      <div className='column-right'>
        <h1 className='text-lg text-center font-black'>Time Series View</h1>
        <TimeSeriesChart chartData={chartData} />
      </div>
    </div>
  );
}

export default TimeSeries;
