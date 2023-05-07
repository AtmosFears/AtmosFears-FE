/* eslint-disable multiline-ternary */
import L from 'leaflet';
import { useRef } from 'react';
import { Circle, Marker, Popup } from 'react-leaflet';
import { type SensorData } from 'src/models/SensorData';

import PopupComponent from './PopupComponent';

interface CircleComponentProps {
  center: [number, number];
  radius: number;
  text: string;
  color: string;
  sensorData: SensorData;
}

function CircleComponent({
  center,
  radius,
  text,
  color,
  sensorData
}: CircleComponentProps) {
  const circleRef = useRef<L.Circle>(null);
  const text1 = L.divIcon({ className: 'text-2xl font-bold', html: text });

  const onClick = () => {
    circleRef.current?.openPopup();
  };

  return (
    <Circle
      center={center}
      radius={radius}
      fillColor={color}
      color={color}
      ref={circleRef}
      eventHandlers={{ click: onClick }}>
      <Marker position={center} icon={text1} />
      <Popup>
        <PopupComponent sensorData={sensorData} />
      </Popup>
    </Circle>
  );
}

export default CircleComponent;
