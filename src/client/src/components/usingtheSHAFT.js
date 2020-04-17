import React from "react";
import arrow from '../assets/Housing101_images/arrow.png';
import '../css/Housing101.css';
import { NavLink } from "react-router-dom";

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
                <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/MENVGJENTBERFBTX6FQ5KSBF2Q.png" class="img_style_phone" alt="Filters from explore page displayed"></img>
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
                <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FTG222DCMZB6DI5SKTMGMTRGCQ.png" class="img_style_phone" alt="Lottery Calculator Graphic"></img>
              </div>
              <div class="row_phone">
                <div class="textbox_phone">
                  Our staff has been collecting Columbia Housing data for years. With theShaft’s dynamic, color-coated floor plans, you can measure your chances for living in your favorite dorm next year and be ready for room selection.
                </div>
                <div class="button_phone"><a href="https://www.theshaft.info/shaftlive">go to Lottery Calculator</a></div>
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
                <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WDHCGRLWDVCX5HUHUAQZPWYCJA.png" class="img_style_phone" alt="Compare Dorms"></img>
              </div>
              <div class="row_phone">
                <div class="textbox_phone">
                  There are a myriad of housing options and dorm styles at Columbia. Having a hard time choosing? With theShaft’s compare feature, you can compare building amenities and student reviews for dorms.
                </div>
                <div class="disabled_phone">go to Compare Dorms</div>               
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
                <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/BKUPQ4FO5NE6HJRSTYFB52FYT4.png" class="img_style_phone" alt="Reviews Function Example"></img>
              </div>
              <div class="row_phone">
                <div class="textbox_phone">
                  With theShaft’s reviews page, read actual housing experiences of Columbia students before you. With up- and down-vote functionality, you can gauge how much other students resonate with their experiences.
                </div>
                <div class="button_phone"><a href="https://www.theshaft.info/reviews">go to Reviews</a></div>
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
                <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/TYTGAIHE75DEFG4BIPLZBPTPMM.png" class="img_style3_phone" alt="Cat on windowsill in front of snowy scene"></img>
              </div>
              <div class="row_phone">
                <div class="textbox2_phone">
                  With a <i>new</i> housing system, the game has changed. Know how to play and shoot your best shot.
                </div>
                <div class="button_phone"><NavLink to="/newProcess">learn more here</NavLink></div>
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
                      With theShaft’s filters, it is easy to find and explore housing options that fit you or your group’s housing preferences. With our map, it is easy to see where you can or will be living in Morningside Heights!
                    </div>
                    <div class="button2"><a href="https://www.theshaft.info/explore">go to Explore Page</a></div>  
                  </div>
                </div>
              </div>
              <div class="column_image2">
                <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/MENVGJENTBERFBTX6FQ5KSBF2Q.png" class="img_style7" alt="Filters from explore page displayed"></img>
              </div>
            </div>
            <div class="row_phoneA">
              <div class="column_image">
                <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FTG222DCMZB6DI5SKTMGMTRGCQ.png" class="img_style8" alt="Lottery Calculator Graphic"></img>
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
                      Our staff has been collecting Columbia Housing data for years. With theShaft’s dynamic, color-coated floor plans, you can measure your chances for living in your favorite dorm next year and be ready for room selection.
                    </div>
                    <div class="button2"><a href="https://www.theshaft.info/shaftlive">go to Lottery Calculator</a></div>
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
                      There are a myriad of housing options and dorm styles at Columbia. Having a hard time choosing? With theShaft’s compare feature, you can compare building amenities and student reviews for dorms.
                    </div>
                    <div class="disabled">go to Compare Dorms</div>
                  </div>
                </div>
              </div>
              <div class="column_image2">
                <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WDHCGRLWDVCX5HUHUAQZPWYCJA.png" class="img_style5" alt="Compare Dorms"></img>
              </div>
            </div>
            <div class="row_phoneA">
              <div class="column_image">
                <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/BKUPQ4FO5NE6HJRSTYFB52FYT4.png" class="img_style2" alt="Reviews Function Example"></img>
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
                      With theShaft’s reviews page, read actual housing experiences of Columbia students before you. With up- and down-vote functionality, you can gauge how much other students resonate with their experiences.
                    </div>
                    <div class="button2"><a href="https://www.theshaft.info/reviews">go to Reviews</a></div>
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
                  <div class="button3"><NavLink to="/newProcess">learn more here</NavLink></div>
                </div>
                <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/TYTGAIHE75DEFG4BIPLZBPTPMM.png" class="img_style4" alt="trophy"></img>
              </div>
            </div>  
          </div>
        );
      }
    }
  }
  
  export default usingtheSHAFT;
