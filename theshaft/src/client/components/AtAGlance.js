import React, { Component } from "react";
import styled from 'styled-components';

let Table = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  border: 2px solid palevioletred;
  
`
let Span = styled.div`
  color: grey; 
  
`



export default class AtAGlance extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AtAGlance">
          <h2> At a glance </h2>
          <Table> <Span>Location</Span> {this.props.location} </Table>
          <Table> <Span>Room Type</Span> {this.props.roomtype} </Table>
          <Table> <Span>Class Make-Up</Span> {this.props.classmakeup} </Table>
          <Table> <Span># of Floors</Span> {this.props.numfloors} </Table>
          <br/>
      </div>
    );
  }
}
