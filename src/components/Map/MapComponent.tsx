import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import CircleComponent from './CircleComponent';
import './MapComponent.scss';

function MapComponent() {
  return (
    <MapContainer center={[50.05, 19.93]} zoom={12.5} className='map-container'>
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
