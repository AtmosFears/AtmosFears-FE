import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';

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
          <Legend verticalAlign='top' height={36} />
          <CartesianGrid stroke='#ccc' />
          <XAxis dataKey='date' />
          <YAxis
            yAxisId='left-axis'
            label={{
              value: chartData.leftAxis.label,
              angle: -90,
              position: 'insideLeft'
            }}
          />
          <YAxis
            yAxisId='right-axis'
            orientation='right'
            label={{ value: chartData.rightAxis?.label ?? '', angle: -90 }}
          />
        </LineChart>
      )}
    </div>
  );
}

export default TimeSeriesChart;
