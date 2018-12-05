import React from 'react';
import Photos from '../client/components/Photos.js';
import SearchBar from '../client/components/SearchBar.js';
import renderer from 'react-test-renderer';

it('Photos renders correctly', () => {
  const tree = renderer
    .create(<Photos image="http://www.facebook.com"></Photos>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('SearchBar renders correctly', () => {
  const tree = renderer
    .create(<SearchBar/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});