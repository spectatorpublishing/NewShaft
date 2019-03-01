import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


export default class Example extends Component {
  render() {
    return (
    <div>
        <h1> Advertisement</h1>
      <DFPSlotsProvider dfpNetworkId="59699124">
        <div className="desktop-ads">
          <AdSlot sizes={[[720, 300]]} adUnit="/59699124/cds_horizontal_box" />
        </div>
      </DFPSlotsProvider>
      </div>
    );
  }
}