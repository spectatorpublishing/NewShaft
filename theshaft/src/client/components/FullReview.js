import React, { Component } from "react";
import Expander from "./Expander.js";
import QuickReview from "./QuickReview.js";
import Review from "./Review.js";
import ReviewList from "./ReviewList.js";

export default class FullReview extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <Expander showSome={<Review stars="3" review="I hate this place" thumbsUp="100" thumbsDown="1" />} showAll={<ReviewList />} />
    );
  }
}

