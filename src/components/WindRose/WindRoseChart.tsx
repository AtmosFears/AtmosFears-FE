import { Chart, type ChartData } from 'react-windrose-chart';

import { WINDROSE } from '@/constants';

interface WindRoseChartProps {
  chartData: ChartData[];
}

function WindRoseChart({ chartData }: WindRoseChartProps) {
  return (
    <div className='m-4 flex'>
      {chartData && (
        <div className='ml-auto mr-auto'>
          <Chart
            chartData={chartData}
            columns={WINDROSE.columns}
            width={600}
            height={600}
            responsive
          />
        </div>
      )}
    </div>
  );
}

export default WindRoseChart;
