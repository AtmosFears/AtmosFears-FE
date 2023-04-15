import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import React from 'react';
import { Circle, Marker } from 'react-leaflet';

import './CircleComponent.scss';

function CircleComponent({ center, radius, text, color }) {
  const text1 = L.divIcon({ className: 'icon', html: text });

  return (
    <Circle
      center={center}
      radius={radius}
      fillColor={color}
      color={color}
      className='circle'>
      <Marker position={center} icon={text1} />
    </Circle>
  );
}

CircleComponent.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  radius: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default CircleComponent;
