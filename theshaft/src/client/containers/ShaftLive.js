import React, { Component } from 'react';
import styled from "styled-components";
import FloorButton from "../components/FloorButton.js";
import WhiteboardTable from "../components/WhiteboardTable.js";

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
`
let ColTwo = styled.div`
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
    width: ${({ mobile }) => (mobile ? `100%` : `60%`)};
`

let ColThree = styled.div`

`


let sampleRoomData = [
    {
      "ROOM": "101",
      "PRIORITY": "30",
      "LOTTERY": "3000"
    },
    {
      "ROOM": "102",
      "PRIORITY": "20",
      "LOTTERY": "2050"
    },
    {
      "ROOM": "103",
      "PRIORITY": "30",
      "LOTTERY": "1010"
    },
    {
      "ROOM": "104",
      "PRIORITY": "10",
      "LOTTERY": "2510"
    },
    {
      "ROOM": "105",
      "PRIORITY": "20",
      "LOTTERY": "1450"
    },
    {
      "ROOM": "106",
      "PRIORITY": "30",
      "LOTTERY": "900"
    },
    {
      "ROOM": "107",
      "PRIORITY": "10",
      "LOTTERY": "1200"
    }
  ]

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
        this.fetchFloorButtonData(this.state.dorm)
    }

    fetchFloorButtonData(dormName){
        // this should fetch data for the FloorButtons

        // dormName is being supplied by Matt's sidebar.
        // let dormName = //somehwere far far away
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

    handleFloorChange(data){
        this.setState({floorData : data})
    }

    handleDormChange(dorm){
        this.setState({dorm : dorm})
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
            <ShaftLiveContainer>
                <p>this is shaft live ! </p>
                <ColOne>
                    <WhiteboardSidebar
                        sidebarModification={this.handleDormChange}/>
                </ColOne>

                <ColTwo>
                    <FloorButton 
                        dorm={this.state.dorm} 
                        floorNums={this.state.floorNums} 
                        handleChange={this.handleFloorChange}/>
                    <WhiteboardTable
                        roomAvailability={this.state.floorData} />
                </ColTwo>
            </ShaftLiveContainer>
       )
      }
        
    }
  }
