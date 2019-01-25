import React from 'react';
import Photos from '../client/components/Photos.js';
import SearchBar from '../client/components/SearchBar.js';
import DormButton from '../client/components/DormButton.js';
import Explore from '../client/containers/Explore.js';
import renderer from 'react-test-renderer';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

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