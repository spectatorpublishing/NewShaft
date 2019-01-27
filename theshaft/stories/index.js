import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import SearchBar from '../src/client/components/SearchBar.js';
import Photos from '../src/client/components/Photos.js';
import DormButton from '../src/client/components/DormButton.js';
import Explore from '../src/client/containers/Explore.js';
import Expander from '../src/client/components/Expander.js';
import Amenities from '../src/client/components/Amenities.js';
import AtAGlance from '../src/client/components/AtAGlance.js'

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
  .add('dorm button', () => <DormButton name="ADI House" address="21 Savage St." sundial_distance="12 minutes" description="It's lit"/>);

storiesOf('Explore', module)
  .add('explore', () => <Explore/>);

storiesOf('Expander', module)
  .add('expander', () => <Expander showAll="Here's all of the text shown. It should be longer than the preview." showSome="Here's a preview shown."><h1>Some Static Heading</h1></Expander>);

let sampleAmenities = [
  ["bathroom", "Semi-private"],
  ["laundry", "Laundry - in basement"],
  ["kitchen", "Kitchen - in basement"],
  ["airConditioning", "Air conditioning"],
  ["lounge", "Floor lounge"],
  ["fitness", "Fitness room"],
  ["lounge", "Sky lounge"],
  ["lounge", "Basement lounge"]
];

storiesOf('Amenities', module)
  .add('amenities', () => <Amenities amenities={sampleAmenities} />);

storiesOf('AtAGlance', module)
  .add('at a glance', () => <AtAGlance location="545 W. 114th St." roomtype="Suite-style doubles" classmakeup="First-Years" numfloors="13"/>);
