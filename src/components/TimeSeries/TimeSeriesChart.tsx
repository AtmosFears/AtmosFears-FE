import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

import type { TimeSeriesData } from './TimeSeriesTypes';

interface Props {
  chartData: TimeSeriesData;
}

function TimeSeriesView({ chartData }: Props) {
  return (
    <div className='m-4'>
      {chartData != null && (
        <LineChart width={600} height={300} data={chartData.data}>
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
          <YAxis yAxisId='left-axis' />
          <YAxis yAxisId='right-axis' orientation='right' />
        </LineChart>
      )}
    </div>
  );
}

export default TimeSeriesView;
