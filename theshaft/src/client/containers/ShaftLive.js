import React, { Component } from 'react';
import styled from "styled-components";
import FloorButton from "../components/FloorButton.js";

import _ from "lodash"

let ShaftLiveContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 auto;
    overflow: hidden;
    flex-direction: row;
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

export default class ShaftLive extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dorm: null, //not sure what to type this as
            numFloors: 1,
            handleChange: null, //not sure what to type this as


        }
    }

    componentDidMount(){
        document.title = "Shaft Live";
        //this.fetch____();  --> need to fetch data
    }

    fetchFloorButtonData(floors){
        // this should fetch data for the FloorButtons
        const numFloors = floors;
        fetch('/api/getWhiteboardRooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                table: "dorm_static_info",
                numFloors: numFloors})
            })
            .then(res => res.json())
            .then(response => {this.state.handleChange(response)}
        );
      }

    render() {
        return(
            <ShaftLiveContainer>
                <ColOne>

                </ColOne>

                <ColTwo>
                
                </ColTwo>

                <ColThree>
                    <FloorButton/>
                </ColThree>

            </ShaftLiveContainer>
        );
    }
}