import React, { Component } from "react";
import styled from 'styled-components';
import Expander from './Expander.js';
import icon from "../assets/marker.svg"; // to-do: import all actual icons

const amenitiesMap = {
  P_BATHROOM: "Single-Use Bathroom",
  LAUNDRY: "Laundry in Building",
  CARPET: "Carpeted Floor",
  F_KITCHEN: "Floor Kitchen",
  P_KITCHEN: "Private Kitchen",
  LOUNGE: "Lounge",
  GYM: "Fitness Center",
  BIKE: "Bike Storage",
  COMPUTER: "Computer Lab",
  PRINT: "Print Station",
  AC: "A/C",
  MUSIC: "Music Room"
}

let AmenitiesTitle = styled.h2`
  margin-top: -0.3vw;
  margin-bottom: 1vw;
  margin-left: 0.6vw;
  font-weight: 5000;
  width: 100%;
`

let AmenityIcon = styled.img`
  opacity: 0.5;
  height: 20px;
`

let AllAmenities = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(50%, 1fr));
  width: 100%;
`

let AmenitiesContainer = styled.div`
  ${props => props.theme.grayBorder}
  padding: 3vw;
`

let Amenity = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`

export default class Amenities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      /* Props format for this.props.amenities 
      should be an array of string arrays, where 
      the inner string array is a key-value pair
      in the format of [amenityType, amenityLabel]. 
      See example in storybook. */
      amenities: this.props.amenities,
      width: window.innerWidth,
    };

    this.populateAmenities = this.populateAmenities.bind(this);
    this.showAllAmenities = this.showAllAmenities.bind(this);
    this.showSomeAmenities = this.showSomeAmenities.bind(this);
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

 

  populateAmenities(a) {
    return a.map((key, index) => {
      if(this.state.amenities[key] == 1){
        return <Amenity key={index++}>
        <AmenityIcon src={icon} />
        <p>{amenitiesMap[key]}</p>
      </Amenity>
      }
    });
  }

  showAllAmenities() {
    return this.populateAmenities(Object.keys(this.state.amenities));
  }

  showSomeAmenities() {
    //let index = 0
    return this.populateAmenities(Object.keys(this.state.amenities).slice(0, 7));
  }

  wrapAmenitiesGrid(amenities) {
    return <AllAmenities>
      {amenities}
    </AllAmenities>
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;
    if(isMobile) {
      return (
      <Expander 
        custom={null} 
        showAll={this.wrapAmenitiesGrid(this.showAllAmenities())} 
        showSome={this.wrapAmenitiesGrid(this.showSomeAmenities())}>
          <AmenitiesTitle>Amenities</AmenitiesTitle>
      </Expander>
      );
    } 
    else {
      return (
        <AmenitiesContainer>
          <AmenitiesTitle>Amenities</AmenitiesTitle>
          {this.wrapAmenitiesGrid(this.showAllAmenities())}
        </AmenitiesContainer>
      );
    }
  }
}
