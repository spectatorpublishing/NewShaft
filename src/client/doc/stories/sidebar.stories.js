import React from 'react';
import WhiteboardSidebar from '../../src/components/WhiteboardSidebar.js';

export default {
  title: 'Sidebar',
};

export const Whiteboard = () => (
  <WhiteboardSidebar sidebarModification={(dorm) => console.log(dorm)} />
);

Whiteboard.story = {
  name: 'whiteboard',
};
