import React from 'react';
import ProCon from '../../src/components/ProCon.js';

let testPros = ['pro1', 'pro2', 'pro3'];
let testCons = ['con1', 'con2', 'con3'];

export default {
  title: 'ProCon',
};

export const ProsAndCons = () => <ProCon pros={testPros} cons={testCons}></ProCon>;

ProsAndCons.story = {
  name: 'pros and cons',
};
