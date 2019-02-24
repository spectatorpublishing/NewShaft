import styled from "styled-components";
import React, { Component } from "react";
import ReviewStat from "./ReviewStat";
import SlidingReview from "./SlidingReview";


let Border = styled.div`
    border: 1px grey solid;
    border-radius: 10px;
    padding: 2vw;
`

let Reviews = styled.h3`
    margin-top: 2vh;
    margin-bottom: 2vh;
    margin-left: 2vw;
    padding-left: 0.5vw;
    color: grey;
    font-weight: bold;
    font-size: 1.7em;    
`

let StatBox = styled.div`
    margin-top: 2vh;
    margin-bottom: 1vh;
    margin-left: 2vw;
    float: left;
`

let SlidingBox = styled.div`
    margin-top: 3vh;
    margin-left: 2vw;
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
                <StatBox>
                    <ReviewStat boldText={this.props.stars} subText="average stars"/>
                    <ReviewStat boldText={this.props.recommend} subText="recommend"/>
                    <ReviewStat boldText={this.props.ranking} subText="best ranking"/>
                </StatBox>
                <SlidingBox>
                    <SlidingReview reviews={this.props.reviews}/>
                </SlidingBox>
            </Border>
        );
    }

}

