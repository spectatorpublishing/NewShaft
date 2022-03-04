import React from 'react';
import PhotoBanner from '../../src/components/PhotoBanner.js';

let bannerImages = [
  'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png',
  'https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg',
  'https://i.imgflip.com/1yt82g.jpg',
  'https://i.imgflip.com/26a82h.jpg',
  'https://i.imgflip.com/1eg7jb.jpg',
];

export default {
  title: 'PhotoBanner',
};

export const ForDormPages = () => <PhotoBanner bannerImages={bannerImages}></PhotoBanner>;

ForDormPages.story = {
  name: 'for dorm pages',
};
