const locationsURI = 'http://localhost:8080/locations';

export async function getLocations() {
  console.log('get');
  const res = await fetch(locationsURI);
  if (res.ok) {
    const locations = await res.json();
    console.log(locations);
    return locations;
  }
  console.log('Failed to fetch locations.');
  return [];
}

export function getLocation(sensorCode, locations) {
  return locations.find(val => val.code === sensorCode);
}
