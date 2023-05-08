import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

import type { TimeSeriesData } from './TimeSeriesTypes';

interface Props {
  chartData: TimeSeriesData;
}

function TimeSeriesView(props: Props) {
  const { chartData } = props;

  let chart;
  if (chartData !== null) {
    const { data, lines } = chartData;

    const linesComponent = lines.map(line => (
      <Line
        type='monotone'
        dataKey={line.dataKey}
        stroke={line.stroke}
        yAxisId={line.yAxisId}
        key={line.dataKey}
      />
    ));

    chart = (
      <LineChart width={600} height={300} data={data}>
        {linesComponent}
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='date' />
        <YAxis yAxisId='left-axis' />
        <YAxis yAxisId='right-axis' orientation='right' />
      </LineChart>
    );
  }

  return (
    <div className='chartView'>
      <h1>Time Series View</h1>
      {chart}
    </div>
  );
}

export default TimeSeriesView;
