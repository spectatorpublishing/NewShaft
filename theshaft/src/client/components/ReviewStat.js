import styled from "styled-components";
import React, { Component } from "react";

let Border = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px grey solid;
    border-radius: 20px;
    padding: 0.8vw;
    padding-top: 16%;
    padding-bottom: 16%;
    margin-top: 2vw;
    margin-right: 2vw;
    text-align: center;
`

let Text = styled.div`
    margin-top: -0.3vw;
    margin-bottom: 1vw;
    margin-left: 0.6vw;
    margin-right: 0.6vw;
    text-align: center;
`

let BoldText = styled.h1`
    color: grey;
    font-size: 3rem;
    font-weight: bolder;
`

let SubText = styled.h6`
    color: grey;
    font-size: 0.8rem;
    font-weight: lighter;
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