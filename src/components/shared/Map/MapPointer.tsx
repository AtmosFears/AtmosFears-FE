import L from 'leaflet';
import { useRef } from 'react';
import { Circle, Marker, Popup } from 'react-leaflet';

import { type SensorData } from '@/types/models/SensorData';

import PointerPopup from './PointerPopup';

interface MapPointerProps {
  center: [number, number];
  radius: number;
  text: string;
  sensorData: SensorData;
}

const colors = ['#6ebc2a', '#c4d83f', '#ffe500', '#f1aa41', '#b91414'];

type PollutionLevels = Array<{
  name: string;
  values: number[];
}>;

const pollutionLevels: PollutionLevels = [
  {
    name: 'PM10',
    values: [0, 40, 80, 120, 300]
  },
  {
    name: 'PM2.5',
    values: [0, 25, 50, 100, 300]
  }
];

function getCircleColor(sensorData: SensorData, pollutionName: PollutionType): string {
  let color: string = '#909090';
  if (pollutionName != null) {
    const pollutionValue = sensorData.data.find(
      item => item.name === pollutionName
    );
    const idx = pollutionLevels[pollutionName].find(threshold => pollutionValue.value < threshold);
    return COLORS.pollutionScale[idx];
}

function MapPointer({ center, radius, text, sensorData }: MapPointerProps) {
  const circleRef = useRef<L.Circle>(null);
  const text1 = L.divIcon({
    className: 'text-2xl font-bold',
    html: text
  });

  return (
    <Circle
      center={center}
      radius={radius}
      fillColor={colorCircle(sensorData, 'PM10')}
      color={colorCircle(sensorData, 'PM10')}
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
