import React, { Component } from "react";
import styled from 'styled-components';

let ExpanderBox = styled.div`
    border: 1px ${props => props.theme.lightGray} solid;
    border-radius: 10px;
`

let ExpanderContent = styled.div`
    padding: 1rem;
`

let ExpanderList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

let ToggleSize = styled.button`
    border: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top: 1px ${props => props.theme.lightGray} solid;
    color: ${props => props.theme.darkGray};
    display: flex;
    font-weight: bold;
    justify-content: center;
    padding: 0.3rem;
    width: 100%;

    :hover {
      background-color: ${props => props.theme.lightGray};
    }

    :active {
      background-color: ${props => props.theme.lightGray};
    }
`

export default class Expander extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
    this.toggleSize = this.toggleSize.bind(this);
  }

  toggleSize(e) {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    return (
      <ExpanderBox>
        <ExpanderContent>
          {this.props.children}
          <ExpanderList>
            {this.state.expanded ? this.props.showAll : this.props.showSome}
          </ExpanderList>
        </ExpanderContent>
        <ToggleSize onClick={this.toggleSize}>
          <h6>Show {this.state.expanded ? "Less" : "All"}</h6>
        </ToggleSize>
      </ExpanderBox>
    );
  }
}
