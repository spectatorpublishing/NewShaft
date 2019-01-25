import React, { Component } from "react";
import styled from 'styled-components';

let Table = styled.div`
  display: flex;
  align-content: space-between;
  max-width: 300px;
`

export default class AtAGlance extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AtAGlance">
          <h2> At a glance </h2>
          <Table> Location {this.props.location} </Table>
          <Table> Room Type {this.props.roomtype} </Table>
          <Table> Class Make-Up {this.props.classmakeup} </Table>
          <Table> # of Floors {this.props.numfloors} </Table>
          <br/>
      </div>
    );
  }
}
