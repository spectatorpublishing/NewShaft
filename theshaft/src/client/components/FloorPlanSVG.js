import React, { Component } from "react";
import styled from 'styled-components';

let FloorPlanWrapper = styled.div`
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

    this.handleRectClick = this.handleRectClick.bind(this);
  }

  componentDidMount() {
    let rectsArray = document.querySelectorAll("rect");
    rectsArray.forEach((rect) => {
      rect.addEventListener("click", this.handleRectClick);
    });
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    let rectsArray = document.querySelectorAll("rect");
    rectsArray.forEach((rect) => {
      rect.removeEventListener("click", this.handleRectClick);
    });
  }

  handleRectClick(e) {
    console.log(e.target.parentElement.dataset.name);
    console.log(e.clientX + " " + e.clientY);
  }

  render() {
    return (
        <FloorPlanWrapper>
          {this.props.children}
        </FloorPlanWrapper>
    );
  }
}
