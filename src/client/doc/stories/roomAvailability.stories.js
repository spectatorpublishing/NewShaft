import React from 'react';
import RoomAvailability from '../../src/components/RoomAvailability.js';
import WhiteboardTable from '../../src/components/WhiteboardTable.js';

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

export default {
  title: 'RoomAvailability',
};

export const RoomData = () => <RoomAvailability roomAvailability={sampleRoomData}/>;

RoomData.story = {
  name: 'room data',
};

export const TableComponent = () => <WhiteboardTable roomAvailability={sampleRoomData}/>;

TableComponent.story = {
  name: 'table component',
};
