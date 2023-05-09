import L from 'leaflet';
import { useRef } from 'react';
import { Circle, Marker, Popup } from 'react-leaflet';
import { type SensorData } from 'src/models/SensorData';

import PopupComponent from './PopupComponent';

interface CircleComponentProps {
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

function colorCircle(sensorData: SensorData, pollutionName: string): string {
  let color: string = '#909090';
  if (pollutionName != null) {
    const pollutionValue = sensorData.data.find(
      item => item.name === pollutionName
    );
    const scale = pollutionLevels.find(item => item.name === pollutionName);
    if (pollutionValue != null && scale != null) {
      for (let i = 0; i < scale.values.length; i += 1) {
        const treshold = scale.values[i];
        if (treshold != null && pollutionValue.value < treshold) {
          break;
        }
        color = colors[i] ?? '#909090';
      }
    }
  }
  return color;
}

function CircleComponent({
  center,
  radius,
  text,
  sensorData
}: CircleComponentProps) {
  const circleRef = useRef<L.Circle>(null);
  const text1 = L.divIcon({
    className: 'text-2xl font-bold',
    html: text
  });

  return (
    <Circle
      center={center}
      radius={radius}
      fillColor={colorCircle(sensorData, 'PM2.5')}
      color={colorCircle(sensorData, 'PM2.5')}
      ref={circleRef}>
      <Marker
        position={center}
        icon={text1}
        eventHandlers={{ click: () => circleRef.current?.openPopup() }}
      />
      <Popup>
        <PopupComponent sensorData={sensorData} />
      </Popup>
    </Circle>
  );
}

export default CircleComponent;
