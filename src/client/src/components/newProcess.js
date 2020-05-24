import React from "react";
import arrow from '../assets/Housing101_images/arrow.png';
import '../css/Housing101.css';
import { NavLink } from "react-router-dom";


class newProcess extends React.Component {
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
            <div class="button_phone"><a href="http://www.theshaft.info/shaftlive">go to Lottery Calculator</a></div>
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
          {/* <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/TYTGAIHE75DEFG4BIPLZBPTPMM.png" class="img_style3_phone" alt="Grey trophy"></img> */}
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
            <div class="row_phoneB rowPadTitleA">
                <div class="title2">
                The New Process
                </div>
                <div class="line">
                    __________________________________
                </div>
                <div class="subtitle">
                    What do these changes mean for <i>you</i>?
                </div>
                <img src={arrow} class="arrow_style" alt="arrow down"></img>
            </div>
            <div class="row_phoneA">
                <div class="column4">
                    <div class="row2">
                        <div class="number5">
                            1
                        </div>
                        <div class="column3">
                            <div class="item_title">
                                No more<br></br>Re-Group
                            </div>
                            <div class="textbox3">
                                Without re-group, there is no longer risk of having a group that’s too big for the remaining available suites. This impacts everyone, since more desirable dorms and suites will be selected more quickly than before.
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="column_image4">
                    <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/BIFS2E7ESRDOPIKL7P4WZ3RRZQ.png" class="img_style5" alt="No more x Person on Suites? No Problem! Just split your group and choose other options"></img>
                </div>
            </div>
            <div class="row_phoneA">
                <div class="column_image">
                    <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/SG6NPL2KPZDCJENW7W5VCP4ZYI.png" class="img_style2" alt="In a group? Only one of you can make your housing selection. Make sure that person knows your preferences!"></img>
                </div>
                <div class="column">
                    <div class="row2">
                        <div class="number4">
                            2
                        </div>
                        <div class="column3">
                            <div class="item_title">
                                Responsibility of Group Leader
                            </div>          
                            <div class="textbox">
                                For housing groups with more than one individual, one group member will be designated the group leader. This person is responsible for making the groups official housing selection during their appointment. Be sure your group leader knows everybody’s preferences and has a list of options ready to go.
                            </div>
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
                                Avoid Chaos: <br></br>Communicate!
                            </div>
                            <div class="textbox3">
                                For groups that may be split up due to all suites their size being taken, members should communicate what their living preferences are to each other and their group leader. Members should also settle on back-up plans, since housing selection can be unpredictable and ideal outcomes are not guaranteed.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column_image2">
                    <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/3C7BMAXUSBCSHCDYNZIDRKNWZE.png" class="img_style5" alt="People have different preferences. If you are in a group, communicate your wants and plan together!"></img>
                </div>
            </div>
          <div class="row_phoneA">
            <div class="column_image">
              <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/QMQCH2L25JCEZPWKJCR6UZVO6M.png" class="img_style2" alt="Be informed and minimize regret: Use theShaft's tools and consult friends to set realistic but satisfactory expectations!"></img>
            </div>
            <div class="column">
                <div class="row2">
                    <div class="number4">
                        4
                    </div>
                    <div class="column3">
                        <div class="item_title">
                            Set Realistic Expectations
                        </div>                    
                        <div class="textbox">
                            Avoid disappointment the day of your housing selection appointment. Use theShaft’s Lottery Predictor feature to determine a list of satisfying safe, target, and dream housing choices before your appointment.
                        </div>
                        <div class="button2"><a href="http://www.theshaft.info/shaftlive">go to Lottery Calculator</a></div>
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
                    Be Informed:<br></br>Use the<strong>SHAFT</strong>
                </div>
                </div>              
                </div>
            </div>
            <div class="column5">
              <div class="column">
              <div class="textbox2">
              Learn how to use theShaft’s suite of new features to transform your housing experience.
              </div>
              <div class="button3"><NavLink exact to="/">learn more here</NavLink></div>
              </div>
              <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/TYTGAIHE75DEFG4BIPLZBPTPMM.png" class="img_style4" alt="Grey trophy"></img>
            </div>
          </div>  
        </div>
      );
    }
  }
}
  
export default newProcess;
