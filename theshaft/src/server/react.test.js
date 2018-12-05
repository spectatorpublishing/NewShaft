import React from 'react';
import Photos from '../client/components/Photos.js';
import SearchBar from '../client/components/SearchBar.js';
import renderer from 'react-test-renderer';

it('Photos renders correctly', () => {
  const tree = renderer
    .create(<Photos imageOne="https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg" imageTwo="https://i.imgflip.com/26a82h.jpg" imageThree="https://i.imgflip.com/1eg7jb.jpg" imageFour="https://i.imgflip.com/1yt82g.jpg"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('SearchBar renders correctly', () => {
  const tree = renderer
    .create(<SearchBar/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});