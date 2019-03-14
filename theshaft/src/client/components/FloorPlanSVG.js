import React, { Component } from "react";
import styled from 'styled-components';
import { ReactComponent as ClaremontSVG } from "../assets/47 Claremont 1.svg";

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

    // Attach unique id to component to access SVG
    let id = this.props.name.replace(/\ /g, "-");
    // Generate AWS url
    let url = this.props.name.replace(/\ /g, "+");
    url = "https://s3.amazonaws.com/shaft-dorm-floorplans/" + url + ".jpg";

    this.state = {
      floorplanId: id,
      floorplanUrl: url
    };

    this.handleRectClick = this.handleRectClick.bind(this);
  }

  componentDidMount() {
    let svgEl = document.getElementById(this.state.floorplanId);
    // Remove any SVG styling within the file
    console.log(svgEl.querySelector("style"));

    // Override the xlink:href attribute (which is deprecated)
    // with an href that links to the corresponding floorplan JPG
    let baseImage = svgEl.querySelectorAll("image")[0];
    let xlinkHref = baseImage.getAttributeNode("xlink:href");
    baseImage.removeAttributeNode(xlinkHref);
    baseImage.setAttribute("href", this.state.floorplanUrl);

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
    let roomEl = e.target;
    let suiteEl = roomEl.parentElement;
    let room = this.getDataFromSvg(roomEl);
    let suite = this.getDataFromSvg(suiteEl);
    console.log("Suite: " + suite + "\tRoom: " + room);
  }

  getDataFromSvg(el) {
    return el.dataset.name ? el.dataset.name : el.getAttribute("id");
  }

  render() {
    return (
        <FloorPlanWrapper id={this.state.floorplanId}>
          <ClaremontSVG></ClaremontSVG>
        </FloorPlanWrapper>
    );
  }
}
