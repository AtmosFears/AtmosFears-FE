import { useState } from 'react';

import './App.scss';
import MapComponent from './components/Map/MapComponent';
import TimeSeriesComponent from './components/TimeSeries/TimeSeriesComponent';

function App() {
  const [displayTimeSeries, setDisplayTimeSeries] = useState(false);

  let displayedComponent = <MapComponent />;
  if (displayTimeSeries) {
    displayedComponent = <TimeSeriesComponent />;
  }

  const switchView = () => {
    setDisplayTimeSeries(!displayTimeSeries);
  };

  return (
    <div className='App'>
      <button onClick={switchView}>Toggle view</button>
      {displayedComponent}
    </div>
  );
}

export default App;
