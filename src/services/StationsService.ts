import axios from 'axios';

const locationsURI = `${import.meta.env.VITE_LOCAL_API as string}/locations`;

export async function getLocations() {
  const res = await axios.get(locationsURI);
  if (res.status) {
    return res.data;
  }
  console.log('Failed to fetch locations.');
  return [];
}
