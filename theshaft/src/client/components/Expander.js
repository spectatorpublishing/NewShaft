import React, { Component } from "react";
import styled from 'styled-components';

let ExpanderBox = styled.div`
    border: 1px black solid;
    border-radius: 10px;
    max-width: 400px;
`

let ExpanderContent = styled.div`
    padding: 20px;
`

let ExpanderList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

let ToggleSize = styled.div`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top: 1px black solid;
    display: flex;
    font-weight: bold;
    justify-content: center;
    padding: 5px 20px;

    :hover {
      background-color: #ddd;
    }

    :focus {
      background-color: #ddd;
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
