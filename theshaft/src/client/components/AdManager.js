import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


export default class Example extends Component {
  render() {
    if(this.props.mobile){
      return(
      <DFPSlotsProvider dfpNetworkId="59699124">
            <div className="desktop-ads">
              <AdSlot sizes={[[320,50]]} adUnit="cds_leaderboard_mobile" />
            </div>
          </DFPSlotsProvider>
      );
    }
    else{
      return (
        <div>
          <DFPSlotsProvider dfpNetworkId="59699124">
            <div className="desktop-ads">
              <AdSlot sizes={[[728, 90]]} adUnit="shaftleader" />
            </div>
          </DFPSlotsProvider>
          </div>
        );

    }
    
  }
}