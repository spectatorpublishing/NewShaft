import React, { Component } from "react";
import styled from 'styled-components';

let Span = styled.div`
  color: grey;  
`

let Title = styled.h2`
`

let Content = styled.span`
  width: 300px;
  color: #5a5a5a; 
`
export default class TipTrick extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TipTrick">
          <Title> Tip </Title>
          <Content>{this.props.tip}</Content>
          <br/>
      </div>
    );
  }
}
