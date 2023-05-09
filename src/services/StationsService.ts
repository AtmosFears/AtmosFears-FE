// import * as fs from 'fs';
import { type SensorLocation } from '../models/SensorLocation';
import { mappings } from './example_data/example_mappings';

let locations: [SensorLocation] = [];

function loadLocations() {
  /* fs.readFile('/stations/stations.xlsx', 'utf8', (err, data) => {
    if (err != null) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`Failed to load locations of stations: ${err.code}`);
    } else {
      // eslint-disable-next-line no-console
      console.log('loading');
      locations = data;
    }
  }); */
  locations = mappings;
}

// eslint-disable-next-line import/prefer-default-export
export function getLocations() {
  if (locations.length === 0) {
    loadLocations();
  }
  return locations;
}

export function getLocation(sensorCode) {
  if (locations.length === 0) {
    loadLocations();
  }
  return locations.find(val => val.code === sensorCode);
}
