import React, { Component } from "react";
import styled from 'styled-components';

let Table = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  border: 2px solid palevioletred;
`


export default class AtAGlance extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AtAGlance">
          <h2> At a glance </h2>
          <Table> <span color="green">Location</span> {this.props.location} </Table>
          <Table> <span>Room Type</span> {this.props.roomtype} </Table>
          <Table> <span>Class Make-Up</span> {this.props.classmakeup} </Table>
          <Table> <span># of Floors</span> {this.props.numfloors} </Table>
          <br/>
      </div>
    );
  }
}
