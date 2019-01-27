import React, { Component } from "react";

import "../css/DormButton.css";

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
            <p> {this.state.amenities} </p>
            <p> {this.state.description} </p>
        </div>
        <br />
      </div>
    );
  }
}
