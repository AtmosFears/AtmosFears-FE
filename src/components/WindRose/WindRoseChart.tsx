import { Chart, type ChartData } from 'react-windrose-chart';

import { columns } from '@/components/WindRose/data';

interface TimeSeriesChartProps {
  chartData: ChartData[] | null;
}

function WindRoseChart({ chartData }: TimeSeriesChartProps) {
  return (
    <div
      className='m-4 ml-auto mr-auto'
      style={{
        transform: 'translate(200px)'
      }}>
      {chartData && (
        <Chart
          chartData={chartData}
          columns={columns}
          width={800}
          height={600}
          responsive
        />
      )}
    </div>
  );
}

export default WindRoseChart;
