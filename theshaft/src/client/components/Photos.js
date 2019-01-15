import React, { Component } from "react";
import "./Dorm.css";

export default class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageOne: this.props.imageOne,
      imageTwo: this.props.imageTwo,
      imageThree: this.props.imageThree,
      imageFour: this.props.imageFour
    };
  }

  render() {
    return (
      <div class="picsHigh">
        <img class="blinky" src={this.state.imageOne} />
        <div class="picsMid">
          <img class="pinky" src={this.state.imageTwo} />
          <div class="picsLow">
            <img class="inky" src={this.state.imageThree} />
            <img class="clyde" src={this.state.imageFour} />
          </div>
        </div>
      </div>
    );
  }
}
