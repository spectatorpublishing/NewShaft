import React, { Component } from 'react';
import styled from "styled-components";
import FloorButton from "../components/FloorButton.js";
import WhiteboardTable from "../components/WhiteboardTable.js";
import WhiteboardSidebar from "../components/WhiteboardSidebar.js";

import _ from "lodash"

let ShaftLiveContainer = styled.div`
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
            width: window.innerWidth,
            dorm: null, //not sure what to type this as
            // numFloors: this.state.numFloors,
            //handleChange: null, //not sure what to type this as


        }
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
        //this.fetch____();  --> need to fetch data
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
            .then(floorNum => {
                this.setState({numFloors: floorNum})
            });
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
        }
        else {
            return(
                <ShaftLiveContainer>
                    <p>this is shaft live ! </p>
                    <ColOne>

                 </ColOne>

                    <ColTwo>
                
                  </ColTwo>

                   <ColThree>
                         {/* <FloorButton 
                        dorm= 
                        numFloors={this.state.numFloors} 
                        handleChange= /> */}
                    </ColThree>

                </ShaftLiveContainer>
         );
        }
    }
}