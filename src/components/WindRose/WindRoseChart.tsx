import { useEffect, useState } from 'react';
import { Chart, type ChartData } from 'react-windrose-chart';

import { WINDROSE } from '@/constants';

const WINDROSE_CHART_SIZE = 600;

interface WindRoseChartProps {
  chartData: ChartData[];
}

function WindRoseChart({ chartData }: WindRoseChartProps) {
  const [responsive, setResponsive] = useState(true);

  useEffect(() => {
    setResponsive(r => !r);
    setTimeout(() => {
      setResponsive(r => !r);
    }, 100);
  }, [chartData]);

  return (
    <div className='m-4 flex'>
      {chartData && (
        <div className='ml-auto mr-auto'>
          <Chart
            chartData={chartData}
            columns={WINDROSE.columns}
            width={WINDROSE_CHART_SIZE - Math.random()}
            height={WINDROSE_CHART_SIZE - Math.random()}
            responsive={responsive}
          />
        </div>
      )}
    </div>
  );
}

export default WindRoseChart;
