import React, { Component } from "react";

import "../css/DormButton.css";

export default class DormButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      image: this.props.image,
      address: this.props.address,
      sundial_distance: this.props.sundial_distance,
      description: this.props.description
    };
  }

  render() {
    return (
      <div className="DormButton" onClick={() => this.onClick(this.state.name)}>
        <div className="image"><img src={this.state.image} /></div>
        <div className="details">
            <h3> {this.state.name} </h3>
            <h3> {this.state.address} </h3>
            <h3> {this.state.sundial_distance} </h3>
            <h3> {this.state.description} </h3>
        </div>
        <br />
      </div>
    );
  }
}
