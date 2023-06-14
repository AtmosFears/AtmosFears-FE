import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useSearchParams } from 'react-router-dom';

import { getMeasurements, getRecentMeasurements } from '@/services/DataService';
import { type SensorData } from '@/types/sensors/sensors';

import MapPointer from './MapPointer';
import { SensorForm } from './SensorForm';

export default function Map() {
  const [params] = useSearchParams();
  const [sensorsWithLocations, setSensorsWithLocations] = useState<
    SensorData[]
  >([]);
  useEffect(() => {
    void getRecentMeasurements().then(async measurements => {
      setSensorsWithLocations(measurements);
    });
    if (params) {
      void getMeasurements(params.get('dateType')).then(async measurements => {
        setSensorsWithLocations(measurements);
      });
    }
  }, [params]);

  return (
    <MapContainer center={[50.05, 19.93]} zoom={12.5} className='w-full h-full'>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <SensorForm />
      {sensorsWithLocations.map(sensorWithLocation => (
        <MapPointer
          key={sensorWithLocation.code}
          center={[sensorWithLocation.latitude, sensorWithLocation.longitude]}
          radius={20}
          text='21'
          sensorData={sensorWithLocation}
        />
      ))}
    </MapContainer>
  );
}
