import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import SearchBar from '../src/client/components/SearchBar.js';
import PhotoBanner from '../src/client/components/PhotoBanner.js';
import DormButton from '../src/client/components/DormButton.js';
import Explore from '../src/client/containers/Explore.js';
import ProCon from '../src/client/components/ProCon.js';
import QuickReview from '../src/client/components/QuickReview.js';
import Review from '../src/client/components/Review.js';
import FloorPlan from '../src/client/components/FloorPlan.js';
import sampleFloor from '../src/client/assets/floor_plans/47 Claremont 1.jpg';
import FilterButton from '../src/client/components/FilterButton.js';
import FilterComponent from '../src/client/components/FilterComponent.js';
import Expander from '../src/client/components/Expander.js';
import Amenities from '../src/client/components/Amenities.js';
import AtAGlance from '../src/client/components/AtAGlance.js';
import FullReview from '../src/client/components/FullReview.js';
import ReviewList from '../src/client/components/ReviewList.js';
import RelatedDorms from '../src/client/components/RelatedDorms';
import ExploreSidebar from '../src/client/components/ExploreSidebar';
import { MemoryRouter } from 'react-router';
//import RelatedDormsList from '../src/client/components/RelatedDormsList'
import NavBar from '../src/client/components/NavBar.js'
import FullScreen from '../src/client/components/FullScreen.js';
import Maps from '../src/client/components/Maps.js'
import FloorPlanSVG from '../src/client/components/FloorPlanSVG.js'
import { ReactComponent as SymposiumSVG } from "../src/client/assets/test_floorplan.svg";
import ReviewSlider from "../src/client/components/ReviewSlider.js";
//import Timeline from "../src/client/components/Timeline.js";

storiesOf('ReviewSlider', module)
  .add('test', () => <ReviewSlider />);

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


  let bannerImages = ["https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png", 
  "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg", 
  "https://i.imgflip.com/1yt82g.jpg", 
  "https://i.imgflip.com/26a82h.jpg", 
  "https://i.imgflip.com/1eg7jb.jpg"];

storiesOf('PhotoBanner', module)
  .add('for dorm pages', () =>
        <PhotoBanner bannerImages = {bannerImages}></PhotoBanner>);

storiesOf('DormButton', module)
  .add('dorm button', () => <DormButton name="ADI House" address="21 Savage St." sundial_distance="12 minutes" description="It's lit"/>);

storiesOf('Explore', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('explore', () => <Explore/>);

let testPros = ["pro1", "pro2", "pro3"];
let testCons = ["con1", "con2", "con3"];
storiesOf('ProCon', module)
  .add('pros and cons', () => <ProCon pros={testPros} cons={testCons}></ProCon>);

storiesOf('QuickReview', module)
  .add('reviews', () => <QuickReview />);

storiesOf('Review', module)
  .add('review', () => <Review stars="3" review="I hate this place" thumbsUp="100" thumbsDown="1" />);

storiesOf('ReviewList', module)
  .add('ReviewList', () => <ReviewList />);

let planArray = [
  sampleFloor, "https://housing.columbia.edu/files/housing/Wien%208_2018.jpg",
    "https://housing.columbia.edu/files/housing/600%209_2016_0.jpg",
    "https://housing.columbia.edu/files/housing/Woodbridge%204_2018.jpg", 
    "https://i.kym-cdn.com/entries/icons/original/000/026/642/kot1.jpg"
]

storiesOf('FloorPlan', module)
  .add('keikaku means plan', () => <FloorPlan floorOffset={1} planArray={planArray}/>);

storiesOf('Filter', module)
  .add('filter', () => <FilterButton name="barnard"/>);
storiesOf('Filter', module)
  .add('filter_full', () => <FilterComponent type="school"/>);

storiesOf('Expander', module)
  .add('expander', () => <Expander showAll="Here's all of the text shown. It should be longer than the preview." showSome="Here's a preview shown."><h1>Some Static Heading</h1></Expander>);

storiesOf('FullReview', module)
  .add('fullreview', () => <FullReview />);

storiesOf('test', module)
  .add('test', () => <Expander showAll={<QuickReview/>} showSome="Here's a preview shown."><h1>Some Static Heading</h1></Expander>);

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

// Related Dorms Content
// let sampleRelatedDorms = [
//   ["Carman", "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg", "link!"],
//   ["Furnald", "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg", "link!"],
//   ["John Jay", "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg", "link!"],
//   ["John Jay", "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg", "link!"],
//   ["John Jay", "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg", "link!"],
//   ["John Jay", "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg", "link!"]
// ];

let sampleRelatedDorms = [
  {
    id: "McBain",
    school: "Columbia",
    name: "McBain Hall",
    image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  },
  {
    id: "Carman",
    school: "Columbia",
    name: "Carman Hall",
    image: "https://housing.columbia.edu/files/housing/Carman.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  },
  {
    id: "Sulzberger",
    school: "Barnard",
    name: "Sulzberger Tower",
    image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  },
  {
    id: "mcbain",
    school: "Columbia",
    name: "McBain Hall",
    image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  },
  {
    id: "mcbain",
    school: "Columbia",
    name: "McBain Hall",
    image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  }
];


storiesOf('RelatedDorms', module)
  .add('related dorms', () => <RelatedDorms relatedDorms={sampleRelatedDorms}/>);

storiesOf('ExploreSidebar', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('explore sidebar', () => <ExploreSidebar/>);

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

  storiesOf('FullScreen', module)
  .add('full screen', () => <FullScreen/>);
storiesOf('Maps', module)
  .add('map', () => <Maps latitudes={[40.7128, 40.7129, 40.7128]} longitudes={[-74.006, -74.007, -74.008]} popupInfo={["carman", "mcbain", "JJ"]}/>);

storiesOf('FloorPlanSVG', module)
  .add('Symposium 1 floorplan', () => <FloorPlanSVG><SymposiumSVG /></FloorPlanSVG>);

  storiesOf('Timeline', module)
  .add('Timeline', () => <Timeline />);