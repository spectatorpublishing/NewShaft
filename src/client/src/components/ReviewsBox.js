import styled from "styled-components";
import React, { Component } from "react";
import ReviewStat from "./ReviewStat";
import SlidingReview from "./SlidingReview";


let Border = styled.div`
    ${props => props.theme.grayBorder}
    padding: 2vw;
    padding-bottom: 6vh;
    display: flex;
    flex-direction: column;
`
let MobileBorder = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 6vw;
`

let InfoBox = styled.div`
    display: flex;
    flex-direction: row;
`

let MobileInfoBox = styled.div`
    display: flex;
    flex-direction: column;
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
        if(isMobile) {
            return(
                <MobileBorder>
                    <MobileInfoBox>
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
                    <InfoBox>
                        <SlidingBox>
                            <SlidingReview reviews={this.props.reviews}/>
                        </SlidingBox>
                    </InfoBox>
                </Border>
            );
        }



    }

}
