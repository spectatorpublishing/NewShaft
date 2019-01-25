import React, { Component } from "react";
import "../css/Review.css";

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <div id="parent">
        <div class="row">
          <div id="stars">
            stars
          </div>
          <div>
            User would recommend
          </div>
        </div>
        <div id="review">
          review
        </div>
        <div id="reviewerInfo">
          reviewerInfo
        </div>
      </div>
    );
  }
}
