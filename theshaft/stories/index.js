import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import SearchBar from '../src/client/components/SearchBar.js';
import Photos from '../src/client/components/Photos.js';
import DormButton from '../src/client/components/DormButton.js';

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
	.add('pikachu', () => <Photos imageOne="https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg" imageTwo="https://i.imgflip.com/26a82h.jpg" imageThree="https://i.imgflip.com/1eg7jb.jpg" imageFour="https://i.imgflip.com/1yt82g.jpg"/>);

storiesOf('DormButton', module)
	.add('dorm button', () => <DormButton name="McBANE?" address="70 Morningside Dr" sundial_distance="5000mi" description="a really great dorm who doesn't afraid of anything."/>)

