import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { type SensorData } from '../../models/SensorData';
import { type SensorLocation } from '../../models/SensorLocation';
import { getLocation } from '../../services/StationsService';
import CircleComponent from './CircleComponent';

function MapComponent({ data }: [SensorData]) {
  const locationsWithData: [{ data: SensorData; location: SensorLocation }] =
    [];
  data.forEach(value => {
    locationsWithData.push({
      data: value,
      location: getLocation(value.name)
    });
  });
  return (
    <MapContainer
      center={[50.05, 19.93]}
      zoom={12.5}
      className='w-screen h-screen'>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {locationsWithData.map(value => (
        <CircleComponent
          key={value.location.code}
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

export default MapComponent;
