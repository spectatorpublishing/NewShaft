import React, { Component } from 'react';
import styled from "styled-components";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import DormButton from '../components/DormButton';
import '../css/Explore.css';
import Dorm from './Dorm.js';
import Updater from '../components/Updater';
import ExploreSidebar from "../components/ExploreSidebar";
import Filter from '../components/FilterComponent.js'
import "../css/Explore.css";
import map from "../assets/map.png";
import Maps from "../components/Maps";

let ExploreContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 auto;
  overflow: hidden;
  flex-direction: row;
`

let SideBar = styled.div`
  width: 90%;
  padding-left: 1em;
  overflow-y: scroll; 
  @media only screen and (min-width: 768px) {
    width: 30%;
    min-height: 100%;
    z-index: 1;
  }
`

let MapView = styled.div`
display: none;
width: 0%;
@media only screen and (min-width: 768px) {
  display: inline;
  position: fixed;
  padding-left: 1em;
  float: right;
  width: 67%;
  right: 0;
  top: 0;
  z-index:1;
}
`

let ColOne = styled.div`
  display: flex;
  width: 100%;
`

let ColTwo = styled.div`
  display: inline;
  position: fixed;
  padding-left: 1em;
  float: right;
  height: 100%;
  right: 0;
  top: 0;
  //z-index:1;
  // display: flex;
  flex-direction: column;
  width: ${(mobile) => mobile ? '67%': '50%'};
  //width: 50%;
  `
  
export default class Explore extends Component {
  constructor(props){
    super(props);
    this.state = {
      payload: {
        "college": -1,
        "single": false,
        "double": false,
        "triple": false,
        "suite": [],
        "make_up":[]
      }
    }
  }

  updatePayload(isClicked, name){
    let payload = this.state.payload;
		if(!isClicked){
			console.log("button was false now clicked")
			if(name === "columbia" || name === "barnard"){
				console.log("columbia or barnard button clicked")
				if(payload.college !== name && payload.college !==-1){
					payload.college = -1
				}
				else if (payload.college ===-1){
					payload.college = name
				}

			}
			else if (name == "single" || name == "double" || name == "triple"){
				payload[name] = true
			}
		}
		else{
			if(payload.college === name){
				payload.college = -1
			}
			else if( name == "columbia" || name=="barnard"){
				if(name ==='barnard' && payload.college ===-1){
					payload.college = 'columbia'
				}
				else{
					payload.college = "barnard"
				}
			}
			else if (name == "single" || name == "double" || name == "triple"){
				payload[name] = false
			}
    }
    this.setState({payload: payload})
		console.log(this.state.payload)
  }
  
  render() {
    return (
      <ExploreContainer>
        <ColOne>
          <SideBar>
            <div className="filters">
              <h2>The Shaft</h2>
              <Filter handleChange={this.updatePayload.bind(this)}/>
            </div>
            <ExploreSidebar payload={this.state.payload}/>
          </SideBar>
        </ColOne>
        <ColTwo>
          <MapView>
            <Maps 
              latitudes={[40.7128, 40.7129, 40.7128]} 
              longitudes={[-74.006, -74.007, -74.008]} 
              popupInfo={["Carman", "McBain", "John Jay"]} 
              popupId={["Carman", "McBain", "JohnJay"]}
              width={"100%"}
              height={"900px"}
              />
          </MapView>
        </ColTwo>
        <Updater interval="15" />
      </ExploreContainer>
    );
  }
}
