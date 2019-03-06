import React, { Component } from "react";
import styled from 'styled-components';
import { theme } from "../util/GlobalStyles";

let ExpanderBox = styled.div`
  border: 1px ${({ color }) => color} solid;

  ${({ boxStyle }) => boxStyle}
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
  border-bottom-left-radius: ${props => props.theme.borderRadius};
  border-bottom-right-radius: ${props => props.theme.borderRadius};
  border-top: 1px ${({ color }) => color} solid;
  display: flex;
  justify-content: center;
  padding: 0.3rem;
  width: 100%;

  :hover {
    background-color: ${({ color }) => color};
  }

  :active {
    background-color: ${({ color }) => color};
  }
`

let ButtonText = styled.h6`
  color: ${({ textColor }) => textColor}
`

export default class Expander extends Component {
  constructor(props) {
    super(props);


    this.state = {
      expanded: false,
      boxStyle: this.props.custom ? this.props.custom.boxStyle : "",
      color: this.props.custom ? this.props.custom.color : theme.lightGray,
      textColor: this.props.custom ? this.props.custom.textColor : theme.darkGray,
    };
    this.toggleSize = this.toggleSize.bind(this);
  }

  toggleSize(e) {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    return (
      <ExpanderBox boxStyle={this.state.boxStyle} color={this.state.color}>
        <ExpanderContent textColor={this.state.textColor}>
          {this.props.children}
          <ExpanderList textColor={this.state.textColor}>
            {this.state.expanded ? this.props.showAll : this.props.showSome}
          </ExpanderList>
        </ExpanderContent>
        <ToggleSize color={this.state.color} onClick={this.toggleSize}>
          <ButtonText textColor={this.state.textColor}>Show {this.state.expanded ? "Less" : "All"}</ButtonText>
        </ToggleSize>
      </ExpanderBox>
    );
  }
}
