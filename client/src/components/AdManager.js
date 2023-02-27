/** Renders Ad from our DFP Ad Slot provider, based on props passed in
 *  Inspired by : https://github.com/oahehc/dfp-examples/tree/master/react-dfp/src
 *
 *  Example AdSlot Sizes                (width, height)
 *      cds_horizontal_box              (720, 300)
 *      cds_horizontal_box_mobile       (300, 250)
 *      house                           (375, 90)
 *      cds_leaderboard                 (728, 90)
 *      cds_leaderboard_mobile          (320, 50)
 *      cds_vertical_box                (300, 600)
 */

import React from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import styled from "styled-components/macro";

let AdCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const AdManager = (props) => {
  return(
    <AdCenter style = {{marginBottom: 25,marginTop: 25 }}>
      <DFPSlotsProvider dfpNetworkId="59699124">
        <div>
          <AdSlot
            class="adslot"
            sizes={[[props.width, props.height]]}
            adUnit={props.path}
          />
        </div>
      </DFPSlotsProvider>
    </AdCenter>
  );
}

export default AdManager;