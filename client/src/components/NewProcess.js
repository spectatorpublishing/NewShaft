import React from "react";
import arrow from '../assets/Housing101_images/arrow.png';
import '../css/Housing101.css';
import { NavLink } from "react-router-dom";

const DashedLine = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="816" height="3" viewBox="0 0 816 3" fill="none">
      <path d="M0 1.5H815.12" stroke="#62A8E5" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  );
};

class NewProcess extends React.Component {
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
              New Process
            </div>
            <div class="line_phone">
              __________________________________________________
            </div>
            <div class="subtitle_phone">
              What do these changes mean for <i>you</i>?
            </div>
            <img src={arrow} class="arrow_style" alt="arrow down"></img>    
          </div>
          <div class="rowPad_phone">
          <div class="row_phone2">
            <div class="number_phone">
              1
            </div>
            <div class="item_title_phone">
              No more <br></br><span class="no_line_break">Re-Group</span>
            </div>
          </div>
          <div class="row_phone">            
            <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/BIFS2E7ESRDOPIKL7P4WZ3RRZQ.png" class="img_style_phone2" alt="No more x Person on Suites? No Problem! Just split your group and choose other options"></img>
          </div>
          <div class="row_phone">
            <div class="textbox_phone">
              Without re-group, there is no longer risk of having a group that’s too big for the remaining available suites. This impacts <i>everyone</i>, since more desirable dorms and suites will be selected more quickly than before.
            </div>
          </div>
          </div>
          <div class="rowPad_phone">
          <div class="row_phone2">
            <div class="number_phone">
              2
            </div>
            <div class="item_title_phone">
              Responsibility of Group Leader
            </div>
          </div>
          <div class="row_phone">            
            <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/SG6NPL2KPZDCJENW7W5VCP4ZYI.png" class="img_style_phone2" alt="In a group? Only one of you can make your housing selection. Make sure that person knows your preferences!"></img>
          </div>
          <div class="row_phone">
            <div class="textbox_phone">
              For housing groups with more than one individual, one group member will be designated the group leader. This person is responsible for making the groups official housing selection during their appointment. Be sure your group leader knows everybody’s preferences and has a list of options ready to go.
            </div>
          </div>
          </div>
          <div class="rowPad_phone">
          <div class="row_phone2">
            <div class="number_phone">
              3
            </div>
            <div class="item_title_phone">
              Avoid Chaos: <br></br>Communicate!
            </div>
          </div>
          <div class="row_phone">            
            <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/3C7BMAXUSBCSHCDYNZIDRKNWZE.png" class="img_style_phone2" alt="People have different preferences. If you are in a group, communicate your wants and plan together!"></img>
          </div>
          <div class="row_phone">
            <div class="textbox_phone">
              For groups that may be split up due to all suites their size being taken, members should communicate what their living preferences are to each other and their group leader. Members should also settle on back-up plans, since housing selection can be unpredictable and ideal outcomes are not guaranteed. 
            </div>
          </div>
          </div>
          <div class="rowPad_phone">
          <div class="row_phone2">
            <div class="number_phone">
              4
            </div>
            <div class="item_title_phone">
              Set Realistic Expectations
            </div>
          </div>
          <div class="row_phone">            
            <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/QMQCH2L25JCEZPWKJCR6UZVO6M.png" class="img_style_phone2" alt="Be informed and minimize regret: Use theShaft's tools and consult friends to set realistic but satisfactory expectations!"></img>
          </div>
          <div class="row_phone">
            <div class="textbox_phone">
              Avoid disappointment the day of your housing selection appointment. Use theShaft’s Lottery Predictor feature to determine a list of satisfying safe, target, and dream housing choices before your appointment. 
            </div>
            <div class="textbox_phone">
               Keep in mind that the Lottery Predictor <span style={{ color: '#62A8E5' }}>does not provide any guarantee</span> for selection options.
            </div>
            <div class="button_phone"><a href="http://www.theshaft.info/lottery">go to Lottery Calculator</a></div>
          </div>
          </div>
          <div class="rowPad_phone">
          <div class="row_phone2">
            <div class="number_phone">
              5
            </div>
            <div class="item_title_phone">
              Be Informed: <br></br>Use the<strong>SHAFT</strong>
            </div>
            {/* <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/TYTGAIHE75DEFG4BIPLZBPTPMM.png" class="img_style3_phone" alt="Grey trophy"></img> */}
          </div>
          <div class="row_phone">
            <div class="textbox2_phone">
            Learn how to use theShaft’s suite of new features to transform your housing experience.
            </div>
            <div class="button_phone"><NavLink exact to="/">learn more here</NavLink></div>
          </div>
          </div>
        </div>
      )
    } else {
      return (
        <div class="page-wrapper">
          <div class="item_title">
            No more <strong>Re-Group</strong>
          </div>
            <div class="row_phoneA">
                <div class="column">
                    <div class="row2">
                        <div class="column3">
                            
                            <div class="textbox3">
                                Without re-group, there is no longer a risk of having a group that’s <u>too big</u> for the remaining available suites. This impacts everyone, since more desirable dorms and suites will be <u>selected quicker</u> than before.
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="column_image">
                    <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/BIFS2E7ESRDOPIKL7P4WZ3RRZQ.png" class="img_style8" alt="No more x Person on Suites? No Problem! Just split your group and choose other options"></img>
                </div>
            </div>
            <div class="line">
                <DashedLine />
            </div>
            <div class="item_title">
              Responsibility of <strong>Group Leader</strong>
            </div>   
            <div class="row_phoneA">
              <div class="column">
                    <div class="row2">
                        <div class="column3">   
                            <div class="textbox3">
                              For housing groups with more than one individual, one group member will be designated the <span class="bluetxt">group leader</span>. This person is responsible for making the group’s official housing selection during their appointment. Be sure your group leader knows everybody’s preferences and has a list of options ready to go. Do not make the mistake of underestimating the importance of a group leader’s role.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column_image">
                    <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/SG6NPL2KPZDCJENW7W5VCP4ZYI.png" class="img_style8" alt="In a group? Only one of you can make your housing selection. Make sure that person knows your preferences!"></img>
                </div>
                
            </div>
            <div class="line">
                <DashedLine />
            </div>
            <div class="item_title">
             Avoid Chaos: <strong>Communicate!</strong>
            </div>
            <div class="row_phoneA">
                <div class="column">
                    <div class="row2">
                        <div class="column3">
                            <div class="textbox3">
                                For groups that may be split up due to all suites their size being taken, members should <span class="bluetxt">communicate</span> what their living preferences are to each other and their group leader. Members should also settle on <span class="bluetxt">back-up plans</span>, since housing selection can be unpredictable and ideal outcomes are not guaranteed.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column_image">
                    <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/3C7BMAXUSBCSHCDYNZIDRKNWZE.png" class="img_style8" alt="People have different preferences. If you are in a group, communicate your wants and plan together!"></img>
                </div>
            </div>
          <div class="line">
            <DashedLine />
          </div>
          <div class="item_title">
            Set <strong>Realistic Expectations</strong>
           </div> 
          <div class="row_phoneA">
            <div class="column">
                <div class="row2">
                    <div class="column3">                   
                        <div class="textbox">
                            Avoid disappointment the day of your housing selection appointment. Use theShaft’s Lottery Predictor feature to determine a list of satisfying safe, target, and dream housing choices before your appointment.
                        </div>
                        <div class="textboxSmall">
                          Keep in mind that the Lottery Predictor <span style={{ color: '#62A8E5' }}>does not provide any guarantee</span> for selection options.
                        </div>
                        <div class="button2"><a href="http://www.theshaft.info/lottery">go to <strong>Lottery Calculator</strong></a></div>
                    </div>
                </div>
            </div>
            <div class="column_image">
              <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/QMQCH2L25JCEZPWKJCR6UZVO6M.png" class="img_style8" alt="Be informed and minimize regret: Use theShaft's tools and consult friends to set realistic but satisfactory expectations!"></img>
            </div>
          </div>
          <div class="line">
            <DashedLine />
          </div>
          <div class="item_title">
            Be Informed: Use the<strong>SHAFT</strong>
          </div>
          <div class="row_phoneA">
            <div class="column5">
              <div class="column">
              <div class="textbox4">
              Learn how to use theShaft’s suite of new features to transform your housing experience.
              </div>
              <div class="button3"><NavLink exact to="/">Return Home</NavLink></div>
              </div>
            </div>
          </div>  
        </div>
      );
    }
  }
}
  
export default NewProcess;
