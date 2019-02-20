import React, { Component } from "react";
import styled from 'styled-components';

let Table = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  border-bottom: 2px solid palevioletred;
`

let Span = styled.div`
  color: grey;  
`

let Title = styled.h2`
`

let Content = styled.span`
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
          <Table> <Content>{this.props.tip}</Content> </Table>
          <br/>
      </div>
    );
  }
}
