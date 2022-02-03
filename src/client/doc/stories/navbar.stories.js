import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import NavBar from '../../src/components/NavBar.js'

let sampleMenuItems = [
  {
    "name": "Explore",
    "link": "/explore",
    "external": false
  },
  {
    "name": "Whiteboard",
    "link": "/whiteboard",
    "external": false
  },
  {
    "name": "FAQ",
    "link": "/faq",
    "external": false
  },
  {
    "name": "Spectrum",
    "link": "https://www.columbiaspectator.com/spectrum/",
    "external": true
  }
];

storiesOf('NavBar', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>
      <div>
        {story()}
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
        <p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p><p>filler</p>
      </div>
    </MemoryRouter>
  ))
  .add('navbar', () => <NavBar menuItems={sampleMenuItems} />)
  .add('fixed navbar', () => <NavBar menuItems={sampleMenuItems} fixed />);
