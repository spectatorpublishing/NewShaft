import React, { Component } from "react";
import Review from "./Review.js";

export default class ReviewList extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <div>
        <Review stars="3" review="I hate this place" thumbsUp="100" thumbsDown="1" />
        <Review stars="4" review="love this place" thumbsUp="8" thumbsDown="1" />
        <Review stars="1" review="asddf this place" thumbsUp="8" thumbsDown="17" />
      </div>
    );
  }
}
