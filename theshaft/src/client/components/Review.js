import React, { Component } from "react";
import "../css/Review.css";
import styled from 'styled-components';

let Star = styled.span`
  color: ${props => props.theme.columbiaBlue};
`

let ReviewText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-self: center;
`

let ReviewerInfo = styled.h6`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  padding-top: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.lightGray};
`

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thumbsDown: this.props.thumbsDown,
      thumbsUp: this.props.thumbsUp
    };
  }

  createStars(score) {
    let wrapper = [];
    let stars = [];
    let k = 0
    for(let i = 0; i < score; i++) {
      stars.push(<Star key={k++}>&#x2605;</Star>);
    }
    for(let j = 0; j < 5 - score; j++) {
      stars.push(<Star key={k++}>&#x2606;</Star>);
    }
    wrapper.push(<div key={k++}>{stars}</div>);
    return wrapper;
  }

  render() {
    return (
      <div className="parent">
        <div className="row">
          <div>
            {this.createStars(this.props.stars)}
          </div>
        </div>
        <div className="fullReview">
          <ReviewText>
            <p>{this.props.review}</p>
          </ReviewText>
          {/* <div className="thumbs">
            <div>
                <button>
                    <span>&#x1F44D;</span>
                    <span>{this.props.thumbsUp}</span>
                </button>
            </div>
            <div>
                <button>
                    &#x1F44E;
                    <span>{this.props.thumbsDown}</span>
                </button>
            </div>
          </div> */}
        </div>
        <ReviewerInfo>
          {"Room " + this.props.room + " • " + this.props.year + " • " + this.props.timestamp}
        </ReviewerInfo>
      </div>
    );
  }
}
