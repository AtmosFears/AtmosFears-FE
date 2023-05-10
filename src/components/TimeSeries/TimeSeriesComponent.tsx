import React, { useState } from 'react';

import './TimeSeriesComponent.scss';
import TimeSeriesForm from './TimeSeriesForm';
import type { TimeSeriesData } from './TimeSeriesTypes';
import TimeSeriesView from './TimeSeriesView';

function TimeSeriesComponent() {
  const [chartData, setChartData] = useState<TimeSeriesData>(null);

  return (
    <div className='row'>
      <div className='column-left'>
        <h1 className='header'>Time Series Form</h1>
        <TimeSeriesForm setChartData={setChartData} />
      </div>
      <div className='column-right'>
        <h1 className='header'>Time Series View</h1>
        <TimeSeriesView chartData={chartData} />
      </div>
    </div>
  );
}

export default TimeSeriesComponent;
