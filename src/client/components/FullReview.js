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
      <Expander custom={null} showSome={<QuickReview />} showAll={<ReviewList />} />
    );
  }
}
