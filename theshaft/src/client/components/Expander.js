import React, { Component } from "react";
import styled from 'styled-components';

let ExpanderBox = styled.div`
    border: 1px grey solid;
    border-radius: 1.5vw;
    width:40vw;
`

let ExpanderContent = styled.div`
    padding: 1.5vw;
    
`

let ExpanderList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

let ToggleSize = styled.div`
    color: grey;
    border-radius: 2px;
   
    border-top: 1px grey solid;
    display: flex;
    font-weight: bold;
    justify-content: center;
    padding: 0.5vw 4vw;

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
