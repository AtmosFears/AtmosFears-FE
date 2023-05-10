import MapComponent from '@/components/shared/Map';
import { getRecent } from '@/services/DataService';

// TODO - implement
export default function SpatialAirVisPage() {
  const recentData = getRecent();
  return <MapComponent sensorData={recentData} />;
}
