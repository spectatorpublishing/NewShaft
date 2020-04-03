import React from "react";
import arrow from '../assets/Housing101_images/arrow.png';
import one from '../assets/Housing101_images/one.png';
import two from '../assets/Housing101_images/two.png';
import three from '../assets/Housing101_images/three.png';
import four from '../assets/Housing101_images/four.png';
import trophy from '../assets/Housing101_images/trophy.png';

import '../css/Housing101.css';

class usingtheSHAFT extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isMobile: false,
      }
    }
  
    componentDidMount() {
      if (window.innerWidth <= 768) {
        this.setState({
          isMobile: true
        })
      } else {
        this.setState({
          isMobile: false
        })
      }
      window.addEventListener("resize", this.handleResize);
    }
  
    handleResize = () => {
      if (window.innerWidth <= 768) {
        this.setState({
          isMobile: true
        })
      } else {
        this.setState({
          isMobile: false
        })
      }
  
    }
  
    render() {
      if (this.state.isMobile) {
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
                tools and features that make housing <i>easy</i>.
              </div>
              <img src={arrow} class="arrow_style" alt="arrow down"></img>
            </div>
  
            <div class="rowPad_phone">
              <div class="row_phone2">
                <div class="number_phone">
                  1
                </div>
                <div class="item_title_phone">
                  Toggle Filters: <br></br><strong>Explore Page</strong>
                </div>
              </div>
              <div class="row_phone">            
                <img src={one} class="img_style_phone" alt="Filters"></img>
              </div>
              <div class="row_phone">
                <div class="textbox_phone">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed. In massa tempor nec feugiat nisl pretium.
                </div>
                <div class="button" href="https://www.theshaft.info/explore">go to Explore page</div>
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
                <img src={two} class="img_style_phone" alt="Lottery Calculator Graphic"></img>
              </div>
              <div class="row_phone">
                <div class="textbox_phone">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed. In massa tempor nec feugiat nisl pretium.
                </div>
                <div class="button2">go to Lottery Calculator</div>
              </div>
            </div>
  
            <div class="rowPad_phone">
              <div class="row_phone2">
                <div class="number_phone">
                  3
                </div>
                <div class="item_title_phone">
                  Weigh options: <br></br><strong>Compare Dorms</strong>
                </div>
              </div>
              <div class="row_phone">            
                <img src={three} class="img_style_phone" alt="Compare Dorms"></img>
              </div>
              <div class="row_phone">
                <div class="textbox_phone">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed. In massa tempor nec feugiat nisl pretium.
                </div>
                <div class="button2">go to Compare Dorms</div>
              </div>
            </div>
  
            <div class="rowPad_phone">
              <div class="row_phone2">
                <div class="number_phone">
                  4
                </div>
                <div class="item_title_phone">
                  Be an insider: <br></br><strong>Read Reviews</strong>
                </div>
              </div>
              <div class="row_phone">            
                <img src={four} class="img_style_phone" alt="Cat on windowsill in front of snowy scene"></img>
              </div>
              <div class="row_phone">
                <div class="textbox_phone">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed. In massa tempor nec feugiat nisl pretium.
                </div>
                <div class="button2">go to Reviews</div>
              </div>
            </div>
  
            <div class="rowPad_phone">
              <div class="row_phone2">
                <div class="number_phone">
                  5
                </div>
                <div class="item_title_phone">
                  Cheat sheet: <br></br><strong>Housing 101</strong>
                </div>
                <img src={trophy} class="img_style3_phone" alt="Cat on windowsill in front of snowy scene"></img>
              </div>
              <div class="row_phone">
                <div class="textbox2_phone">
                  With a <i>new</i> housing system, the game has changed. Know how to play and shoot your best shot.
                </div>
                <div class="button3">learn more here</div>
              </div>
            </div>

          </div>

        )
  
      } else {
        return (

          <div class="page-wrapper">
  
            <div class="row_phoneB rowPadTitleA">
              <div class="title2">
                Using the<strong>SHAFT</strong>
              </div>
              <div class="line">
                __________________________________
              </div>
              <div class="subtitle">
                tools and features that make housing <i>easy</i>.
              </div>    
              <img src={arrow} class="arrow_style" alt="arrow down"></img>
            </div>

            <div class="row_phoneC">
              <div class="column4">
                <div class="row2">
                  <div class="number5">
                    1
                  </div>
                  <div class="column3">
                    <div class="item_title">
                      Toggle filters: <br></br><strong>Explore Page</strong>
                    </div>                  
                    <div class="textbox3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed. In massa tempor nec feugiat nisl pretium.
                    </div>
                    <div class="button"><a href="https://www.theshaft.info/explore">go to Explore Page</a></div>
                    
                  </div>
                </div>
              </div>
              <div class="column_image2">
                <img src={one} class="img_style5" alt="Filters"></img>
              </div>
            </div>
  
            <div class="row_phoneA">
              <div class="column_image">
                <img src={two} class="img_style2" alt="Lottery Calculator Graphic"></img>
              </div>
  
              <div class="column">
                <div class="row2">
                  <div class="number4">
                    2
                  </div>
                  <div class="column3">
                    <div class="item_title">
                      Measure your luck: <br></br><strong>Lottery Calculator</strong>
                    </div>    
                    <div class="textbox">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed. In massa tempor nec feugiat nisl pretium.
                    </div>
                    <div class="button2">go to Lottery Calculator</div>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="row_phoneA">
              <div class="column4">
                <div class="row2">
                  <div class="number5">
                    3
                  </div>
                  <div class="column3">
                    <div class="item_title">
                      Weigh options: <br></br><strong>Compare Dorms</strong>
                    </div>              
                    <div class="textbox3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed. In massa tempor nec feugiat nisl pretium.
                    </div>
                    <div class="button2">go to Compare Dorms</div>
                  </div>
                </div>
              </div>
              <div class="column_image2">
                <img src={three} class="img_style5" alt="Compare Dorms"></img>
              </div>
            </div>
  
            <div class="row_phoneA">
              <div class="column_image">
                <img src={four} class="img_style2" alt="Reviews Graphic"></img>
              </div>
              <div class="column">
                <div class="row2">
                  <div class="number4">
                    4
                  </div>
                  <div class="column3">
                    <div class="item_title">
                      Be an insider: <br></br>Read <strong>Reviews</strong>
                    </div>            
                    <div class="textbox">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed. In massa tempor nec feugiat nisl pretium.
                    </div>
                    <div class="button2">go to Reviews</div>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="row_phoneA">
              <div class="column4">
                <div class="row3">
                  <div class="number6">
                    5
                  </div>
                  <div class="column6">
                    <div class="item_title2">
                      Cheat sheet:<br></br><strong>Housing 101</strong>
                    </div>
                  </div>    
                </div>
              </div>
              <div class="column5">
                <div class="column">
                  <div class="textbox2">
                    With a <i>new</i> housing system, the game has changed. Know how to play and shoot your best shot.
                  </div>
                  <div class="button3">learn more here</div>
                </div>
                <img src={trophy} class="img_style4" alt="trophy"></img>
              </div>
            </div>  

          </div>
        );
      }
    }
  }
  
  export default usingtheSHAFT;