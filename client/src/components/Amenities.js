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

const AmenitiesTitle = styled.h2`
  margin-top: -5vw;
  margin-bottom: 1vw;
  font-weight: 900;
  width: 100%;
`

const AmenityIcon = styled.img`
  opacity: 0.5;
  height: 20px;
`

const AllAmenities = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(50%, 1fr));
  width: 100%;
  
`

const AmenitiesContainer = styled.div`
  padding: 3vw;
  margin-top: 1rem;
  padding-right: 1rem;
  box-shadow: 5px 5px 10px ${props => props.theme.lightGray};
  border: 1px solid ${props => props.theme.lightGray};
`

const Amenity = styled.div`
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
      return [
        <AmenitiesTitle>Amenities</AmenitiesTitle>,
        <Expander 
          custom={null} 
          showAll={this.wrapAmenitiesGrid(this.showAllAmenities())} 
          showSome={this.wrapAmenitiesGrid(this.showSomeAmenities())}>
        </Expander>
      ];
    } 
    else {
      return [
        <AmenitiesTitle>Amenities</AmenitiesTitle>,
        <AmenitiesContainer>
          {this.wrapAmenitiesGrid(this.showAllAmenities())}
        </AmenitiesContainer>
      ];
    }
  }
}
