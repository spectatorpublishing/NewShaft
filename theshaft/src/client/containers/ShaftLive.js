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
    margin-top:6vh;
    width: 40vw;
    height:auto;
    object-position:cover;
    padding-right:3vw;
`
let FloorPlanTitle = styled.h3`
    margin-bottom: 20px;`


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
    width: ${({ mobile }) => (mobile ? `100%` : `40%`)};
    @media(max-width: 991px){
        display: flex;
        flex-direction: column;
        scroll-behavior: smooth;
        width:60vw;
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

let floorplanData = [
    {
      "DORM": "47 Claremont",
        "ROOM": "4",
        "FLOOR": "1",
        "ROOM_TYPE": "suite-3",
        "NEW_PRIORITY": "30",
        "NEW_NUM": "3000"
    },
    {
      "DORM": "47 Claremont",
        "ROOM": "3",
        "FLOOR": "1",
        "ROOM_TYPE": "suite-4",
        "NEW_PRIORITY": "30",
        "NEW_NUM": "3000"
    },
    {
      "DORM": "47 Claremont",
        "ROOM": "1",
        "FLOOR": "1",
        "ROOM_TYPE": "suite-6",
        "NEW_PRIORITY": "30",
        "NEW_NUM": "3000"
    },
    {
      "DORM": "47 Claremont",
      "ROOM": "2",
      "FLOOR": "1",
      "ROOM_TYPE": "suite-5",
      "NEW_PRIORITY": "30",
      "NEW_NUM": "3000"
    },
    {
      "DORM": "47 Claremont",
        "ROOM": "24",
        "FLOOR": "2",
        "ROOM_TYPE": "suite-3",
        "NEW_PRIORITY": "30",
        "NEW_NUM": "3000"
    },
    {
      "DORM": "47 Claremont",
        "ROOM": "23",
        "FLOOR": "2",
        "ROOM_TYPE": "suite-4",
        "NEW_PRIORITY": "30",
        "NEW_NUM": "3000"
    },
    {
      "DORM": "47 Claremont",
        "ROOM": "21",
        "FLOOR": "2",
        "ROOM_TYPE": "suite-7",
        "NEW_PRIORITY": "30",
        "NEW_NUM": "3000"
    },
    {
      "DORM": "47 Claremont",
      "ROOM": "22",
      "FLOOR": "2",
      "ROOM_TYPE": "suite-7",
      "NEW_PRIORITY": "30",
      "NEW_NUM": "3000"
    },
    {
      "DORM": "River Hall",
      "ROOM": "606",
      "FLOOR": "6",
      "ROOM_TYPE": "single",
      "NEW_PRIORITY": "",
      "NEW_NUM": ""
    },
    {
      "DORM": "River Hall",
      "ROOM": "607",
      "FLOOR": "6",
      "ROOM_TYPE": "single",
      "NEW_PRIORITY": "20",
      "NEW_NUM": "1234"
    }
  ];


export default class ShaftLive extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dorm: "Broadway Hall",
            floor: "3",
            floorNums: null,
            floorData: [],
            width: window.innerWidth,
            init: true,
            // numFloors: this.state.numFloors,
            //handleChange: null, //not sure what to type this as
            mobileShowFloorPlan: false
        }

        this.handleFloorChange = this.handleFloorChange.bind(this)
        this.handleDormChange = this.handleDormChange.bind(this)
        this.handleDormChange(this.state.dorm);
    }

    componentWillMount() {
        window.addEventListener("resize", this.handleWindowSizeChange);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowSizeChange);
      }
    
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };

    componentDidMount(){
        document.title = "Shaft Live";
        this.fetchFloorNums(this.state.dorm)        
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
        fetch('/api/getLotteryNum', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({DORM: dorm, FLOOR: floor})
            }).then(res => res.json())
            .then(response => {console.log(response); this.setState({floor: floor, floorData : response, init: false})}
        ); 
    }

    handleFloorChange(floor){
        this.fetchFloorData(this.state.dorm, floor)
    }

    handleDormChange(dorm){
        this.setState({dorm : dorm, init: false}, () => {this.fetchFloorNums(this.state.dorm)})
    }

    toggle

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
                          handleChange={this.handleFloorChange}/>
                </BlueBGMobile>
                <ToggleMobileView currActive={this.state.mobileShowFloorPlan ? 0 : 1}>
                  <div onClick={()=>this.setState({mobileShowFloorPlan: false})}>Live Feed</div>
                  <div onClick={()=>this.setState({mobileShowFloorPlan: true})}>Floor Plans</div>
                </ToggleMobileView>
                { this.state.mobileShowFloorPlan
                    ? <FloorPlanSVG dorm={this.state.dorm} floor={this.state.floor} data={floorplanData} cutoffs={[]}/>
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
                    <FloorButton 
                        floorNums={this.state.floorNums} 
                        handleChange={this.handleFloorChange}/>
                    <WhiteboardTable
                        roomAvailability={this.state.floorData} />
                </ColTwo>
                {width > 991 &&
                (<ColThree>
                    <SVGContainer>
                    <FloorPlanTitle>Interactive Floor Plans</FloorPlanTitle>
                    <FloorPlanSVG dorm={this.state.dorm} floor={this.state.floor} data={this.state.floorData} cutoffs={[]} init={this.state.init} ></FloorPlanSVG>
                    </SVGContainer>
                </ColThree>)}
            </ShaftLiveContainer>
            </div>

       )
      }
        
    }
  }
