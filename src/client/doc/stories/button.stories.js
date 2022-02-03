import React from 'react';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
};

export const WithText = () => <Button>Hello Button</Button>;

WithText.story = {
  name: 'with text',
};

export const WithSomeEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

WithSomeEmoji.story = {
  name: 'with some emoji',
};
