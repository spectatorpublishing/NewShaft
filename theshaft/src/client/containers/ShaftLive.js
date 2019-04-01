import React, { Component } from 'react';
import styled from "styled-components";
import FloorButton from "../components/FloorButton.js";
import WhiteboardTable from "../components/WhiteboardTable.js";
import FloorPlanSVG from "../components/FloorPlanSVG"

import _ from "lodash"
import WhiteboardSidebar from '../components/WhiteboardSidebar.js';

let ShaftLiveContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 auto;
    overflow: hidden;
    flex-direction: row;
`
let MobileSVG = styled.div`
visibility: ${props => props.window<=991 ? "visible":"hidden"};

`

let ShaftLiveContainerMobile = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 auto;
    overflow: hidden;
    flex-direction: row;
    justify-content: center;
`

let ColOne = styled.div`
  display: flex;
  width: 20%;
  @media(max-width: 991px){
      display:flex;
      width:40vw;
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
    width:38vw;
    padding-left:2vw;
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
            dorm: "47 Claremont",
            floorNums: null,
            floorData: null,
            width: window.innerWidth,
            // numFloors: this.state.numFloors,
            //handleChange: null, //not sure what to type this as
        }

        this.handleFloorChange = this.handleFloorChange.bind(this)
        this.handleDormChange = this.handleDormChange.bind(this)
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
            .then(response => {console.log(response); this.setState({floorData : response})}
        ); 
    }

    handleFloorChange(floor){
        this.fetchFloorData(this.state.dorm, floor)
    }

    handleDormChange(dorm){
        this.setState({dorm : dorm}, () => {this.fetchFloorNums(this.state.dorm)})
    }

    render() {
      const { width } = this.state;
      const isMobile = width <= 700;

      if (isMobile) {
          return (
              <ShaftLiveContainerMobile>
                  <WhiteboardSidebar sidebarModification={(dorm) => console.log(dorm)}></WhiteboardSidebar>
                  <WhiteboardTable roomAvailability={sampleRoomData}></WhiteboardTable>
              </ShaftLiveContainerMobile>
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
                
                <ColThree>
                    <div className="border">
                    <FloorPlanSVG name="River 6" data={floorplanData} cutoffs={[]}></FloorPlanSVG>
                    </div>
                </ColThree>
            </ShaftLiveContainer>

            { width <= 991 && (<FloorPlanSVG/>)}

            </div>

       )
      }
        
    }
  }
