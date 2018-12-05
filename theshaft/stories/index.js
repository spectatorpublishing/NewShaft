import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import SearchBar from '../src/client/components/SearchBar.js';
import Photos from '../src/client/components/Photos.js';
import DormButton from '../src/client/components/DormButton.js';
import Explore from '../src/client/containers/Explore.js';

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

storiesOf('DormButton', module)
  .add('dorm button', () => <DormButton name="ADI House" address="21 Savage St." sundial_distance="12 minutes" description="It's lit"/>);

storiesOf('Explore', module)
  .add('explore', () => <Explore/>);