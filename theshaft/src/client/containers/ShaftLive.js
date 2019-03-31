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
            dorm: "47 Claremont",
            floorNums: null,
            floorData: null
        }

        this.handleFloorChange = this.handleFloorChange.bind(this)
        this.handleDormChange = this.handleDormChange.bind(this)
    }

    componentDidMount(){
        document.title = "Shaft Live";
        this.fetchFloorButtonData(this.state.dorm)
    }

    fetchFloorButtonData(dormName){
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

    handleFloorChange(data){
        this.setState({floorData : data})
    }

    handleDormChange(dorm){
        this.setState({dorm : dorm})
    }

    render() {
        return(
            <ShaftLiveContainer>
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

                <ColThree>
                    
                </ColThree>

            </ShaftLiveContainer>
        );
    }
}