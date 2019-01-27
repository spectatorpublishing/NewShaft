import React, { Component } from "react";
import Expander from './Expander.js';
import icon from "../assets/marker.svg"; // to-do: import all actual icons
import "../css/Amenities.css";

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
      expanded: false
    };

    this.showAllAmenities = this.showAllAmenities.bind(this);
    this.showSomeAmenities = this.showSomeAmenities.bind(this);
    this.toggleSize = this.toggleSize.bind(this);
  }

  showAllAmenities() {
    let index = 0
    return this.state.amenities.map((amenity) => {
      return <div className="amenity" key={index++}>
        <img src={icon} className="amenityIcon" alt={amenity[0]}/>
        <div className="amenityLabel"> {amenity[1]} </div>
      </div>
      });
  }

  showSomeAmenities() {
    let index = 0
    return this.state.amenities.slice(0, 6).map((amenity) => {
      return <div className="amenity" key={index++}>
        <img src={icon} className="amenityIcon" alt={amenity[0]}/>
        <div className="amenityLabel"> {amenity[1]} </div>
      </div>
      });
  }

  toggleSize(e) {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    return (
      <Expander showAll={this.showAllAmenities()} showSome={this.showSomeAmenities()}>
        <h2 className="amenitiesTitle"> Amenities </h2>
      </Expander>
    );
  }
}
