import { useState } from 'react';
import { type ChartData } from 'react-windrose-chart';

import WindRoseChart from '@/components/WindRose/WindRoseChart';
import WindRoseForm from '@/components/WindRose/WindRoseForm';

export default function WindRoseage() {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className='flex-1 pt-2 flex'>
      <div className='basis-1/4'>
        <h1 className='text-lg text-center font-black'>Wind Roses Form</h1>
        <WindRoseForm setChartData={setChartData} setLoading={setLoading} />
      </div>
      <div className='basis-3/4'>
        <h1 className='text-lg text-center font-black'>Wind Roses View</h1>
        {loading && (
          <h2 className='text-lg text-center font-black'>Loading...</h2>
        )}
        {chartData.length > 0 && <WindRoseChart chartData={chartData} />}
      </div>
    </div>
  );
}
