import React from 'react';
import FloorPlanSVG from '../../src/components/FloorPlanSVG.js';

let floorplanData = [
  {
    DORM: '47 Claremont',
    ROOM: '4',
    FLOOR: '1',
    ROOM_TYPE: 'suite-3',
    NEW_PRIORITY: '30',
    NEW_NUM: '3000',
  },
  {
    DORM: '47 Claremont',
    ROOM: '3',
    FLOOR: '1',
    ROOM_TYPE: 'suite-4',
    NEW_PRIORITY: '30',
    NEW_NUM: '3000',
  },
  {
    DORM: '47 Claremont',
    ROOM: '1',
    FLOOR: '1',
    ROOM_TYPE: 'suite-6',
    NEW_PRIORITY: '30',
    NEW_NUM: '3000',
  },
  {
    DORM: '47 Claremont',
    ROOM: '2',
    FLOOR: '1',
    ROOM_TYPE: 'suite-5',
    NEW_PRIORITY: '30',
    NEW_NUM: '3000',
  },
  {
    DORM: '47 Claremont',
    ROOM: '24',
    FLOOR: '2',
    ROOM_TYPE: 'suite-3',
    NEW_PRIORITY: '30',
    NEW_NUM: '3000',
  },
  {
    DORM: '47 Claremont',
    ROOM: '23',
    FLOOR: '2',
    ROOM_TYPE: 'suite-4',
    NEW_PRIORITY: '30',
    NEW_NUM: '3000',
  },
  {
    DORM: '47 Claremont',
    ROOM: '21',
    FLOOR: '2',
    ROOM_TYPE: 'suite-7',
    NEW_PRIORITY: '30',
    NEW_NUM: '3000',
  },
  {
    DORM: '47 Claremont',
    ROOM: '22',
    FLOOR: '2',
    ROOM_TYPE: 'suite-7',
    NEW_PRIORITY: '30',
    NEW_NUM: '3000',
  },
  {
    DORM: 'River Hall',
    ROOM: '606',
    FLOOR: '6',
    ROOM_TYPE: 'single',
    NEW_PRIORITY: '',
    NEW_NUM: '',
  },
  {
    DORM: 'River Hall',
    ROOM: '607',
    FLOOR: '6',
    ROOM_TYPE: 'single',
    NEW_PRIORITY: '20',
    NEW_NUM: '1234',
  },
];

let cutoffData = [];

export default {
  title: 'FloorPlanSVG',
};

export const _47Claremont1Floorplan = () => (
  <FloorPlanSVG
    dorm="River Hall"
    floor="6"
    data={floorplanData}
    cutoffs={cutoffData}
  ></FloorPlanSVG>
);

_47Claremont1Floorplan.story = {
  name: '47 Claremont 1 floorplan',
};
