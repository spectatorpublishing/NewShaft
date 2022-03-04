import React from 'react';
import Expander from '../../src/components/Expander.js';

export default {
  title: 'Expander',
};

export const _Expander = () => (
  <Expander
    showAll="Here's all of the text shown. It should be longer than the preview."
    showSome="Here's a preview shown."
  >
    <h1>Some Static Heading</h1>
  </Expander>
);

_Expander.story = {
  name: 'expander',
};
