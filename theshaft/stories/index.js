import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import SearchBar from '../src/client/components/SearchBar.js';
import Photos from '../src/client/components/Photos.js';

storiesOf('Button', module)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('SearchBar', module)
  .add('with text', () => <SearchBar/>);
  
storiesOf('Photos', module)
	.add('pikachu', () => <Photos image="https://i.imgur.com/jevRP2j.jpg"/>);