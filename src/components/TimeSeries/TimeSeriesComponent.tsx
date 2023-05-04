import React from 'react';

import './TimeSeriesComponent.scss';
import TimeSeriesForm from './TimeSeriesForm';
import TimeSeriesView from './TimeSeriesView';

interface State {
  chartData: any;
}

class TimeSeriesComponent extends React.Component<null, State> {
  constructor(props) {
    super(props);
    this.state = {
      chartData: null
    };
    this.setChartData = this.setChartData.bind(this);
  }

  setChartData(data) {
    this.setState(state => ({
      ...state,
      chartData: data
    }));
  }

  render() {
    const { chartData } = this.state;
    return (
      <div className='row'>
        <div className='column'>
          <TimeSeriesForm setChartData={this.setChartData} />
        </div>
        <div className='column'>
          <TimeSeriesView chartData={chartData} />
        </div>
      </div>
    );
  }
}

export default TimeSeriesComponent;
