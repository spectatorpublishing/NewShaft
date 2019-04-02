import React, { Component } from "react";
import styled from 'styled-components';
import chris_v from '../assets/chrisv_blue.svg';
import { theme } from "../util/GlobalStyles";

let Title = styled.h1`
    margin-top: -0.3vw;
    margin-bottom: 1vw;
    margin-left: 0.6vw;
    font-weight: 5000;
    width: 100%;
    @media only screen and (max-width: 767px) {
        font-size: 1.8em;
    }
`

let ExpanderBox = styled.div`
    background-color: white;
    position: relative;
    top: 50px;
    min-height: 100px;
    margin: 0 8% 30px 8%;
    padding: 1.8vw;
    padding-bottom: 0.5vh;
    border-radius: 20px;
    @media only screen and (max-width: 767px) {
        margin: 0 8% 50px 8%;
        min-height: 80px;
        padding: 0.2vw;
    }
`

let RowDisplay = styled.div`
    display: flex;
    flex-direction: row;
`

let ExpanderContent = styled.div`
  padding: 1rem;
  color: ${({ textColor }) => textColor}
`

let ExpanderList = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${({ textColor }) => textColor}
`

let ToggleSize = styled.button`
  background: none;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  justify-content: center;
  padding: 0.1rem;
  width: 10%;
`

let ChrisV = styled.div`
    & img {
        transform: ${ props => props.flip ? "scale(4,-3)" : "scale(4, 3) "};
        margin: 2px 0;
    }

    @media only screen and (max-width: 767px) {
        & img {
            transform: ${ props => props.flip ? "scale(2.5,-2)" : "scale(2.5, 2) "};
            margin: 2px 0;
        }
    }
`


export default class FAQBubble extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            textColor: theme.darkGray,
          };
          this.toggleSize = this.toggleSize.bind(this);
        
    }

    toggleSize(e) {
        this.setState({expanded: !this.state.expanded});
    }

    render() {
        return(
            <ExpanderBox>
                <RowDisplay>
                <Title>
                    {this.props.titleText}
                </Title>
                <ToggleSize onClick={this.toggleSize}>
                    <ChrisV flip={this.state.expanded}><img src={chris_v}></img></ChrisV>
                </ToggleSize>
                </RowDisplay>

                <ExpanderContent textColor={this.state.textColor}>
                    {this.props.children}
                <ExpanderList textColor={this.state.textColor}>
                    {this.state.expanded ? this.props.showAll : this.props.showSome}
                </ExpanderList>
                </ExpanderContent>
                
            </ExpanderBox>
        );
    }
}