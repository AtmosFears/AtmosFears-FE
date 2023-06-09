import { useState } from 'react';
import { type ChartData } from 'react-windrose-chart';

import WindRoseChart from '@/components/WindRose/WindRoseChart';
import WindRoseForm from '@/components/WindRose/WindRoseForm';

function WindRose() {
  const [chartData, setChartData] = useState<ChartData[] | null>(null);
  return (
    <div className='flex-1 pt-2 flex'>
      <div className='basis-1/4'>
        <h1 className='text-lg text-center font-black'>Time Series Form</h1>
        <WindRoseForm setChartData={setChartData} />
      </div>
      <div className='basis-3/4'>
        <h1 className='text-lg text-center font-black'>Time Series View</h1>
        <WindRoseChart chartData={chartData} />
      </div>
    </div>
  );
}

export default WindRose;
