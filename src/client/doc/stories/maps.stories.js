import React from 'react';
import { storiesOf } from '@storybook/react';
import Maps from '../../src/components/Maps.js'

storiesOf('Maps', module)
  .add('map', () => <Maps latitudes={[40.7128, 40.7129, 40.7128]} longitudes={[-74.006, -74.007, -74.008]} popupInfo={["carman", "mcbain", "JJ"]}/>);
