import React from 'react';
import { storiesOf } from '@storybook/react';
import ProCon from '../../src/components/ProCon.js';

let testPros = ["pro1", "pro2", "pro3"];
let testCons = ["con1", "con2", "con3"];
storiesOf('ProCon', module)
  .add('pros and cons', () => <ProCon pros={testPros} cons={testCons}></ProCon>);
