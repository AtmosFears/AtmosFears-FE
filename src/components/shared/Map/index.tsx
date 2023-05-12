import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

import MapPointer from './MapPointer';

export default function Map() {
  return (
    <MapContainer center={[50.05, 19.93]} zoom={12.5} className='w-full h-full'>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <MapPointer
        center={[50.05, 19.93]}
        radius={20}
        text='21'
        sensorData={{
          date: new Date(),
          name: 'Kraków, ul. Wrocławska 20',
          data: [
            {
              name: 'PM1',
              value: 21
            },
            {
              name: 'PM2.5',
              value: 21
            },
            {
              name: 'PM10',
              value: 0.003
            }
          ]
        }}
      />
    </MapContainer>
  );
}
