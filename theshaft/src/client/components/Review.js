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
    let k = 0
    for(let i = 0; i < score; i++) {
      stars.push(<span key={k++}>&#x2605;</span>);
    }
    for(let j = 0; j < 5 - score; j++) {
      stars.push(<span key={k++}>&#x2606;</span>);
    }
    wrapper.push(<div key={k++}>{stars}</div>);
    return wrapper;
  }

  render() {
    return (
      <div className="parent">
        <div className="row">
          <div className="stars">
            {this.createStars(this.props.stars)}
          </div>
          <div>
            User would recommend
          </div>
        </div>
        <div className="fullReview">
          <div className="review">
            {this.props.review}
          </div>
          <div className="thumbs">
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
        <div className="reviewerInfo">
          reviewerInfo
        </div>
      </div>
    );
  }
}
