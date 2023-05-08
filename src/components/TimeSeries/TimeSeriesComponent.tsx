import React, { useState } from 'react';

import './TimeSeriesComponent.scss';
import TimeSeriesForm from './TimeSeriesForm';
import type { TimeSeriesData } from './TimeSeriesTypes';
import TimeSeriesView from './TimeSeriesView';

function TimeSeriesComponent() {
  const [chartData, setChartData] = useState<TimeSeriesData>(null);

  return (
    <div className='row'>
      <div className='column'>
        <TimeSeriesForm setChartData={setChartData} />
      </div>
      <div className='column'>
        <TimeSeriesView chartData={chartData} />
      </div>
    </div>
  );
}

export default TimeSeriesComponent;
