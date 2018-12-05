import React from 'react';
import Photos from '../client/components/Photos.js';
import SearchBar from '../client/components/SearchBar.js';
import DormButton from '../client/components/DormButton.js';
import Explore from '../client/containers/Explore.js';
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

it('DormButton renders correctly', () => {
  const tree = renderer
    .create(<DormButton name="ADI House" address="21 Savage St." sundial_distance="12 minutes" description="It's lit"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Explore renders correctly', () => {
  const tree = renderer
    .create(<Explore/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});