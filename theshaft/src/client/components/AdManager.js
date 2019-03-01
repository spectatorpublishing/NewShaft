import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


export default class Example extends Component {
  render() {
    return (
    <div>
      <DFPSlotsProvider dfpNetworkId="59699124">
        <div className="desktop-ads">
          <AdSlot sizes={[[300, 250]]} adUnit="app_mobile_box" />
        </div>
      </DFPSlotsProvider>
      </div>
    );
  }
}