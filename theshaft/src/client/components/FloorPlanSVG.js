import React, { Component } from "react";
import styled from 'styled-components';
import { ReactComponent as TestSVG } from "../assets/test_floorplan.svg";

let FloorPlanContainer = styled.div`
  height: 100vh;

  & rect {
    fill: none;
    pointer-events: all;
  }

  & rect:hover {
    fill: red;
    opacity: 0.3;
  }
`

export default class FloorPlanSVG extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <FloorPlanContainer>
          <TestSVG />
        </FloorPlanContainer>
    );
  }
}
