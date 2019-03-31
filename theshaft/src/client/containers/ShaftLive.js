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
            // numFloors: this.state.numFloors,
            //handleChange: null, //not sure what to type this as


        }
    }

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