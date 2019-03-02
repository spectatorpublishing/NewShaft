import styled from "styled-components";
import React, { Component } from "react";
import { is } from "immutable";

let Border = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px ${props => props.theme.lightGray} solid;
    border-radius: calc(${props => props.theme.borderRadius} * 2);
    padding: 0.8vw;
    padding-top: 16%;
    padding-bottom: 16%;
    margin-top: 2vw;
    margin-right: 2vw;
    text-align: center;
    //width: 100%;
`
let MobileBorder = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px grey solid;
    border-radius: 20px;
    padding: 0.8vw;
    padding-top: 8%;
    padding-bottom: 10%;
    margin-top: 2vw;
    margin-right: 4vw;
    margin-left: 4vw;
    text-align: center;
    width: 100%;
    
`

let Text = styled.div`
    margin-top: -0.3vw;
    margin-bottom: 1vw;
    margin-left: 0.6vw;
    margin-right: 0.6vw;
    text-align: center;
`

let BoldText = styled.h1`
    font-weight: bold;
`

let SubText = styled.h6`
`

export default class ReviewStat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boldText: this.props.boldText,
            subText: this.props.subText,
            isMobile: this.props.isMobile,
        }
    }

    render() {
        const { isMobile } = this.state;

        if(isMobile) {
            return(
                <MobileBorder>
                    <Text>
                        <BoldText>{this.props.boldText}</BoldText>
                        <SubText>{this.props.subText}</SubText>
                    </Text>
                </MobileBorder>
            );
        }
        else {
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

    
}