import './App.scss';
import MapComponent from './components/Map/MapComponent';
import { getRecent } from './services/DataService';

function App() {
  const data = getRecent();
  return (
    <div className='App'>
      <MapComponent data={data} />
    </div>
  );
}

export default App;
