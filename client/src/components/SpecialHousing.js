import React from "react";
import arrow from '../assets/Housing101_images/arrow.png';
import '../css/Housing101.css';

const DashedLine = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="816" height="3" viewBox="0 0 816 3" fill="none">
      <path d="M0 1.5H815.12" stroke="#62A8E5" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  );
};

class SpecialHousing extends React.Component {
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
              Special Housing
            </div>
            <div class="line_phone">
              __________________________________________________
            </div>
            <div class="subtitle_phone">
              Take the road less traveled?
            </div>          
            <img src={arrow} class="arrow_style" alt="arrow down"></img>
          </div>
          <div class="rowPad_phone">
          <div class="row_phone2">
            <div class="number_phone">
              1
            </div>
            <div class="item_title_phone">
              Barnard<wbr></wbr>/Columbia<br></br>Housing Swap
            </div>
          </div>
          <div class="row_phone">            
            <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/A52GXZNKARCNTPOFZFWM2QOEPI.jpg" class="img_style_phone" alt="East Campus Front View Courtyard"></img>
          </div>
          <div class="row_phone">
            <div class="textbox_phone">
              Is this possible? Yes! Are there risks? Yes. Know that only 30-40 students every year manage to live with their cross-college counterparts every year.
            </div>
          <div class="button_phone"><a href="https://www.columbiaspectator.com/spectrum/2019/03/05/what-is-the-bccu-housing-exchange/">read more here</a></div>
          </div>
          </div>
          <div class="rowPad_phone">
          <div class="row_phone2">
            <div class="number_phone">
              2
            </div>
            <div class="item_title_phone">
              Special Interest<br></br>Communities
            </div>
          </div>
          <div class="row_phone">            
            <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/UZE2LRR3NNHDVONKASVKFVYHFA.jpg" class="img_style_phone" alt="Front view of SIC building"></img>
          </div>
          <div class="row_phone">
            <div class="textbox_phone">
              Interested in living in a community with a shared-interest? Prefer to live in a brownstone over a traditional dormitory? Special Interest Communities (SICs) might be the move for you!
            </div>
            <div class="button_phone"><a href="https://www.columbiaspectator.com/spectrum/2019/01/28/hack-housing-what-are-special-interest-communities/">read more on SICs</a></div>
          </div>
          </div>
          {/* <div class="rowPad_phone">
          <div class="row_phone2">
            <div class="number_phone">
              3
            </div>
            <div class="item_title_phone">
              Living Learning<br></br>Center
            </div>
          </div>
          <div class="row_phone">            
            <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/EDTWETP7TRHHPFY6NC3ZX22A5I.jpg" class="img_style_phone" alt="Wallach Building Front"></img>
          </div>
          <div class="row_phone">
            <div class="textbox_phone">
              Looking for a coveted sophomore-single? Love the convenience of living on the Quad? Want to experience an active, robust residential community after freshman year? Check out the Living-Learning Center.
            </div>
            <div class="button_phone"><a href="https://www.columbiaspectator.com/spectrum/2017/01/19/thinking-living-living-learning-center-heres-how-apply/">read more on LLC</a></div>
          </div>
          </div> */}
          <div class="rowPad_phone">
          <div class="row_phone2">
            <div class="number_phone">
              3
            </div>
            <div class="item_title_phone">
              Become a<br></br>Resident Advisor
            </div>
          </div>
          <div class="row_phone">            
            <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/73F4GONETRCNHP3HBMI6IRFPGQ.jpg" class="img_style_phone" alt="Group of RAs"></img>
          </div>
          <div class="row_phone">
            <div class="textbox_phone">
              Interested in making your residential community a warm, safe home for others? Attracted to free housing, a guaranteed single, and wonderful lively residential life staff? Consider being an RA.
            </div>
            <div class="button_phone"><a href="https://www.cc-seas.columbia.edu/reslife/working/RA">learn more about the role</a></div>
          </div>
          </div>
          <div class="rowPad_phone">
          <div class="row_phone2">
            <div class="number_phone">
              4
            </div>
            <div class="item_title_phone">
              Disability Services<br></br>and Housing
            </div>
          </div>
          <div class="row_phone">            
            <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/DT7CPFKRK5ASFERKEGIMYK5TVM.jpg" class="img_style_phone" alt="Wien Hall Front of Building"></img>
          </div>
          <div class="row_phone">
            <div class="textbox_phone">
             Columbia now offers fantastic housing benefits for students with disabilities, including the ability to choose a friend to live with (in a suite) or next door to (in a hall) you! Find out more below.
            </div>
            <div class="button_phone"><a href="https://roomselection.housing.columbia.edu/content/disability-housing-accommodations">ODS housing accommodations</a></div>
            <div class="button_phone"><a href="https://barnard.edu/disabilityservices/housing-accommodations">CARDS housing accommodations</a></div>
          </div>
          </div>
          <div class="rowPad_phone">
          <div class="row_phone2">
            <div class="number_phone">
              5
            </div>
            <div class="item_title_phone">
              Studying Abroad
            </div>
          </div>
          <div class="row_phone">            
            <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/KXP4LGCJFJFHTBR3I5EUMA4GP4.jpg" class="img_style_phone" alt="Flags in front of Low Library"></img>
          </div>
          <div class="row_phone">
            <div class="textbox_phone">
              Yes, you can study abroad and return with guaranteed housing! Make sure to take the right steps to ensure you do not lose your guaranteed-housing status.
            </div>
            <div class="button_phone"><a href="https://roomselection.housing.columbia.edu/content/study-abroad">more information</a></div>
          </div>
          </div>
          <div class="rowPad_phone">
          <div class="row_phone2">
            <div class="number_phone">
              6
            </div>
            <div class="item_title_phone">
              Explore<br></br>Housing <br></br>On the<strong>SHAFT</strong>
            </div>
            {/* <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/TYTGAIHE75DEFG4BIPLZBPTPMM.png" class="img_style3_phone" alt="Cat on windowsill in front of snowy scene"></img> */}
          </div>
          <div class="row_phone">
            <div class="textbox2_phone">
            Ready to use theShaft’s suite of new features to transform your housing experience?
            </div>
            <div class="button_phone"><a href="https://www.theshaft.info/explore">learn more here</a></div>
          </div>
          </div>
        </div>
      )
    } else {
      return (
        <div class="page-wrapper">
          <div class="item_title">
            Barnard<wbr></wbr>/Columbia <strong>Housing Swap</strong>
          </div>
            <div class="row_phoneA">
                <div class="column">
                    <div class="row2">
                        <div class="column3">
                            <div class="textbox3">
                            Is this possible? Yes! Is it guaranteed? No. Know that the number of students who live with their cross-college counterparts every year varies based first on the sorority and SIC exchange, then by the number of students who express interest in participating in the exchange. This may change year to year. For the most up to date information, please visit Columbia Housing.
                            </div>
                            <div class="button2"><a href="https://www.columbiaspectator.com/spectrum/2019/03/05/what-is-the-bccu-housing-exchange/">Read more here</a></div>
                        </div>
                    </div>
                </div>
                <div class="column_image">
                    <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/A52GXZNKARCNTPOFZFWM2QOEPI.jpg" class="img_style9" alt="East Campus Front View Courtyard"></img>
                </div>
            </div>
            <div class="line">
                <DashedLine />
            </div>
            <div class="item_title">
              Special Interest Communities
            </div>
            <div class="row_phoneA">
                <div class="column">
                    <div class="row2">
                        <div class="column3">
                            <div class="textbox">
                                Interested in living in a community with a shared-interest? Prefer to live in a brownstone over a traditional dormitory? Special Interest Communities (SICs) might be the move for you!
                            </div>
                            <div class="button2"><a href="https://www.columbiaspectator.com/spectrum/2019/01/28/hack-housing-what-are-special-interest-communities/">Read more on SICs</a></div>
                        </div>
                    </div>
                </div>
                <div class="column_image">
                    <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/UZE2LRR3NNHDVONKASVKFVYHFA.jpg" class="img_style1" alt="Front view of SIC building"></img>
                </div>
            </div>
            <div class="line">
                <DashedLine />
            </div>
            {/* <div class="row_phoneA">
                <div class="column4">
                    <div class="row2">
                        <div class="number5">
                            3
                        </div>
                        <div class="column3">
                            <div class="item_title">
                                Living Learning<br></br>Center
                            </div>
                            <div class="textbox3">
                                Looking for a coveted sophomore-single? Love the convenience of living on the Quad? Want to experience an active, robust residential community after freshman year? Check out the Living-Learning Center.
                            </div>
                            <div class="button2"><a href="https://www.columbiaspectator.com/spectrum/2017/01/19/thinking-living-living-learning-center-heres-how-apply/">read more on LLC</a></div>
                        </div>
                    </div>
                </div>
                <div class="column_image2">
                    <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/EDTWETP7TRHHPFY6NC3ZX22A5I.jpg" class="img_style9" alt="Wallach Building Front"></img>
                </div>
            </div> */}
          <div class="item_title">
                            Become a Resident Advisor
                        </div>   
          <div class="row_phoneA">
            <div class="column">
                <div class="row2">
                    <div class="column3">       
                        <div class="textbox">
                            Interested in making your residential community a warm, safe home for others? Attracted to free housing, a guaranteed single, and wonderful lively residential life staff? Consider being an RA.
                        </div>
                        <div class="button2"><a href="https://www.cc-seas.columbia.edu/reslife/working/RA">Learn more about the role</a></div>
                    </div>
                </div>
            </div>
            <div class="column_image">
              <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/73F4GONETRCNHP3HBMI6IRFPGQ.jpg" class="img_style1" alt="Group of RAs"></img>
            </div>
          </div>
          <div class="line">
                <DashedLine />
            </div>
            <div class="item_title">
                                Disability Services and Housing
                            </div>
          <div class="row_phoneA">
                <div class="column">
                    <div class="row2">
                        <div class="column3">
                            
                            <div class="textbox3">
                                Columbia now offers fantastic housing benefits for students with disabilities, including the ability to choose a friend to live with (in a suite) or next door to (in a hall) you! Find out more below.
                            </div>
                            <div class="button2"><a href="https://roomselection.housing.columbia.edu/content/disability-housing-accommodations">ODS Housing accommodations</a></div>
                            <div class="button2"><a href="https://barnard.edu/disabilityservices/housing-accommodations">CARDS Housing accommodations</a></div>
                        </div>
                    </div>
                </div>
                <div class="column_image">
                    <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/DT7CPFKRK5ASFERKEGIMYK5TVM.jpg" class="img_style9" alt="Wien Hall Front of Building"></img>
                </div>
            </div>
            <div class="line">
                <DashedLine />
            </div>
            <div class="item_title">
                            Studying Abroad
                        </div>
          <div class="row_phoneA">
            <div class="column">
                <div class="row2">
                    <div class="column3">
                        <div class="textbox">
                            Yes, you can study abroad and return with guaranteed housing! Make sure to take the right steps to ensure you do not lose your guaranteed-housing status.
                        </div>
                         <div class="button2"><a href="https://roomselection.housing.columbia.edu/content/study-abroad">Learn more</a></div>
                    </div>
                </div>
            </div>
            <div class="column_image">
              <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/KXP4LGCJFJFHTBR3I5EUMA4GP4.jpg" class="img_style1" alt="Flags in front of Low Library"></img>
            </div>
          </div>
          <div class="line">
                <DashedLine />
            </div>
            <div class="item_title">
                    Explore Housing On the<strong>SHAFT</strong>
                </div>
          <div class="row_phoneA">
            <div class="column5">
              <div class="column">
              <div class="textbox4">
               Ready to use theShaft’s suite of new features to transform your housing experience?
              </div>
              <div class="button3"><a href="http://www.theshaft.info">Return Home</a></div>
              </div>
            </div>
          </div>  
        </div>
      );
    }
  }
}
  
export default SpecialHousing;
