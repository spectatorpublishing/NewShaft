import React, { Component } from "react";
import Review from "./Review.js";
import '../css/Review.css';
import styled from 'styled-components';

const years_map = {
  "first-years": "Freshman",
  "sophomores": "Sophomore",
  "juniors": "Junior",
  "seniors": "Senior"
};

export default class SlidingReview extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let numReviews = this.props.reviews.length;

        if(numReviews == 0){
          return(
            <h2>No Reviews :(</h2>
          );
        }

        let reviews = []
        for(let i = 0; i < numReviews; i++){
          reviews.push(this.props.reviews[i]);
        }

        return (
          <div>
            {reviews.map((review, i) => (
              <Review
                key={""+i}
                stars={review.NUM_STARS}
                review={review.REVIEW_TXT}
                room={review.ROOM_NUM}
                year={years_map[review.YEAR]}
                timestamp={review.TIMESTAMP}
                />
            ))}
          </div>
        );
    }
}
