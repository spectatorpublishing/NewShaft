import React, { Component } from "react";
import "../css/Review.css";

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  createStars(score) {
    let wrapper = [];
    let stars = [];
    for(let i = 0; i < score; i++) {
      stars.push(<span>&#x2605;</span>);
    }
    for(let j = 0; j < 5 - score; j++) {
      stars.push(<span>&#x2606;</span>);
    }
    wrapper.push(<div>{stars}</div>);
    return wrapper;
  }

  render() {
    return (
      <div class="parent">
        <div class="row">
          <div id="stars">
            {this.createStars(3)}
          </div>
          <div>
            User would recommend
          </div>
        </div>
        <div class="row">
          <div class="review">
            review
          </div>
          <div class="thumbs">
            <div>
              	<span>&#x1F44D;</span>
                <span>{this.props.thumbsUp}</span>
            </div>
            <div>
                &#x1F44E;
                <span>{this.props.thumbsDown}</span>
            </div>
          </div>
        </div>
        <div class="reviewerInfo">
          reviewerInfo
        </div>
      </div>
    );
  }
}
