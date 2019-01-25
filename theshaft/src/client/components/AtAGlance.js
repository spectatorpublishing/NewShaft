import React, { Component } from "react";
import styled from 'styled-components';

let Table = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  border-bottom: 2px solid palevioletred;
`

let Title = styled.h2`
  font-family: Impact, fantasy;
`

let Content = styled.span`
  font-family: "Comic Sans MS", cursive, sans-serif;
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
          <Table> <span>Location</span> <Content>{this.props.location}</Content> </Table>
          <Table> <span>Room Type</span> <Content>{this.props.roomtype}</Content> </Table>
          <Table> <span>Class Make-Up</span> <Content>{this.props.classmakeup}</Content> </Table>
          <Table> <span># of Floors</span> <Content>{this.props.numfloors}</Content> </Table>
          <br/>
      </div>
    );
  }
}
