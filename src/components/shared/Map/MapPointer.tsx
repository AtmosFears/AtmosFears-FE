import L from 'leaflet';
import { useRef } from 'react';
import { Circle, Marker, Popup } from 'react-leaflet';

import { COLORS, POLLUTION } from '@/constants/index';
import { type SensorData } from '@/types/sensors/sensors';

import PointerPopup from './PointerPopup';

type PollutionType = 'PM2.5' | 'PM10';

interface MapPointerProps {
  center: [number, number];
  radius: number;
  text: string;
  sensorData: SensorData;
}

function getPollutionScaleColor(
  sensorData: SensorData,
  pollutionName: PollutionType
): string {
  const pollutionValue = sensorData.data.find(
    item => item.name === pollutionName
  );
  if (pollutionValue !== undefined) {
    const thresholds = POLLUTION.pollutionLevels[pollutionName];
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

  const circleColor = getPollutionScaleColor(sensorData, 'PM10');
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
