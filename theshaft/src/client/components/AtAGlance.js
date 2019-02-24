import React, { Component } from "react";
import styled from 'styled-components';

let Table = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid lightgray;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
`

let Span = styled.div`
  color: grey;  
`

let Title = styled.h2`
`

let Content = styled.span`
  color: #5a5a5a;
`

export default class AtAGlance extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AtAGlance">
          <Title> At a glance </Title>
          <Table> <Span>Location</Span> <Content>{this.props.location}</Content> </Table>
          <Table> <Span>Room Type</Span> <Content>{this.props.roomtype}</Content> </Table>
          <Table> <Span>Class Make-Up</Span> <Content>{this.props.classmakeup}</Content> </Table>
          <Table> <Span># of Floors</Span> <Content>{this.props.numfloors}</Content> </Table>
          <br/>
      </div>
    );
  }
}
