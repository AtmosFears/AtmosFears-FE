import L from 'leaflet';
import { useRef } from 'react';
import { Circle, Marker, Popup } from 'react-leaflet';

import { type SensorData } from '@/types/models/SensorData';

import { COLORS, LEVELS } from '../../../constants/index';
import PointerPopup from './PointerPopup';

type PollutionType = 'PM2.5' | 'PM10';

interface MapPointerProps {
  center: [number, number];
  radius: number;
  text: string;
  sensorData: SensorData;
}

function getCircleColor(
  sensorData: SensorData,
  pollutionName: PollutionType
): string {
  if (pollutionName != null) {
    const pollutionValue = sensorData.data.find(
      item => item.name === pollutionName
    );
    if (pollutionValue != null) {
      const thresholds = (LEVELS as any)[pollutionName];
      const idx = thresholds.findIndex(
        (threshold: number) => pollutionValue.value < threshold
      );
      return (COLORS as any)[idx];
    }
  }
  return (COLORS as any)[-1];
}

function MapPointer({ center, radius, text, sensorData }: MapPointerProps) {
  const circleRef = useRef<L.Circle>(null);
  const text1 = L.divIcon({
    className: 'text-2xl font-bold',
    html: text
  });

  const circleColor = getCircleColor(sensorData, 'PM10');
  return (
    <Circle
      center={center}
      radius={radius}
      fillColor={circleColor}
      color={circleColor}
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

export default MapPointer;
