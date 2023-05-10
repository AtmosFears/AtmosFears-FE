import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { getLocation } from '@/services/StationsService';
import { type SensorData } from '@/types/models/SensorData';
import { type SensorLocation } from '@/types/models/SensorLocation';

import MapPointer from './MapPointer';

export default function Map({ sensorData }: [SensorData]) {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    void fetch('http://localhost:8080/locations').then(async res => {
      const resJSON = await res.json();
      setLocations(resJSON);
    });
    return () => {};
  }, []);
  let i = 0;
  const locationsWithData: [
    { data: SensorData; location: SensorLocation; key: number }
  ] = [];
  sensorData.forEach((value: SensorData) => {
    const sensorLocation: SensorLocation = getLocation(value.code, locations);
    locationsWithData.push({
      data: value,
      location: sensorLocation,
      key: i
    });
    i += 1;
  });
  return (
    <MapContainer center={[50.05, 19.93]} zoom={12.5} className='w-full h-full'>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {locationsWithData.map(value => (
        <MapPointer
          key={value.key}
          center={[value.location.N, value.location.E]}
          radius={20}
          text='21'
          color='#c90e0e'
          sensorData={value.data}
        />
      ))}
    </MapContainer>
  );
}
