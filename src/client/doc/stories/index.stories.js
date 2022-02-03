import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import PhotoBanner from '../../src/components/PhotoBanner.js';
import Explore from '../../src/containers/Explore.js';
import ProCon from '../../src/components/ProCon.js';
import Expander from '../../src/components/Expander.js';
import Amenities from '../../src/components/Amenities.js';
import { MemoryRouter } from 'react-router';
import NavBar from '../../src/components/NavBar.js'
import Maps from '../../src/components/Maps.js'
import FloorPlanSVG from '../../src/components/FloorPlanSVG.js'
import SpectrumSidebar from "../../src/components/SpectrumSidebar.js";
import RoomAvailability from '../../src/components/RoomAvailability.js';
import WhiteboardTable from '../../src/components/WhiteboardTable.js';
import WhiteboardSidebar from "../../src/components/WhiteboardSidebar.js";
import LiveBlog from "../../src/components/LiveBlog.js";

storiesOf('LiveBlog', module)
  .add('LiveBlog', () =>
    <LiveBlog/>)

storiesOf('SpectrumSidebar', module)
  .add('SpectrumSidebar', () =>
    <SpectrumSidebar
                spectrumSidebarData = {[
                  {
                    title: "How Have Local Hiring Targets Shaped Columbia’s Manhattanville Construction Site?",
                    img_src: "https://www.gstatic.com/webp/gallery/1.jpg",
                    author: "BY YULONG LI",
                    date: "APRIL 8, 2018"
                  },
                  {
                    title: "Newly proposed committee for Barnard calls for increased transparency",
                    img_src: "https://www.gstatic.com/webp/gallery/3.jpg",
                    author: "BY ROUNAK",
                    date: "APRIL 7, 2018"
                  }
                ]}
    />
    );

storiesOf('Sidebar', module)
  .add('whiteboard', () => <WhiteboardSidebar sidebarModification={(dorm) => console.log(dorm)}/>)

storiesOf('Button', module)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  let bannerImages = ["https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png",
  "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg",
  "https://i.imgflip.com/1yt82g.jpg",
  "https://i.imgflip.com/26a82h.jpg",
  "https://i.imgflip.com/1eg7jb.jpg"];

storiesOf('PhotoBanner', module)
  .add('for dorm pages', () =>
        <PhotoBanner bannerImages = {bannerImages}></PhotoBanner>);

storiesOf('WhiteboardTable', module)
  .add('Whiteboard Table', () => <WhiteboardTable roomAvailability={sampleRoomData}/>)

storiesOf('Explore', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('explore', () => <Explore/>);

let testPros = ["pro1", "pro2", "pro3"];
let testCons = ["con1", "con2", "con3"];
storiesOf('ProCon', module)
  .add('pros and cons', () => <ProCon pros={testPros} cons={testCons}></ProCon>);

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

  // storiesOf('/* F */ullScreen', module)
  // .add('full screen', () => <FullScreen/>);

storiesOf('Maps', module)
  .add('map', () => <Maps latitudes={[40.7128, 40.7129, 40.7128]} longitudes={[-74.006, -74.007, -74.008]} popupInfo={["carman", "mcbain", "JJ"]}/>);

let floorplanData = [
  {
    "DORM": "47 Claremont",
    "ROOM": "4",
    "FLOOR": "1",
    "ROOM_TYPE": "suite-3",
    "NEW_PRIORITY": "30",
    "NEW_NUM": "3000"
  },
  {
    "DORM": "47 Claremont",
    "ROOM": "3",
    "FLOOR": "1",
    "ROOM_TYPE": "suite-4",
    "NEW_PRIORITY": "30",
    "NEW_NUM": "3000"
  },
  {
    "DORM": "47 Claremont",
    "ROOM": "1",
    "FLOOR": "1",
    "ROOM_TYPE": "suite-6",
    "NEW_PRIORITY": "30",
    "NEW_NUM": "3000"
  },
  {
    "DORM": "47 Claremont",
    "ROOM": "2",
    "FLOOR": "1",
    "ROOM_TYPE": "suite-5",
    "NEW_PRIORITY": "30",
    "NEW_NUM": "3000"
  },
  {
    "DORM": "47 Claremont",
    "ROOM": "24",
    "FLOOR": "2",
    "ROOM_TYPE": "suite-3",
    "NEW_PRIORITY": "30",
    "NEW_NUM": "3000"
  },
  {
    "DORM": "47 Claremont",
    "ROOM": "23",
    "FLOOR": "2",
    "ROOM_TYPE": "suite-4",
    "NEW_PRIORITY": "30",
    "NEW_NUM": "3000"
  },
  {
    "DORM": "47 Claremont",
    "ROOM": "21",
    "FLOOR": "2",
    "ROOM_TYPE": "suite-7",
    "NEW_PRIORITY": "30",
    "NEW_NUM": "3000"
  },
  {
    "DORM": "47 Claremont",
    "ROOM": "22",
    "FLOOR": "2",
    "ROOM_TYPE": "suite-7",
    "NEW_PRIORITY": "30",
    "NEW_NUM": "3000"
  },
  {
    "DORM": "River Hall",
    "ROOM": "606",
    "FLOOR": "6",
    "ROOM_TYPE": "single",
    "NEW_PRIORITY": "",
    "NEW_NUM": ""
  },
  {
    "DORM": "River Hall",
    "ROOM": "607",
    "FLOOR": "6",
    "ROOM_TYPE": "single",
    "NEW_PRIORITY": "20",
    "NEW_NUM": "1234"
  }
];

let cutoffData = [

];

storiesOf('FloorPlanSVG', module)
  .add('47 Claremont 1 floorplan', () => <FloorPlanSVG dorm="River Hall" floor="6" data={floorplanData} cutoffs={cutoffData}></FloorPlanSVG>);


  let sampleRoomData = [
    {
      "ROOM": "101",
      "NEW_PRIORITY": "30",
      "NEW_NUM": "3000"
    },
    {
      "ROOM": "102",
      "NEW_PRIORITY": "20",
      "NEW_NUM": "2050"
    },
    {
      "ROOM": "103",
      "NEW_PRIORITY": "30",
      "NEW_NUM": "1010"
    },
    {
      "ROOM": "104",
      "NEW_PRIORITY": "10",
      "NEW_NUM": "2510"
    },
    {
      "ROOM": "105",
      "NEW_PRIORITY": "20",
      "NEW_NUM": "1450"
    },
    {
      "ROOM": "106",
      "NEW_PRIORITY": "30",
      "NEW_NUM": "900"
    },
    {
      "ROOM": "107",
      "NEW_PRIORITY": "10",
      "NEW_NUM": "1200"
    }
  ]

  storiesOf('RoomAvailability', module)
  .add('room data', () => <RoomAvailability roomAvailability={sampleRoomData}/>);

  storiesOf('RoomAvailability', module)
  .add('table component', () => <WhiteboardTable roomAvailability={sampleRoomData}/>);
