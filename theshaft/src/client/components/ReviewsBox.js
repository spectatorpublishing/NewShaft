import styled from "styled-components";
import React, { Component } from "react";
import ReviewStat from "./ReviewStat";
import SlidingReview from "./SlidingReview";


let Border = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px grey solid;
    border-radius: 10px;
    padding: 2vw;
`

let Reviews = styled.h3`
    margin-top: -0.3vw;
    margin-bottom: 1vw;
    margin-left: 0.6vw;
    color: grey;
    font-weight: 5000;
    font-size: 1.7em;
`

let Stats = styled.div`
    margin-top: 2vw;
    margin-bottom: 1vw;
    margin-left: 0vw;
    float: left;
`

let StatBox = styled.div`
    margin-top: 20px;
    margin-bottom: 1vw;
`

let SlidingBox = styled.div`
    float: left;
    width: 50%;
`


export default class ReviewsBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Border>
                <Reviews>Reviews</Reviews>
                <Stats>
                    <StatBox>
                        <ReviewStat boldText={this.props.stars} subText="average stars"/>
                        <ReviewStat boldText={this.props.recommend} subText="recommend"/>
                        <ReviewStat boldText={this.props.ranking} subText="best ranking"/>
                    </StatBox>
                </Stats>
                <SlidingBox>
                    <SlidingReview reviews={this.props.reviews}/>
                </SlidingBox>
            </Border>
        );
    }

}

