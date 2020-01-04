import React, { Component } from "react";
import "../css/Reviews.css";
import Review from "./Review.js";

export default class QuickReview extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <div id="parent">
        <div id="reviewQuickView">
          <div>
            <div>Carman Hall</div>
            <div>Stars</div>
          </div>
          <div>
            <Review thumbsUp="1" thumbsDown="3"/>
          </div>
        </div>
      </div>
    );
  }
}
