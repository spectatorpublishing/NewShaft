import React, { Component } from 'react';
import styled from "styled-components";
import ExploreSidebar from "../components/ExploreSidebar";
import Filters2020 from '../components/exploreFilters'
import Maps from "../components/Maps";
import SearchBar from "../components/SearchBar"
import { FILTER_NAME_TO_KEY } from "../util/DormFilter.js";

import _ from "lodash"

const ExploreContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 auto;
  overflow: hidden;
  flex-direction: row;
`

const SideBar = styled.div`
  width: 100%;
  padding: 0% 0% 0% 0%;
  overflow-y: scroll; 
  min-height: 200px;
  @media only screen and (min-width: 768px) {
    width: 60%;
    padding: 0 0% 0% 0%;
    min-height: 100vh;
    z-index: 1;
  }
`

const MapView = styled.div`
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

const FilterSearchBG = styled.div`
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

const ColOne = styled.div`
  display: flex;
  width: 100%;
`

const ColTwo = styled.div`
  display: inline;
  position: fixed;
  padding-left: 1em;
  float: right;
  height: 100%;
  right: 0;
  top: 0;
  flex-direction: column;
  `

const initialPayload = {
  COLUMBIA: 0,
  BARNARD: 0,
  SINGLE_: 0,
  DOUBLE_: 0,
  TRIPLE_: 0,
  SUITE_: 0,
  TWO_SUITE: 0,
  THREE_SUITE: 0,
  FOUR_SUITE: 0,
  FIVE_SUITE: 0,
  SIX_SUITE: 0,
  SEVEN_SUITE: 0,
  EIGHT_SUITE: 0,
  NINE_SUITE: 0,
  DORM: ""
}
  
export default class Explore extends Component {
  constructor(props){
    super(props);
    this.state = {
      payload: _.clone(initialPayload),
      dorms: []
    };
    this.updatePayload = this.updatePayload.bind(this)
    }
  
  componentDidMount(){
    document.title = "The Shaft";
    this.fetchDorms();
  }

  preloadImages(dorms, callback){
    dorms.forEach((dorm) => {
      var i = new Image()
      i.src = dorm.THUMBNAIL_IMAGE;
    })

    callback();
  }

  fetchDorms(){
    fetch("/api/getExploreInfo", {
      method: "GET",
      headers: {'Content-Type': 'application/json',
      'Accept': 'application/json'},
    })
    .then(res => res.json())
    .then(dormInfo => {
      this.preloadImages(dormInfo, () => this.setState({dorms: dormInfo}));      
    })
  }

  updatePayload(newValue, name, filters){
    let payload = this.state.payload;
    if(filters != undefined) {
      for(var prop in filters) {
        payload[prop] = filters[prop];
      }
    } else {
      payload[FILTER_NAME_TO_KEY[name]] = newValue;
    }
    this.setState({payload: payload}, () => this.filterDorms());
  }

  filterDorms(){
    fetch('/api/getFilteredDorms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.payload)
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
            <FilterSearchBG>
              <SearchBar handleChange={this.updatePayload}/>
              <Filters2020 submit = {this.updatePayload} search = {this.state.payload.DORM}></Filters2020>
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
