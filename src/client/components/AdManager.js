/** Component that generates mobile and desktop ads */

import React from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


const AdManager = (props) => {
  if(props.mobile){
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
              <AdSlot sizes={[[728, 90]]} adUnit={this.props.name} />
            </div>
          </DFPSlotsProvider>
          </div>
        );

    }
    
  }

export default AdManager;