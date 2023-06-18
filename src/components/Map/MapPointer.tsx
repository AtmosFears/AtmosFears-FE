import L from 'leaflet';
import { useRef } from 'react';
import { Circle, Marker, Popup } from 'react-leaflet';

import { COLORS, POLLUTION } from '@/constants/index';
import { type SensorData } from '@/types/sensors';

import PointerPopup from './PointerPopup';

interface MapPointerProps {
  center: [number, number];
  radius: number;
  text: string;
  sensorData: SensorData;
}

function getPollutionScaleColor(
  sensorData: SensorData,
  pollutionName: 'pm25' | 'pm10'
): string {
  const pollutionValue = sensorData.data.find(
    item => item.name === pollutionName
  );
  if (pollutionValue !== undefined) {
    const thresholds = POLLUTION.levels.values[pollutionName];
    const idx = thresholds.findIndex(
      (threshold: number) => pollutionValue.value < threshold
    );
    return COLORS.pollutionScale[idx] as string;
  }
  return '#ffffff';
}

export default function MapPointer({
  center,
  radius,
  text,
  sensorData
}: MapPointerProps) {
  const circleRef = useRef<L.Circle>(null);
  const text1 = L.divIcon({
    className: 'text-2xl font-bold',
    html: text
  });

  const circleColor = getPollutionScaleColor(sensorData, 'pm10');

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
