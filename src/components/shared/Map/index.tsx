import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { getMeasurements } from '@/services/DataService';
import { type SensorData } from '@/types/sensors/sensors';

import MapPointer from './MapPointer';

export default function Map() {
  const [sensorsWithLocations, setSensorsWithLocations] = useState<
    SensorData[]
  >([]);
  useEffect(() => {
    void getMeasurements().then(async measurements => {
      setSensorsWithLocations(measurements);
    });
  });
  return (
    <MapContainer center={[50.05, 19.93]} zoom={12.5} className='w-full h-full'>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {sensorsWithLocations.map(sensorWithLocation => (
        <MapPointer
          key={sensorWithLocation.code}
          center={[sensorWithLocation.latitude, sensorWithLocation.longitude]}
          radius={20}
          text='21'
          color='#c90e0e'
          sensorData={sensorWithLocation}
        />
      ))}
    </MapContainer>
  );
}
