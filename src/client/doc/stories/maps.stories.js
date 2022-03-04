import React from 'react';
import Maps from '../../src/components/Maps.js';

export default {
  title: 'Maps',
};

export const Map = () => (
  <Maps
    latitudes={[40.7128, 40.7129, 40.7128]}
    longitudes={[-74.006, -74.007, -74.008]}
    popupInfo={['carman', 'mcbain', 'JJ']}
  />
);

Map.story = {
  name: 'map',
};
