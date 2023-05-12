import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

import type { TimeSeriesData } from '@/types/models/timeSeries';

interface TimeSeriesChartProps {
  chartData: TimeSeriesData;
}

function TimeSeriesChart({ chartData }: TimeSeriesChartProps) {
  return (
    <div className='m-4 ml-auto mr-auto'>
      {chartData && (
        <LineChart width={800} height={300} data={chartData.data}>
          {chartData.lines.map(line => (
            <Line
              type='monotone'
              dataKey={line.dataKey}
              stroke={line.stroke}
              yAxisId={line.yAxisId}
              key={line.dataKey}
            />
          ))}
          <CartesianGrid stroke='#ccc' />
          <XAxis dataKey='date' />
          <YAxis
            yAxisId='left-axis'
            label={{ value: 'µg/m3', angle: -90, position: 'insideLeft' }}
          />
          <YAxis yAxisId='right-axis' orientation='right' />
        </LineChart>
      )}
    </div>
  );
}

export default TimeSeriesChart;
