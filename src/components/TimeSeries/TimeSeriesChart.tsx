import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import { COLORS } from '@/constants';
import type { TimeSeriesData } from '@/types/timeSeries';

interface TimeSeriesChartProps {
  chartData: TimeSeriesData;
}

export default function TimeSeriesChart({ chartData }: TimeSeriesChartProps) {
  const { leftAxis: leftAxisColors, rightAxis: rightAxisColors } =
    COLORS.timeSeriesChart;

  return (
    <div className='m-4 ml-auto mr-auto'>
      {chartData && (
        <LineChart width={800} height={600} data={chartData.data}>
          {chartData.stations.map((station, idx) =>
            chartData.lines.map(line => (
              <Line
                type='monotone'
                dataKey={`sensors.${station}.${line.dataKey}`}
                stroke={
                  line.yAxisId === 'left-axis'
                    ? leftAxisColors[idx]
                    : rightAxisColors[idx]
                }
                yAxisId={line.yAxisId}
                key={`${station}-${line.dataKey}`}
                strokeWidth={2}
                strokeOpacity={0.8}
              />
            ))
          )}
          <Tooltip />
          <Legend verticalAlign='top' height={60} />
          <CartesianGrid stroke='#ccc' />
          <XAxis dataKey='displayDate' />
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
