import React, { Component } from 'react';
import styled from "styled-components";
import ExploreSidebar from "../components/ExploreSidebar";
import Filter from '../components/FilterComponent.js'
import Maps from "../components/Maps";

let ExploreContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 auto;
  overflow: hidden;
  flex-direction: row;
`

let SideBar = styled.div`
  width: 100%;
  padding: 0 5%;
  overflow-y: scroll; 
  min-height: 200px;
  @media only screen and (min-width: 768px) {
    width: 55%;
    padding: 0 2.5%;
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
  width: 40%;
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
  flex-direction: column;
  `
// Converts name of filter in front-end
// to name used in body payload
const filterNameToKey = {
    "Columbia":"COLUMBIA",
		"Barnard":"BARNARD",
		"Single":"SINGLE",
		"Double":"DOUBLE",
		"Triple":"TRIPLE",
		"2 Person":"TWO_SUITE",
		"3 Person":"THREE_SUITE",
		"4 Person":"FOUR_SUITE",
		"5 Person":"FIVE_SUITE",
		"6 Person":"SIX_SUITE",
		"7 Person":"SEVEN_SUITE",
		"8 Person":"EIGHT_SUITE",
		"9 Person":"NINE_SUITE",
		"First Year":"FRESHMEN",
		"Sophomore":"SOPHMORE",
		"Junior":"JUNIOR",
		"Senior":"SENIOR",
		"A/C":"AC",
		"Accessibility":"ACCESSIBILITY",
		"Gym":"GYM",
		"Bathroom":"BATHROOM"
}
  
export default class Explore extends Component {
  constructor(props){
    super(props);
    this.state = {
      payload: {
        COLUMBIA: null,
        BARNARD: null,
        SINGLE: null,
        DOUBLE: null,
        TRIPLE: null,
        TWO_SUITE: null,
        THREE_SUITE: null,
        FOUR_SUITE: null,
        FIVE_SUITE: null,
        SIX_SUITE: null,
        SEVEN_SUITE: null,
        EIGHT_SUITE: null,
        NINE_SUITE: null,
        FRESHMEN: null,
        SOPHOMORE: null,
        JUNIOR: null,
        SENIOR: null,
        AC: null,
        ACCESSIBILITY: null,
        GYM: null,
        BATHROOM: null
      },
      dorms: []
    }
    this.updatePayload = this.updatePayload.bind(this)
    }

  
  componentDidMount(){
    this.fetchDorms();
  }

  fetchDorms(){
    fetch('/api/getExploreInfo', {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    })
    .then(res => res.json())
    .then(dormInfo => {
      console.log(dormInfo)
      this.setState({dorms: dormInfo})
    })
  }

  updatePayload(isClicked, name){
    let payload = this.state.payload;
		if(isClicked){
			console.log("button was false now clicked")
			payload[filterNameToKey[name]] = true
		}
		else{
			payload[filterNameToKey[name]] = null
    }
    this.setState({payload: payload}, () => this.filterDorms())
		console.log(this.state.payload)
  }

  filterDorms(){
    // console.log("PAYLOAD: " + JSON.stringify(this.state.payload))
    fetch('/api/filterDorm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.payload)
    }).then(res => res.json())
    .then(response => {
        // console.log("RESPONSE: " + JSON.stringify(response))
        this.setState({dorms: response})
    });      
  }
  
  render() {
    return (
      <ExploreContainer>
        <ColOne>
          <SideBar>
            <div className="filters">
              <h2>The Shaft</h2>
              <Filter handleChange={this.updatePayload}/>
            </div>
            <ExploreSidebar dorms={this.state.dorms}/>
          </SideBar>
        </ColOne>
        <ColTwo>
          <MapView>
            <Maps
              latitudes={this.state.dorms.map((dorm) => dorm.LATITUDE)} 
              longitudes={this.state.dorms.map((dorm) => dorm.LONGITUDE)} 
              popupInfo={this.state.dorms.map((dorm) => dorm.DORM)} 
              width={"100%"}
              height={"900px"}
              />
          </MapView>
        </ColTwo>
      </ExploreContainer>
    );
  }
}
