import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const renderLineChart = data => (
  <LineChart width={600} height={300} data={data}>
    <Line type='monotone' dataKey='pm10' stroke='#8884d8' />
    <CartesianGrid stroke='#ccc' />
    <XAxis dataKey='date' />
    <YAxis />
  </LineChart>
);

interface Props {
  chartData: any;
}

function TimeSeriesView(props: Props) {
  const { chartData } = props;

  let chart;
  if (chartData !== null) {
    chart = renderLineChart(chartData);
  }

  return (
    <div className='chartView'>
      <h1>Time Series View</h1>
      {chart}
    </div>
  );
}

export default TimeSeriesView;
