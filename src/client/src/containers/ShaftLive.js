import React, { Component } from 'react';
import styled from "styled-components/macro";
import FloorButton from "../components/FloorButton.js";
import FloorPlanSVG from "../components/FloorPlanSVG"
import { theme } from '../util/GlobalStyles.js';
import _, { floor } from "lodash"
import WhiteboardSidebar from '../components/WhiteboardSidebar.js';

import DormList from '../components/LotteryPredictor/DormList.js';

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
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 0 3rem;
    overflow: hidden;
    flex-direction: row;
    @media(max-width: 991px){
      flex-direction: column;
      padding: 0;
    }
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
  flex-direction: column;
  width: 50%;
  background-color: "pink";
  @media(max-width: 991px){
      display:flex;
      width:50vw;
  }
`
let ColTwo = styled.div`
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
    padding-top: 1rem;
    //padding-left: 5%;
    //margin-right:2rem;
    width: ${({ mobile }) => (mobile ? `100%` : `50%`)};
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

let ColThree = styled.div`
    width:0vw;
`

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
  height: .6rem;
  width: 1.8rem;
  display: inline-block;
  margin-right: 0.3rem;
  border-radius: 10px;
  background: ${(props) => props.color};
  align-self: center;
  color: #707070;

  @media only screen and (max-width: 992px){
    width: 30%;
    height: .7rem;
    padding: .2rem 0;
    margin-right: .8rem;
    border-radius: 4px;
  }
`

let FloorPlanLegend = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
  
  @media only screen and (max-width: 992px){
    text-align: center;
    flex-wrap: wrap;
  }
`

let LegendItem = styled.div`
  display: flex;
  padding-right: 2rem;
  @media only screen and (max-width: 992px){
    width: 50%;
    padding: .2rem 0;
  }
`

let Converter = styled.div`
  margin: 5rem 3rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #C4C4C4;
  @media(max-width: 991px){
    margin: 7rem 1.5rem 2rem 1.5rem;
}
`

const Error = styled.div`
  color: #9A4A4A;
  margin: 0rem 3rem;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0rem;

  @media(max-width: 768px){
    flex-direction: column;
  }
`;

let Input = styled.form`
  
  color: #707070;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  @media(max-width: 991px){
    width: 100%;
  }

  label {
    margin: auto 0rem;
  }
`
let StyleInput = styled.input`
  background: none;
  border: 1px solid #D0D0D0;
  border-radius: 5%;
  width: 30%;
  color: ${(props) => props.theme.darkGray};
  font-size: 1rem;
  margin-left: 1rem;
  @media(max-width: 991px){
    width: 40%;
    justify-self: flex-end;
    margin-right: auto;
  }
`

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media(max-width: 768px){
    flex-direction: column;
    padding-top: 1rem;
  }
`;

const TextBox = styled.div`
  font-size: 1rem;
  color: #707070;
  @media(max-width: 768px){
    width: 100%;
    padding: .5rem 0;
  }
`;

const DormName = styled.div`
  font-family: Georgia;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  color: #707070;
  padding: 0rem 0 1rem 0;
`;

const FloorPlanWrapper = styled.div`
  width: 60%;
`;

const AboutLeft = styled.div`
  margin: auto 0rem;
`;

const DisclaimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 1rem 1rem auto;
`

const DisclaimerTextBox = styled.div`
  width: 80%;
  font-size: 0.75rem;
  color: #707070;
  margin: 0rem 0rem 0rem auto;
  @media(max-width: 768px){
    width: 100%;
    padding: .5rem 0;
  }

  &.disclaimer {
    color: #9A4A4A;
  }
`;


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

      lotteryNum: 0, /* a default lottery num placeholder */
      convertedNumLow: null,
      convertedNumHigh: null,
      priority: null,
      full: " ",

      errorMsg: "",
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

  convertNumber() {
    var num = document.getElementById("userNum").value;
    let number = parseInt(num.toString())
    var groupSize = parseInt(document.getElementById("groupSize").value.toString());

    if (num.length === 0) {
      this.setState({
        lotteryNum: 0
      })
      this.clearErrorMessage();
    } else if ( number < 1 || number > 5000){
      this.setState({
        lotteryNum: 0
      })
      this.setErrorMessage("Enter valid lottery number")
    } else {
      var thousands = (num - (num % 1000)) / 1000
      //console.log("thousands: ", thousands);
      if (thousands == 0) {
        var priority = 30;
      }
      else if (thousands == 1) {
        var priority = 25;
      }
      else if (thousands == 2) {
        var priority = 20;
      }
      else if (thousands == 3) {
        var priority = 15;
      }
      else {
        var priority = 10;
      }
      //console.log("priority: ", priority)
      var converted = (num - (thousands * 1000)) * (3000 / 1000)
      //console.log("converted num: ", converted)
      var rounded = converted - (converted % 10)
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
        lotteryNum: num, // TODO: make sure num is valid
        convertedNumLow: low,
        convertedNumHigh: high,
        priority: priority,
        full: priority + " | " + low + " - " + high,
      })

      if ( groupSize < 1 || groupSize > 10) {
        this.setErrorMessage("Enter valid group size")
      } else {
        this.clearErrorMessage();
      } 
    }
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

  setErrorMessage(message) {
    this.setState({
      errorMsg: message
    })
  }

  clearErrorMessage() {
    this.setErrorMessage("");
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 700;
    const floorplanLegend = (
      <FloorPlanLegend>
        <LegendItem>
          <ColorBox color={(props) => props.theme.green} /><h6>Likely</h6>
        </LegendItem>
        <LegendItem>
          <ColorBox color={(props) => props.theme.yellow} /><h6>Similar</h6>
        </LegendItem>
        <LegendItem>
          <ColorBox color={(props) => props.theme.red} /><h6>Unlikely</h6>
        </LegendItem>
        <LegendItem>
          <ColorBox color={(props) => props.theme.lightGray} /><h6>Unavailable</h6>
        </LegendItem>
      </FloorPlanLegend>
    );

    if (isMobile) {
      return (
        <div>
          <Converter>
            <InputsWrapper>
              <Input id="form">
                <label for="userNum">Lottery Number:  </label>
                <StyleInput type="number" id="userNum" min="1" max="5000" onChange={() => this.convertNumber()} />
              </Input>
              <Input id="form">
                <label for="groupSize">Group Size:  </label>
                <StyleInput type="number" id="groupSize" min="1" max="10" onChange={() => this.convertNumber()} />
              </Input>
            </InputsWrapper>


            <AboutWrapper>
              <TextBox> Green rooms are ones that you are likely to get based off data that Spectator has collected from housing selection from previous years.</TextBox>
              <TextBox>Learn how our lottery predictor works to make the best use of its results.</TextBox>
              {floorplanLegend}
            </AboutWrapper>
          </Converter>
          {(this.state.errorMsg === "") ? null : <Error>{"* " + this.state.errorMsg}</Error>}
          <ShaftLiveContainer>
            <DormList lotteryNum={this.state.lotteryNum} />
          </ShaftLiveContainer>
        </div>
      );
    } else {
      return (
        <div>
          <Converter>
            <AboutWrapper>
            <AboutLeft>
            <InputsWrapper>
              <Input id="form">
                <label for="userNum">Lottery Number</label>
                <StyleInput type="number" id="userNum" onChange={() => this.convertNumber()} />
              </Input>

              <Input id="form">
                <label for="groupSize">Group Size</label>
                <StyleInput type="number" id="groupSize" onChange={() => this.convertNumber()} />
              </Input>
            </InputsWrapper>
              <TextBox>
                Check out our color-coded floor plans to see which rooms you are likely to get!
                {floorplanLegend}
              </TextBox>
              </AboutLeft>
            
              <Disclaimer/>
            </AboutWrapper>
          </Converter>
          {(this.state.errorMsg === "") ? null : <Error>{"* " + this.state.errorMsg}</Error>}
          <ShaftLiveContainer>
            <ColOne>
              <DormList lotteryNum={this.state.lotteryNum} setSelectedDorm={this.handleDormChange} selectedDorm={this.state.dorm}/>
            </ColOne>

            <ColTwo>
              <DormName>{this.state.dorm}</DormName>
              <FloorPlanWrapper>
              <FloorPlanSVG
                priority={this.state.priority}
                low={this.state.convertedNumLow}
                high={this.state.convertedNumHigh}
                dorm={this.state.dorm}
                floor={this.state.floor}
                data={this.state.floorData}
                cutoffs={[]}
                init={this.state.init}
                dormRefresh={this.state.dormRefresh} >
              </FloorPlanSVG>
              </FloorPlanWrapper>
            </ColTwo>
          </ShaftLiveContainer>
        </div>
      )
    }
  }
}

const Disclaimer = () => {
  return (
    <DisclaimerWrapper>
      <DisclaimerTextBox className="disclaimer">Disclaimer:</DisclaimerTextBox>
      <DisclaimerTextBox>
        Historical Room Selection data is provided by Columbia Housing for reference only. The selection process shifts year to year and can change based on a number of variables that will impact how students pick rooms, including personal preferences, building availability, class size, external factors and more. This data should not be used a predictive tool nor does it provide any guarantee for selection options. Learn how our lottery predictor works to make the best use of its results.
      </DisclaimerTextBox>
    </DisclaimerWrapper>
  )
}
