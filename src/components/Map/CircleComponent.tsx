import L from 'leaflet';
import { Circle, Marker } from 'react-leaflet';

interface CircleComponentProps {
  center: [number, number]
  radius: number
  text: string
  color: string
}

function CircleComponent({ center, radius, text, color }: CircleComponentProps) {
  const text1 = L.divIcon({ className: 'text-2xl font-bold', html: text });

  return (
    <Circle
      center={center}
      radius={radius}
      fillColor={color}
      color={color}>
      <Marker position={center} icon={text1} />
    </Circle>
  );
}

export default CircleComponent;
