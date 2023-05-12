import L from 'leaflet';
import { useRef } from 'react';
import { Circle, Marker, Popup } from 'react-leaflet';

import { type SensorData } from '@/types/models/SensorData';

import PointerPopup from './PointerPopup';

interface MapPointerProps {
  center: [number, number];
  radius: number;
  text: string;
  color: string;
  sensorData: SensorData;
}

export default function MapPointer({
  center,
  radius,
  text,
  color,
  sensorData
}: MapPointerProps) {
  const circleRef = useRef<L.Circle>(null);
  const text1 = L.divIcon({
    className: 'text-2xl font-bold',
    html: text
  });
  return (
    <Circle
      center={center}
      radius={radius}
      fillColor={color}
      color={color}
      ref={circleRef}>
      <Marker
        position={center}
        icon={text1}
        eventHandlers={{ click: () => circleRef.current?.openPopup() }}
      />
      <Popup>
        <PointerPopup sensorData={sensorData} />
      </Popup>
    </Circle>
  );
}
