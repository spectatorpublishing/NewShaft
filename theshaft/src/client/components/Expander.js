import React, { Component } from "react";
import styled from 'styled-components';

let ExpanderBox = styled.div`
    border: 1px darkgray solid;
    border-radius: 10px;
`

let ExpanderContent = styled.div`
    padding: 1em;
`

let ExpanderList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

let ToggleSize = styled.button`
    color: blue;
    border: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top: 1px darkgray solid;
    display: flex;
    font-size: 1em;
    font-weight: bold;
    justify-content: center;
    padding: 0.3em;
    width: 100%;

    :hover {
      background-color: whitesmoke;
    }

    :active {
      background-color: lightgray;
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
          Show {this.state.expanded ? "Less" : "All"}  
        </ToggleSize>
      </ExpanderBox>
    );
  }
}
