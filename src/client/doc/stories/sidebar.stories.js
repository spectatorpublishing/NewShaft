import React from 'react';
import { storiesOf } from '@storybook/react';
import WhiteboardSidebar from "../../src/components/WhiteboardSidebar.js";

storiesOf('Sidebar', module)
  .add('whiteboard', () => <WhiteboardSidebar sidebarModification={(dorm) => console.log(dorm)}/>)
