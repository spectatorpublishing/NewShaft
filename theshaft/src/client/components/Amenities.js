import React, { Component } from "react";
import styled from 'styled-components';
import Expander from './Expander.js';
import icon from "../assets/marker.svg"; // to-do: import all actual icons

let AmenitiesTitle = styled.h2`
    margin-top: -0.3vw;
    margin-bottom: 1vw;
    margin-left: 0.6vw;
    color: grey;
    font-weight: 5000;
    font-size: 2vw;
`

let Amenity = styled.div`
    color: grey;
    display: flex;
    flex-direction: row;
    width: 300px;
    font-size: 20px;
    margin-top: 15px;
`

let AmenityIcon = styled.img`
    opacity: 0.5;
    height: 20px;
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
      amenities: this.props.amenities
    };

    this.showAllAmenities = this.showAllAmenities.bind(this);
    this.showSomeAmenities = this.showSomeAmenities.bind(this);
    this.toggleSize = this.toggleSize.bind(this);
  }

  showAllAmenities() {
    let index = 0
    return this.state.amenities.map((amenity) => {
      return <Amenity key={index++}>
        <AmenityIcon src={icon} alt={amenity[0]}/>
        <div> {amenity[1]} </div>
      </Amenity>
      });
  }

  showSomeAmenities() {
    let index = 0
    return this.state.amenities.slice(0, 6).map((amenity) => {
      return <Amenity key={index++}>
        <AmenityIcon src={icon} alt={amenity[0]}/>
        <div> {amenity[1]} </div>
      </Amenity>
      });
  }

  toggleSize(e) {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    return (
        <Expander showAll={this.showAllAmenities()} showSome={this.showSomeAmenities()}>
          <AmenitiesTitle> Amenities </AmenitiesTitle>
        </Expander>
    );
  }
}
