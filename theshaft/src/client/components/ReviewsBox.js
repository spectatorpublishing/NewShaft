import styled from "styled-components";
import React, { Component } from "react";
import ReviewStat from "./ReviewStat";
import SlidingReview from "./SlidingReview";


let Border = styled.div`
    border: 1px grey solid;
    border-radius: 10px;
    padding: 2vw;
    display: flex;
    flex-direction: column;
`
let MobileBorder = styled.div`
    // border: 1px grey solid;
    // border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 6vw;
`

let Reviews = styled.h3`
    margin-top: 2vh;
    margin-bottom: 2vh;
    padding-left: 0.5vw;
    color: grey;
    font-weight: bold;
    font-size: 1.7em;    
`

let InfoBox = styled.div`
    display: flex;
    flex-direction: row;
`

let MobileInfoBox = styled.div`
    display: flex;
    flex-direction: column;
`

let StatBox = styled.div`
    // margin-top: 2vh;
    margin-bottom: 1vh;
`
let MobileStatBox = styled.div`
    margin-bottom: 1vh;
    display: flex;
    flex-direction: row;
    width: 100%
`

let SlidingBox = styled.div`
    margin-top: 3vh;
    width: 60%;
`

let MobileSlidingBox = styled.div`
    margin-top: 1vh;
    width: 100%
`


export default class ReviewsBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener("resize", this.handleWindowSizeChange);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowSizeChange);
      }
    
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };

    render() {
        const { width } = this.state;
        const isMobile = width <= 768;
        console.log('WIDTH WIDTH WIDTH ' + width);

        if(isMobile) {
            return(
                <MobileBorder>
                    <Reviews>Reviews</Reviews>
                    <MobileInfoBox>
                        <MobileStatBox>
                            <ReviewStat boldText={this.props.stars} subText="average stars" isMobile={isMobile}/>
                            <ReviewStat boldText={this.props.ranking} subText="best ranking" isMobile={isMobile}/>
                        </MobileStatBox>
                        <MobileSlidingBox>
                            <SlidingReview reviews={this.props.reviews}/>
                        </MobileSlidingBox>
                    </MobileInfoBox> 
                </MobileBorder>
            );
        }
        else {
            return(
                <Border>
                    <Reviews>Reviews</Reviews>
                    <InfoBox>
                        <StatBox>
                            <ReviewStat boldText={this.props.stars} subText="average stars" isMobile={isMobile}/>
                            <ReviewStat boldText={this.props.recommend} subText="recommend" isMobile={isMobile}/>
                            <ReviewStat boldText={this.props.ranking} subText="best ranking" isMobile={isMobile}/>
                        </StatBox>
                        <SlidingBox>
                            <SlidingReview reviews={this.props.reviews}/>
                        </SlidingBox>
                    </InfoBox>
                </Border>
            );
        }


        
    }

}

