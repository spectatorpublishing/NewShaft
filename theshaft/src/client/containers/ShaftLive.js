import React, { Component } from 'react';
import styled from "styled-components";
import FloorButton from "../components/FloorButton.js";
import WhiteboardTable from "../components/WhiteboardTable.js";
import FloorPlanSVG from "../components/FloorPlanSVG"

import _ from "lodash"
import WhiteboardSidebar from '../components/WhiteboardSidebar.js';

let BlueBGMobile = styled.div`
  background-color: ${props => props.theme.columbiaBlue};
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

let GreenBox = styled.div`
    height: 1rem;
    width: 2.5rem;
    background: green;
    opacity: 0.3;
    display: inline-block;
`

let RedBox = styled.div`
  height: 1rem;
  width: 2.5rem;
  background: red;
  opacity: 0.3;
  display: inline-block;
`

let FloorPlanLegend = styled.div`
    @media only screen and (max-width: 992px){
      text-align: center;
    }
    margin-bottom: 1rem;
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
            mobileShowFloorPlan: false
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

    componentDidMount(){
        document.title = "Shaft Live";
        this.fetchFloorNums(this.state.dorm)     
        this.interval = setInterval(() => this.fetchFloorData(this.state.dorm, this.state.floor), 15000);
   
    }

    fetchFloorNums(dormName){
        // this should fetch data for the FloorButtons

        // dormName is being supplied by Matt's sidebar.
        fetch('/api/getUniqueFloorNumbers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                DORM: dormName
            })
            })
            .then(res => res.json())
            .then(floorNums => {
                this.setState({floorNums: floorNums})
            });
    }

    fetchFloorData(dorm, floor){
        console.log("Fetch Floor Data");
        fetch('/api/getLotteryNum', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({DORM: dorm, FLOOR: floor})
            }).then(res => res.json())
            .then(response => {this.setState({dorm : dorm, dormRefresh: !this.state.dormRefresh, floor: floor, floorData : response})}
        ); 
    }

    

    handleFloorChange(floor){
        this.fetchFloorData(this.state.dorm, floor)
    }

    handleDormChange(dorm){

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
        this.setState({dorm : dorm, floor: firstFloor[dorm], init: false}, () => {this.fetchFloorNums(this.state.dorm); this.fetchFloorData(dorm, firstFloor[dorm] )})
    }

    

    render() {
      const { width } = this.state;
      const isMobile = width <= 700;

      if (isMobile) {
          return (
            <div>
                <ShaftLiveContainerMobile>
                  <BlueBGMobile>
                  <WhiteboardSidebar
                          sidebarModification={this.handleDormChange}
                          currDorm = {this.state.dorm}
                  />
                  <FloorButton 
                          floorNums={this.state.floorNums} 
                          handleChange={this.handleFloorChange}
                          isMobile = {isMobile}
                  />
                </BlueBGMobile>
                <ToggleMobileView currActive={this.state.mobileShowFloorPlan ? 0 : 1}>
                  <div onClick={()=>this.setState({mobileShowFloorPlan: false})}>Live Feed</div>
                  <div onClick={()=>this.setState({mobileShowFloorPlan: true})}>Floor Plans</div>
                </ToggleMobileView>
                { this.state.mobileShowFloorPlan
                    ? <MobileFPWrapper>
                        <FloorPlanLegend><GreenBox/> Available <RedBox/> Taken </FloorPlanLegend>
                        
                        <FloorPlanSVG
                          dorm={this.state.dorm}
                          floor={this.state.floor}
                          data={this.state.floorData}
                          cutoffs={[]}
                          init={this.state.init}
                          dormRefresh={this.state.dormRefresh}
                        />
                      </MobileFPWrapper>
                    : <WhiteboardTable
                    roomAvailability={this.state.floorData} />
                }
                </ShaftLiveContainerMobile>
            </div>
          );
      }else{
        return(
            <div>
            <ShaftLiveContainer>
                <ColOne>
                    <WhiteboardSidebar
                        sidebarModification={this.handleDormChange}/>
                </ColOne>

                <ColTwo>
                    <h1>{this.state.dorm}</h1>
                    <FloorButton 
                        floorNums={this.state.floorNums} 
                        handleChange={this.handleFloorChange}/>
                    <WhiteboardTable
                        roomAvailability={this.state.floorData} />
                </ColTwo>
                <ColThree>
                    <SVGContainer>
                    <div>
                      <FloorPlanTitle>Interactive Floor Plans</FloorPlanTitle>
                      <FloorPlanPrompt> — hover to explore!</FloorPlanPrompt>
                    </div>
                    <FloorPlanLegend><GreenBox/> Available <RedBox/> Taken </FloorPlanLegend>
                    <FloorPlanSVG dorm={this.state.dorm} floor={this.state.floor} data={this.state.floorData} cutoffs={[]} init={this.state.init}  dormRefresh={this.state.dormRefresh} ></FloorPlanSVG>
                    </SVGContainer>
                </ColThree>
            </ShaftLiveContainer>
            </div>

       )
      }
        
    }
  }
