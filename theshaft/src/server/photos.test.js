import React from 'react';
import Photos from '../client/components/Photos.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Photos image="http://www.facebook.com"></Photos>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});