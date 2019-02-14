import React, { Component } from 'react';
import styled from "styled-components";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import DormButton from '../components/DormButton';
import '../css/Explore.css';
import Dorm from './Dorm.js';
import Updater from '../components/Updater';
import ExploreSidebar from "../components/ExploreSidebar";
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
    this.state = {dorms: []}
  }


  componentDidMount(){
    fetch('/api/filterDorm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "college": -1,
        "single": true,
        "double": true,
        "triple": true,
        "suite": [],
        "make_up":[]
      })
    }).then(res => res.json())
      .then(response => {
        this.setState({dorms: response});
      });
  }
  
  render() {
    return (
      <ExploreContainer>
        <ColOne>
          <SideBar>
            <ExploreSidebar dorms={this.state.dorms} />
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
