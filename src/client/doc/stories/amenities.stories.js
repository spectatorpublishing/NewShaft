import React from 'react';
import Amenities from '../../src/components/Amenities.js';

let sampleAmenities = [
  ['bathroom', 'Semi-private'],
  ['laundry', 'Laundry - in basement'],
  ['kitchen', 'Kitchen - in basement'],
  ['airConditioning', 'Air conditioning'],
  ['lounge', 'Floor lounge'],
  ['fitness', 'Fitness room'],
  ['lounge', 'Sky lounge'],
  ['lounge', 'Basement lounge'],
];

export default {
  title: 'Amenities',
};

export const _Amenities = () => <Amenities amenities={sampleAmenities} />;

_Amenities.story = {
  name: 'amenities',
};
