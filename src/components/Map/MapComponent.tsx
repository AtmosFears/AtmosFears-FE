import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CircleComponent from './CircleComponent';

function MapComponent() {
  return (
    <MapContainer center={[50.05, 19.93]} zoom={12.5} className='w-screen h-screen'>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <CircleComponent
        center={[50.05, 19.93]}
        radius={200}
        text='21'
        color='#c90e0e'
      />
    </MapContainer>
  );
}

export default MapComponent;
