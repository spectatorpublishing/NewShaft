import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


export default class Example extends Component {
  render() {
    return (
    <div>
      <DFPSlotsProvider dfpNetworkId="59699124">
        <div className="desktop-ads">
          <AdSlot sizes={[[728, 90]]} adUnit="cds_leaderboard" />
        </div>
      </DFPSlotsProvider>
      </div>
    );
  }
}