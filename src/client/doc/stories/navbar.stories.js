import React from 'react';
import { MemoryRouter } from 'react-router';
import NavBar from '../../src/components/NavBar.js';

let sampleMenuItems = [
  {
    name: 'Explore',
    link: '/explore',
    external: false,
  },
  {
    name: 'Whiteboard',
    link: '/whiteboard',
    external: false,
  },
  {
    name: 'FAQ',
    link: '/faq',
    external: false,
  },
  {
    name: 'Spectrum',
    link: 'https://www.columbiaspectator.com/spectrum/',
    external: true,
  },
];

export default {
  title: 'NavBar',

  decorators: [
    (story) => (
      <MemoryRouter initialEntries={['/']}>
        <div>
          {story()}
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
          <p>filler</p>
        </div>
      </MemoryRouter>
    ),
  ],
};

export const Navbar = () => <NavBar menuItems={sampleMenuItems} />;

Navbar.story = {
  name: 'navbar',
};

export const FixedNavbar = () => <NavBar menuItems={sampleMenuItems} fixed />;

FixedNavbar.story = {
  name: 'fixed navbar',
};
