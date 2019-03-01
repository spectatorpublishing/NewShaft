import React, { Component } from 'react';
import styled from "styled-components";
import ExploreSidebar from "../components/ExploreSidebar";
import Filter from '../components/FilterComponent.js'
import Maps from "../components/Maps";
import SearchBar from "../components/SearchBar"

let ExploreContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 auto;
  overflow: hidden;
  flex-direction: row;
`

let SideBar = styled.div`
  width: 100%;
  padding: 0% 0% 0% 0%;
  overflow-y: scroll; 
  min-height: 200px;
  @media only screen and (min-width: 768px) {
    width: 60%;
    padding: 0 0% 0% 0%;
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

let FilterSearchBG = styled.div`
  background-color: ${props => props.theme.columbiaBlue};
  @media only screen and (min-width: 768px) {
    // display: inline;
    // position: fixed;
    padding-left: 1em;
    // float: right;
    // width: 40%;
    // right: 0;
    // top: 0;
    // z-index:1;
  }
  margin-top: 0px;
  padding-top: 1%;
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
    "Dorm":"DORM",
    "Columbia":"COLUMBIA",
		"Barnard":"BARNARD",
		"Single":"SINGLE_",
		"Double":"DOUBLE_",
		"Triple":"TRIPLE_",
		"2 Person":"TWO_SUITE",
		"3 Person":"THREE_SUITE",
		"4 Person":"FOUR_SUITE",
		"5 Person":"FIVE_SUITE",
		"6 Person":"SIX_SUITE",
		"7 Person":"SEVEN_SUITE",
		"8 Person":"EIGHT_SUITE",
		"9 Person":"NINE_SUITE",
		"First Year":"FRESHMEN",
		"Sophomore":"SOPHOMORE",
		"Junior":"JUNIOR",
		"Senior":"SENIOR",
		"A/C":"AC",
		"Gym":"GYM",
		"Private Bathroom":"P_BATHROOM",
		"Private Kitchen":"P_KITCHEN"
}
  
export default class Explore extends Component {
  constructor(props){
    super(props);
    this.state = {
      payload: {
        COLUMBIA: 0,
        BARNARD: 0,
        SINGLE_: 0,
        DOUBLE_: 0,
        TRIPLE_: 0,
        TWO_SUITE: 0,
        THREE_SUITE: 0,
        FOUR_SUITE: 0,
        FIVE_SUITE: 0,
        SIX_SUITE: 0,
        SEVEN_SUITE: 0,
        EIGHT_SUITE: 0,
        NINE_SUITE: 0,
        FRESHMEN: 0,
        SOPHOMORE: 0,
        JUNIOR: 0,
        SENIOR: 0,
        AC: 0,
        ACCESSIBILITY: 0,
        GYM: 0,
        P_BATHROOM: 0
      },
      dorms: [],
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
      this.setState({dorms: dormInfo})
    })
  }

  updatePayload(newValue, name){
    let payload = this.state.payload;
		payload[filterNameToKey[name]] = newValue
    this.setState({payload: payload}, () => this.filterDorms())
  }

  filterDorms(){
    //console.log("PAYLOAD: " + JSON.stringify(this.state.payload))
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
            <FilterSearchBG>
              {/* <h2>The Shaft</h2> */}
              <SearchBar handleChange={this.updatePayload}/>
              <Filter handleChange={this.updatePayload}/>
            </FilterSearchBG>
            <ExploreSidebar dorms={this.state.dorms}/>
          </SideBar>
        </ColOne>
        <ColTwo>
          <MapView>
            <Maps
              latitudes={this.state.dorms.map((dorm) => dorm.LATITUDE)} 
              longitudes={this.state.dorms.map((dorm) => dorm.LONGITUDE)} 
              popupInfo={this.state.dorms.map((dorm) => dorm.DORM)} 
              centerLatitude={40.808601}
              centerLongitude={-73.966095}
              width={"100%"}
              height={"900px"}
              />
          </MapView>
        </ColTwo>
      </ExploreContainer>
    );
  }
}
