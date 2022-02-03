import React from 'react';
import { storiesOf } from '@storybook/react';
import LiveBlog from "../../src/components/LiveBlog.js";

storiesOf('LiveBlog', module)
  .add('LiveBlog', () =>
    <LiveBlog/>)
