import React, { Component } from "react";
import styled from 'styled-components';
import Expander from './Expander.js';
import icon from "../assets/marker.svg"; // to-do: import all actual icons

let AmenitiesTitle = styled.h2`
    margin-top: -0.3vw;
    margin-bottom: 1vw;
    color: grey;
    margin-left: 0.6vw;
    font-weight: 5000;
    font-size: 2em;
    width: 100%;
`

let AmenityIcon = styled.img`
    opacity: 0.5;
    height: 20px;
`

let AllAmenities = styled.div`
  color: grey;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(50%, 1fr));

  font-size: 1.25em;
`

let AmenitiesContainer = styled.div`
border: 1px grey solid;
border-radius: 10px;
padding: 3vw;
`

let Amenity = styled.div`
    color: grey;
    display: flex;
    flex-direction: row;
    width: 50%;
    font-size: 1em;
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

    this.showAllAmenities = this.showAllAmenities.bind(this);
    this.showSomeAmenities = this.showSomeAmenities.bind(this);
    this.nonMobile = this.nonMobile.bind(this);
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

  nonMobile() {
    let index = 0
    // this.props.amenities.unshift(["blankspace", " "]);
    return this.state.amenities.map((amenity) => {
      return <Amenity key={index++}>
        <AmenityIcon src={icon} alt={amenity[0]}/>
        <div> {amenity[1]}</div>
      </Amenity>
      });
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;
    if(isMobile) {
      return (
      <Expander showAll={this.showAllAmenities()} showSome={this.showSomeAmenities()}>
          <AmenitiesTitle> Amenities </AmenitiesTitle>
      </Expander>
      );
    } 
    else {
    return (
      <AmenitiesContainer>
      <AmenitiesTitle> Amenities </AmenitiesTitle>
      <AllAmenities>
          {this.nonMobile()}
      </AllAmenities>
      </AmenitiesContainer>
    );
  }
}
}
