import React, { Component } from 'react';
import styled from "styled-components";
import FloorButton from "../components/FloorButton.js";
import FloorPlanSVG from "../components/FloorPlanSVG"
import ReactTooltip from 'react-tooltip';
import "../css/ShaftLive.css";
import {theme} from '../util/GlobalStyles.js';
import _ from "lodash"
import WhiteboardSidebar from '../components/WhiteboardSidebar.js';

let BlueBGMobile = styled.div`
  background-color: gray;
  padding-left: 0.5rem;
  padding-right: 0.8rem;
  border-bottom: solid 0.75rem white;
`

let MobileFPWrapper = styled.div`
  margin-top: 1rem;
`

let ShaftLiveContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 auto;
    overflow: hidden;
    flex-direction: row;
`

let SVGContainer = styled.div`
    display:flex;
    flex-direction:column;
    height:auto;
    margin-top:3.5rem;
    width: 40vw;
    height:auto;
    object-position:cover;
    padding-right:3vw;
`
let FloorPlanTitle = styled.h3`
    margin-bottom: 0.25rem;
    display: inline;
  `
let FloorPlanPrompt = styled.h5`
  display: inline;
`

let ShaftLiveContainerMobile = styled.div`
    overflow: hidden;
    flex-direction: column;
    align-items: center;
`

let ColOne = styled.div`
  display: flex;
  width: 20%;
  @media(max-width: 991px){
      display:flex;
      width:50vw;
  }
`
let ColTwo = styled.div`
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
    padding-left: 5%;
    margin-right:2rem;
    width: ${({ mobile }) => (mobile ? `100%` : `40%`)};
    @media(max-width: 991px){
        display: flex;
        flex-direction: column;
        scroll-behavior: smooth;
        width:60vw;
    }
    &>h1 {
      margin-top: 2.5rem;
    }
`
let LikelyColor = styled.div`
    display: inline-block;
    width: 36px;
    margin-left: 3rem;
    margin-right: 0.5rem;
    height: 12px;
    background: #A9DF97;
    border-radius: 5px;
`
let PossibleColor = styled(LikelyColor)`
    background: #F8BA82;
`
let UnlikelyColor = styled(LikelyColor)`
    background: #E7E7E7;

`
let ColThree = styled.div`
    width:50vw;
`
let DormName = styled.h1`
  background-color: ${props => props.theme.columbiaBlue};
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
  align-self:flex-start;
  border-radius: 0px 20px 20px 0px;
  pointer-events: initial;
  margin-top: 1rem;
  max-width: 90vw;
  padding: 2vw;
  padding-left: 5vw;
`;
let ToggleMobileView = styled.div`
    height: 50px;
    display: flex;
    position: relative;
    z-index: 1;
    align-items: center;
    color: ${props => props.theme.black};
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.3);
    &>div{
      flex-grow: 1;
      text-align: center;
      margin: 0 10%;
      padding: 10px 0;
    }
    &>div:nth-child(2n+${props => String(props.currActive)}){
      border-bottom: 5px solid ${props => props.theme.columbiaBlue};
    }
`

let ColorBox = styled.div`
  height: 1rem;
  width: 2.5rem;
  opacity: 0.3;
  display: inline-block;
  margin-right: 0.3rem;
`

let GreenBox = styled(ColorBox)`
  background: green;
`

let YellowBox = styled(ColorBox)`
  background: yellow;
`

let FloorPlanLegend = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 992px){
    text-align: center;
  }
`

let LegendItem = styled.div`
  display: flex;
`

let Converter = styled.div`
  padding: 6rem 0rem 1rem 3rem;
  display: flex;
  position: relative;
  flex-direction: column;
  color: #3E3E3E;
  @media(max-width: 991px){
    padding: 7rem 0rem 0rem 1rem;
}
`

let Input = styled.form`
  color: #3E3E3E;
  font-size: 3rem;
  @media(max-width: 991px){
    font-size: 1.8rem;
  }
`
let StyleInput = styled.input`
  border: solid 0.1rem #D0D0D0;
  width: 5%;
  border-radius: 3px;
  color: #3E3E3E;
  font-size: 1rem;
  @media(max-width: 991px){
    font-size: 1.8rem;
  }
  margin-right: 1rem;
`
let MobileStyleInput = styled.input`
  width: 20%;

`
let InputLabel = styled.label`
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #3E3E3E;
`
let Output = styled.div`
  padding-top: 0.8rem;
  padding-bottom: 0.6rem;
  color: #3E3E3E;
  font-size: 2.5rem;
  font-weight: bold;
  @media(max-width: 991px){
    font-size: 1.4rem;
  }
`

let Desc = styled.div`
  color: #3E3E3E;
  display: inline;
  font-size: 1.1rem;
  padding-top: 0.65rem;
  
  padding-bottom: 0.65rem;
  @media(max-width: 991px){
    font-size: 1.0rem;
    padding-right:1rem
  }
`

let About = styled.div`
   padding-top: 1.0rem;
   padding-left: 0.5rem;
   text-decoration: none;
   font-size: 1.25rem;
`;

let Info= styled.div`
  line-height: 20px;
  margin-left: 0.75rem;
  color: white;
  text-align: center;
  font-weight: bold;
  font-family: Raleway;
  height: 20px;
  width: 20px;
  background: #9F9F9F;
  border-radius: 50%;
  display: inline-block;
  
  &:hover {

  }
`
let Blurb = styled(ReactTooltip)`
  max-width: 26vw;
  min-width: 20vw;
  border-radius: 5px;

`
let MobileBlurb = styled(Blurb)`
  align-self: center;
  min-width: 70vw;

`
let InfoText= styled.div`
  font-size: 18px;
  font-family: Raleway;
  color:white;
  margin-bottom: 10px;
`
let Hover = styled.div`
  display: inline;
  position: relative;
  flex-direction: column;
  align-items: center;
`
let Arrow = styled.div`
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-bottom: 5px solid black;
`

export default class ShaftLive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dorm: "47 Claremont",
      dormRefresh: false,
      floor: "1",
      floorNums: null,
      floorData: [],
      width: window.innerWidth,
      init: true,
      //update: false,
      mobileShowFloorPlan: false,

      convertedNumLow: null,
      convertedNumHigh: null,
      priority: null,
      full: " "
    }

    this.handleFloorChange = this.handleFloorChange.bind(this)
    this.handleDormChange = this.handleDormChange.bind(this)
  }
  

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    document.title = "Shaft Live";
    this.fetchFloorNums(this.state.dorm)
    this.interval = setInterval(() => this.fetchFloorData(this.state.dorm, this.state.floor), 15000);

  }

  fetchFloorNums(dormName) {
    fetch(`/api/getUniqueFloorNumbers/${dormName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(floorNums => {
        this.setState({ floorNums: floorNums });
      });
  }

  fetchFloorData(dorm, floor) {
    fetch(`/api/getLotteryNum/${dorm}/${floor}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
      .then(response => {
        this.setState({
          dorm: dorm,
          dormRefresh: !this.state.dormRefresh,
          floor: floor,
          floorData: response
        });
      }
      );
      //console.log(this.state.dorm, this.state.floor, this.state.floorData)
  }

  isHovering(){
    return {
      hover: false
    };
  }
  mouseEnter = () => {
    this.setState({ hover: true });
  }
  mouseLeave = () => {
    this.setState({ hover: false });
  }

  convertNumber() {
    var num = document.getElementById("userNum").value;

    //console.log("in: ", num);
    var thousands = (num - (num%1000))/1000
    //console.log("thousands: ", thousands);
    if (thousands == 0) {
      var priority = 30;
    }
    else if (thousands == 1){
      var priority = 25;
    }
    else if (thousands == 2){
      var priority = 20;
    }
    else if (thousands == 3){
      var priority = 15;
    }
    else {
      var priority = 10;
    }
    //console.log("priority: ", priority)
    var converted = (num - (thousands * 1000)) * (3000/1000)
    //console.log("converted num: ", converted)
    var rounded = converted - (converted%10)
    if (rounded < 40) {
      var low = 0;
    }
    else {
      var low = rounded - 50
    }
    if (rounded > 2950) {
      var high = 3000;
    }
    else {
      var high = rounded + 50
    }
    //console.log("range: ", low, " - ", high)
    
    this.setState({
      convertedNumLow: low,
      convertedNumHigh: high,
      priority: priority,
      full: priority + " | " + low + " - " + high,
    })


  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleFloorChange(floor) {
    this.fetchFloorData(this.state.dorm, floor);
  }

  handleDormChange(dorm) {

    const firstFloor = {
      "47 Claremont": "1",
      "Broadway Hall": "3",
      "Carlton Arms": "1A",
      "East Campus": "6",
      "Furnald Hall": "1",
      "Harmony Hall": "1",
      "Hogan Hall": "2",
      "McBain Hall": "1",
      "600 W 113th": "2",
      "River Hall": "1",
      "Ruggles Hall": "1",
      "Schapiro Hall": "2",
      "Watt Hall": "1",
      "Wien Hall": "2",
      "Woodbridge Hall": "1"
    }
    this.setState({
      dorm: dorm,
      floor: firstFloor[dorm],
      init: false
    }, () => {
      this.fetchFloorNums(this.state.dorm);
      this.fetchFloorData(dorm, firstFloor[dorm]);
    });
  }




  render() {
    const { width } = this.state;
    const isMobile = width <= 700;
    const floorplanLegend = (<FloorPlanLegend>
      <LegendItem>
        <GreenBox /><h6>Very Likely</h6>
      </LegendItem>
      <LegendItem>
        <YellowBox /><h6>Similar</h6>
      </LegendItem>
    </FloorPlanLegend>);

    if (isMobile) {
      return (
        <div>

        <Converter>
            <Input id="form">
              <InputLabel for="userNum">ENTER YOUR NUMBER:  </InputLabel>
              <MobileStyleInput type="number" id="userNum" onChange={() => this.convertNumber()}/><br></br>
              <InputLabel for="groupSize">GROUP SIZE: </InputLabel>
              <MobileStyleInput type="number" id="groupSize"/>
            </Input>
            {/*<Output>Old-System Equivalent: {this.state.full}</Output>*/}
            <Desc>Check out our color-coded floor plans to see which rooms you are likely to get!
            <Hover><Info data-tip data-for="info">?</Info>
              <MobileBlurb className = "info-tooltip"id="info" effect="solid" type="info" place="bottom" backgroundColor="#62A8E5" >
                <InfoText>Green rooms are ones that you are likely to get based off data that Spectator has collected from housing selection from previous years. Lottery numbers or priorities significantly below yours took these rooms last year.</InfoText>
                <InfoText>Yellow rooms were taken by lottery numbers and priorities similar to yours last year. </InfoText>
                <InfoText>To read more about how our converter and predictor works, check out this Spectrum article here.</InfoText>
              </MobileBlurb>
            </Hover><br></br>
              <LikelyColor></LikelyColor> Likely <PossibleColor></PossibleColor> Possible <UnlikelyColor></UnlikelyColor> Not likely or unavailable 
            </Desc>
          </Converter>
          <hr style={{width: "95%",color:"#707070"}} />


          <ShaftLiveContainerMobile>
            <BlueBGMobile>
              <WhiteboardSidebar
                sidebarModification={this.handleDormChange}
                currDorm={this.state.dorm}
              /> 
            </BlueBGMobile>
            <DormName>{this.state.dorm}</DormName>
            <FloorButton
                    floorNums={this.state.floorNums}
                    handleChange={this.handleFloorChange} />
            <FloorPlanSVG 
                  priority={this.state.priority} 
                  low={this.state.convertedNumLow} 
                  high={this.state.convertedNumHigh} 
                  dorm={this.state.dorm} 
                  floor={this.state.floor} 
                  data={this.state.floorData} 
                  cutoffs={[]} 
                  init={this.state.init} 
                  dormRefresh={this.state.dormRefresh} ></FloorPlanSVG>

          </ShaftLiveContainerMobile>
        </div>
      );
    } else {
      return (
        <div>

          <Converter>
          <Input id="form">
            <InputLabel for="userNum">ENTER YOUR NUMBER:  </InputLabel>
            <StyleInput type="number" id="userNum" onChange={() => this.convertNumber()}/>
            <InputLabel for="groupSize">GROUP SIZE: </InputLabel>
            <StyleInput type="number" id="groupSize"/>
          </Input>
          {/*<Output>Old-System Equivalent: {this.state.full}</Output>*/}
          <Desc>Check out our color-coded floor plans to see which rooms you are likely to get!
          <Hover><Info data-tip data-for="info">?</Info>
          <Blurb className = "info-tooltip"id="info" effect="solid" type="info" place="bottom" backgroundColor="#62A8E5" >
              <InfoText>Green rooms are ones that you are likely to get based off data that Spectator has collected from housing selection from previous years. Lottery numbers or priorities significantly below yours took these rooms last year.</InfoText>
              <InfoText>Yellow rooms were taken by lottery numbers and priorities similar to yours last year. </InfoText>
              <InfoText>To read more about how our converter and predictor works, check out this Spectrum article here.</InfoText>
            </Blurb>
          </Hover>
          <LikelyColor></LikelyColor> Likely <PossibleColor></PossibleColor> Possible <UnlikelyColor></UnlikelyColor> Not likely or unavailable 
          </Desc>
          </Converter>
          <hr style={{width: "95%",color:"#707070"}} />

          <ShaftLiveContainer>
            <ColOne>
              <WhiteboardSidebar
                sidebarModification={this.handleDormChange} />
            </ColOne>

            <ColTwo>
                
            </ColTwo>
            <ColThree>
              <SVGContainer>
                <div>
                  <h1>{this.state.dorm}</h1>
                  <FloorButton
                    floorNums={this.state.floorNums}
                    handleChange={this.handleFloorChange} />
                  <FloorPlanTitle>Interactive Floor Plans</FloorPlanTitle>
                  <FloorPlanPrompt> — hover to explore!</FloorPlanPrompt>
                </div>
                {floorplanLegend}
                <FloorPlanSVG 
                  priority={this.state.priority} 
                  low={this.state.convertedNumLow} 
                  high={this.state.convertedNumHigh} 
                  dorm={this.state.dorm} 
                  floor={this.state.floor} 
                  data={this.state.floorData} 
                  cutoffs={[]} 
                  init={this.state.init} 
                  dormRefresh={this.state.dormRefresh} ></FloorPlanSVG>
              </SVGContainer>
            </ColThree>
          </ShaftLiveContainer>
        </div>
      )
    }
  }
}
