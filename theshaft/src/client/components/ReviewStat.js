import styled from "styled-components";
import React, { Component } from "react";

let Border = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px grey solid;
    border-radius: 20px;
    padding: 0.8vw;
    margin-top: 2vw;
`

let Text = styled.div`
    margin-top: -0.3vw;
    margin-bottom: 1vw;
    margin-left: 0.6vw;
    margin-right: 0.6vw;
`

let BoldText = styled.h2`
    color: grey;
    font-size: 2rem;
    font-weight: bolder;
    margin: .5rem 0 -0.5rem 1.2rem;
`

let SubText = styled.h6`
    color: grey;
    font-size: 1rem;
    font-weight: bolder;
    margin: .5rem 0 -0.5rem 1.2rem;
`

export default class ReviewStat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boldText: this.props.boldText,
            subText: this.props.subText,
        }
    }

    render() {
        return(
            <Border>
                <Text>
                    <BoldText>{this.props.boldText}</BoldText>
                    <SubText>{this.props.subText}</SubText>
                </Text>
            </Border>
        );
    }

    
}