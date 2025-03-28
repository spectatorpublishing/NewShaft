import React, { useEffect, useState } from "react";
import arrow from '../assets/Housing101_images/arrow.png';
import '../css/Housing101.css';

const newExplore = "https://theshaft.s3.amazonaws.com/dorms/housing101/newExplore.png";
const newOdds = "https://theshaft.s3.amazonaws.com/dorms/housing101/newOdds.png";

const DashedLine = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="816" height="3" viewBox="0 0 816 3" fill="none">
      <path d="M0 1.5H815.12" stroke="#62A8E5" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  );
};

const UsingtheSHAFT = (props) => {
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }, []);
  
      if (isMobile) {
        return (
          <div class="page-wrapper_phone">
            <div class="row_phoneB rowPadTitleA">
              <div class="title2_phone">
                Using the<strong>SHAFT</strong>
              </div>
              <div class="line_phone">
                __________________________________________________
              </div>
              <div class="subtitle_phone">
                tools and features that make <wbr></wbr><span class= "no_line_break">housing <i>easy</i>.</span>
              </div>
              <img src={arrow} class="arrow_style" alt="arrow down"></img>
            </div> 
            <div class="rowPad_phone">
              <div class="row_phone2">
                <div class="number_phone">
                  1
                </div>
                <div class="item_title_phone">
                  Toggle Filters: <br></br><strong><span class="no_line_break">Explore Page</span></strong>
                </div>
              </div>
              <div class="row_phone">            
                <img src={newExplore} class="img_style_phone" alt="Filters from explore page displayed"></img>
              </div>
              <div class="row_phone">
                <div class="textbox_phone">
                  With theShaft’s filters, it is easy to find and explore housing options that fit you or your group’s housing preferences. With our map, it is easy to see where you can or will be living in Morningside Heights!
                </div>
                <div class="button_phone"><a href="https://www.theshaft.info/explore">go to Explore Page</a></div>
              </div>
            </div>
            <div class="rowPad_phone">
              <div class="row_phone2">
                <div class="number_phone">
                  2
                </div>
                <div class="item_title_phone">
                  Measure your luck: <br></br><strong>Lottery Calculator</strong>
                </div>
              </div>
              <div class="row_phone">            
                <img src={newOdds} class="img_style_phone" alt="Lottery Calculator Graphic"></img>
              </div>
              <div class="row_phone">
                <div class="textbox_phone">
                  Our staff has been collecting Columbia Housing data for years. With theShaft’s dynamic, color-coated floor plans, you can measure your chances for living in your favorite dorm next year and be ready for room selection.
                </div>
                <div class="button_phone"><a href="https://www.theshaft.info/lottery">go to Lottery Calculator</a></div>
              </div>
            </div>
            <div class="rowPad_phone">
              <div class="row_phone2">
                <div class="number_phone">
                  3
                </div>
                <div class="item_title_phone">
                  Cheat sheet: <br></br><strong><span class="no_line_break">Housing 101</span></strong>
                </div>
                {/* <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/TYTGAIHE75DEFG4BIPLZBPTPMM.png" class="img_style3_phone" alt="Cat on windowsill in front of snowy scene"></img> */}
              </div>
              <div class="row_phone">
                <div class="textbox2_phone">
                  With a <i>new</i> housing system, the game has changed. Know how to play and shoot your best shot.
                </div>
                {/* <div class="button_phone" onClick={() => {}}>learn more here</div> */}
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div class="page-wrapper">
            <div class="item_title">
                      Toggle filters: <strong>Explore Page</strong>
                    </div> 
            <div class="row_phoneA">
              <div class="column">
                <div class="row2">
                  <div class="column3">                    
                    <div class="textbox">
                      With theShaft’s filters, it is easy to find and explore housing options that fit you or your group’s housing preferences. With our map, it is easy to see where you can or will be living in Morningside Heights!
                    </div>
                    <div class="button2"><a href="https://www.theshaft.info/explore">go to <strong>Explore Page</strong></a></div>  
                  </div>
                </div>
              </div>
              <div class="column_image">
                <img src={newExplore} class="img_style8" alt="Filters from explore page displayed"></img>
              </div>
            </div>
            <div class="line">
                <DashedLine />
            </div>
            <div class="item_title">
              Measure your luck: <strong>Lottery Calculator</strong>
            </div>   
            <div class="row_phoneA">
              <div class="column">
                <div class="row2">
                  <div class="column3">  
                    <div class="textbox">
                      Our staff has been collecting Columbia Housing data for years. With theShaft’s dynamic, color-coated floor plans, you can easily <u>measure your chances</u> for living in your favorite dorm next year and be ready for room selection.
                    </div>
                    <div class="button2"><a href="https://www.theshaft.info/lottery">go to <strong>Lottery Calculator</strong></a></div>
                  </div>
                </div>
              </div>
              <div class="column_image">
                <img src={newOdds} class="img_style8" alt="Lottery Calculator Graphic"></img>
              </div>
            </div>
            <div class="line">
                <DashedLine />
            </div>
            <div class="item_title">
                    Cheat sheet: <strong>Housing 101</strong>
                    </div> 
            <div class="row_phoneA">           
                    <div class="textbox2">
                      Know how to play and shoot your best shot.
                    </div>
                    {/* <div class="button3" onClick={() => {props.choosePage("newprocess")}}>learn more here</div> */}
          </div>
        </div>
        );
      }
    }
  
  
  export default UsingtheSHAFT;
