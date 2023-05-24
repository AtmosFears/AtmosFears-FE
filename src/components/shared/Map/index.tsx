import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import getRecent from '@/services/DataService';
import { getLocation, getLocations } from '@/services/StationsService';
import { type SensorData } from '@/types/models/SensorData';
import {
  type SensorLocation,
  type SensorLocationData
} from '@/types/models/SensorLocation';

import MapPointer from './MapPointer';

export default function Map() {
  const [locations, setLocations] = useState<SensorLocation[]>([]);
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  useEffect(() => {
    void getLocations().then(async res => {
      setLocations(res);
      const data = await getRecent();
      setSensorData(data);
    });
  }, []);

  const sensorLocationData = useMemo(
    () =>
      sensorData.map((value: SensorData, idx) => ({
        data: value,
        location: getLocation(value.code, locations),
        key: idx
      })),
    [locations, sensorData]
  );
  return (
    <MapContainer center={[50.05, 19.93]} zoom={12.5} className='w-full h-full'>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {sensorLocationData.map(value => (
        <MapPointer
          key={value.key}
          center={[value.location.n, value.location.e]}
          radius={20}
          text='21'
          color='#c90e0e'
          sensorData={value.data}
        />
      ))}
    </MapContainer>
  );
}
