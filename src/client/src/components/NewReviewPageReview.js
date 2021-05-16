import React, { Component } from "react";
import "../css/Review.css";
import styled from 'styled-components';
import Vote from "./Vote";

let Wrapper = styled.div`
    padding: 1.2rem 1rem 1rem 1rem;
    margin-bottom: 2rem;
    box-shadow: 5px 5px 10px ${props => props.theme.lightGray};
    border: 1px solid ${props => props.theme.lightGray};
`;

let ReviewText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-self: center;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
`

let Date = styled.div`
  margin-left: auto;
`

let InfoWrapper = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-align: right;
  padding-top: 1rem;
  color: #707070;
`;

let monthsDict = {
  1: "january",
  2: "february",
  3: "march",
  4: "april",
  5: "may",
  6: "june",
  7: "july",
  8: "august",
  9: "september",
  10: "october",
  11: "november",
  12: "december"
};

export default class NewReviewPageReview extends Component {
  constructor(props) {
    super(props);
  }


  getPublishedDate(timestamp){
    // parse year from MySQL timestamp
    let posted = "posted: ".toUpperCase()
    let month = monthsDict[timestamp.split('/', 3)[0]].toUpperCase()
    let date = timestamp.split('/', 3)[1].substring(0, 2)
    let year = timestamp.split('/', 3)[2].substring(0, 4)
    let parsedDate = date + " " + month + " " + year
    return (
      <Date>{posted + parsedDate}</Date>
    );
  }

  render() {
    let hasNoReviews = (this.props.review === "No Reviews")
    return (
      <Wrapper>
          <ReviewText>
            <p>{this.props.review}</p>
          </ReviewText>
          <InfoWrapper>
            <Vote dorm = {this.props.dorm} roomNum = {this.props.room} upvotes = {this.props.thumbs_up} downvotes = {this.props.thumbs_down} />
            {hasNoReviews ? null : this.getPublishedDate(this.props.timestamp)}
          </InfoWrapper>
      </Wrapper>
    );
  }
}
