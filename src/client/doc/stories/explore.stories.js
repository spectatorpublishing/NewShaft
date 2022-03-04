import React from 'react';
import { MemoryRouter } from 'react-router';
import Explore from '../../src/containers/Explore.js';

export default {
  title: 'Explore',

  decorators: [(story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>],
};

export const _Explore = () => <Explore />;

_Explore.story = {
  name: 'explore',
};
