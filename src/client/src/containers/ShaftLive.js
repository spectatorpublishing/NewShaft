import React, { Component } from 'react';
import styled from "styled-components";
import FloorButton from "../components/FloorButton.js";
import FloorPlanSVG from "../components/FloorPlanSVG"
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

let ColThree = styled.div`
    width:50vw;
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
  background-color: gray;
  padding: 3rem 0rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  color: white;
  @media(max-width: 991px){
    padding: 1rem 0rem 0rem 1rem;
}
`

let Input = styled.form`
  color: white;
  font-size: 3rem;
  @media(max-width: 991px){
    font-size: 1.8rem;
  }
`
let StyleInput = styled.input`
  background: none;
  border: none;
  border-bottom: solid 0.1rem white;
  width: 20%;
  color: white;
  font-size: 2.5rem;
  @media(max-width: 991px){
    font-size: 1.8rem;
  }
`

let Output = styled.div`
  padding-top: 0.8rem;
  padding-bottom: 0.6rem;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  @media(max-width: 991px){
    font-size: 1.4rem;
  }
`

let Desc = styled.div`
  color: white;
  font-size: 1.6rem;
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
            <label for="userNum">Enter Your Number:  </label>
            <StyleInput type="number" id="userNum" onChange={() => this.convertNumber()}/>
          </Input>
          

          <Output>Old-System Equivalent: {this.state.full}</Output>
          <Desc>Green rooms are ones that you are likely to get based off data that Spectator has collected from housing selection from previous years.</Desc>
          <Desc>To read more about how our converter and predictor works, check out this Spectrum article <a href="https://www.columbiaspectator.com/spectrum/2020/03/09/a-guide-to-the-redesigned-shaft/">here</a>.</Desc>
          </Converter>

          <ShaftLiveContainerMobile>
            <BlueBGMobile>
              <WhiteboardSidebar
                sidebarModification={this.handleDormChange}
                currDorm={this.state.dorm}
              /> 
              <FloorButton
                floorNums={this.state.floorNums}
                handleChange={this.handleFloorChange}
                isMobile={isMobile}
              />
            </BlueBGMobile>
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
            <label for="userNum">Enter Your Number:  </label>
            <StyleInput type="number" id="userNum" onChange={() => this.convertNumber()}/>
          </Input>
          

          <Output>Old-System Equivalent: {this.state.full}</Output>
          <Desc>Check out our color-coded floor plans to see which rooms you are likely to get!</Desc>
          </Converter>

          <ShaftLiveContainer>
            <ColOne>
              <WhiteboardSidebar
                sidebarModification={this.handleDormChange} />
            </ColOne>

            <ColTwo>
              <h1>{this.state.dorm}</h1>
              <FloorButton
                floorNums={this.state.floorNums}
                handleChange={this.handleFloorChange} />
                <About>Green rooms are ones that you are likely to get based off data that Spectator has collected from housing selection from previous years.  Lottery numbers or priorities significantly below yours took these rooms last year.</About>
                <About>Yellow rooms were taken by lottery numbers and priorities similar to yours last year.  </About>
                <About>To read more about how our converter and predictor works, check out this Spectrum article <a href="https://www.columbiaspectator.com/spectrum/2020/03/09/a-guide-to-the-redesigned-shaft/">here</a>.</About>
            </ColTwo>
            <ColThree>
              <SVGContainer>
                <div>
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
