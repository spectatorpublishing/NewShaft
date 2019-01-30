import React, { Component } from "react";
import styled from 'styled-components';

import "../css/DormButton.css";

let Button = styled.div`
  text-align: left;
  border: 5px solid #9B9B9B;
  color: #9B9B9B;
  display: inline-block;
  cursor: pointer;
  margin: 10px;
`

export default class DormButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: this.props.school,
      name: this.props.name,
      image: this.props.image,
      amenities: this.props.amenities,
      description: this.props.description
    };
  }

  render() {
    return (
      <div className="DormButton">
        <img className="dormimage" src={this.state.image} />
        <div className="details">
            <p className="school"> { this.state.school } </p>
            <h4 className="dormname"> {this.state.name} </h4>
            <p className="amenities"> {this.state.amenities} </p>
            <p className="description"> {this.state.description} </p>
        </div>
        <br />
      </div>
    );
  }
}
