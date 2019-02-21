import styled from "styled-components";
import React, { Component } from "react";

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
`

let StatBox = styled.div`
    margin-top: 20px;
    margin-bottom: 1vw;
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
                        {this.props.children}
                    </StatBox>
                </Stats>
                
            </Border>
        );
    }

}

