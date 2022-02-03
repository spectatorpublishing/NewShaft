import React from 'react';
import { storiesOf } from '@storybook/react';
import Expander from '../../src/components/Expander.js';

storiesOf('Expander', module)
  .add('expander', () => <Expander showAll="Here's all of the text shown. It should be longer than the preview." showSome="Here's a preview shown."><h1>Some Static Heading</h1></Expander>);
