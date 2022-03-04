import React, { Component } from "react";
import "../css/Review.css";
import styled from 'styled-components';
import Vote from "./Vote";

let Wrapper = styled.div`
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 5px 5px 10px ${props => props.theme.lightGray};
    border: 1px solid ${props => props.theme.lightGray};
`;

let Star = styled.span`
  color: ${props => props.theme.columbiaBlue};
`

let ReviewText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-self: center;
`

let ReviewerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  margin-left: 1rem;
  color: ${props => props.theme.columbiaBlue};
`

let InfoWrapper = styled.div`
    display: flex;
    justify-content: row;
    align-items: center;
    padding-bottom: .75rem;
`;

export default class ReviewPageReview extends Component {
  constructor(props) {
    super(props);
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

  createReviewerInfo(room, year, timestamp, reccomended){
    // parse year from MySQL timestamp
    let parsedTime = timestamp.split('/', 3)[2].substring(0, 4)
    let rec = Number(reccomended) == 1 ? "Recommended" : "Not Recommended"
    return (<ReviewerInfo>
              {"Room " + room + " • " + year  + " • " + parsedTime + " • " + rec}
            </ReviewerInfo>);
  }

  render() {
    let hasNoReviews = (this.props.review === "No Reviews")
    return (
      <Wrapper>
          <InfoWrapper>
            {hasNoReviews ? null : this.createStars(this.props.stars)}
            {hasNoReviews ? null : this.createReviewerInfo(this.props.room, this.props.year, this.props.timestamp, this.props.recommended)}
          </InfoWrapper>
          <ReviewText>
            <p>{this.props.review}</p>
          </ReviewText>
          <Vote dorm = {this.props.dorm} roomNum = {this.props.room} upvotes = {this.props.thumbs_up} downvotes = {this.props.thumbs_down} />
      </Wrapper>
    );
  }
}
