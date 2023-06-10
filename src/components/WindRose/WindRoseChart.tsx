import { Chart, type ChartData } from 'react-windrose-chart';

import { windroseColumns } from '@/constants/pollution';

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
            columns={windroseColumns}
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
