import React, { Component } from "react";
import styled from 'styled-components';
import { ReactComponent as ClaremontSVG } from "../assets/47 Claremont 1.svg";
import ReactTooltip from 'react-tooltip';

let FloorPlanWrapper = styled.div`
  & rect {
    opacity: 0.3;
    pointer-events: all;
  }
`

let data = [
  {
      "ROOM": "4A",
      "PRIORITY": "30",
      "LOTTERY": "3000"
  },
  {
      "ROOM": "4B",
      "PRIORITY": "30",
      "LOTTERY": "3000"
  },
  {
      "ROOM": "4C",
      "PRIORITY": "30",
      "LOTTERY": "3000"
  },
  {
    "ROOM": "1A",
    "PRIORITY": "30",
    "LOTTERY": "3000"
},
{
    "ROOM": "1B",
    "PRIORITY": "30",
    "LOTTERY": "3000"
},
{
    "ROOM": "1C",
    "PRIORITY": "30",
    "LOTTERY": "3000"
}
]

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
      floorplanUrl: url,
      floorplanData: data
    };

    this.hoverStart = this.hoverStart.bind(this);
  }

  componentDidMount() {
    let svgEl = document.getElementById(this.state.floorplanId);
    // Remove any SVG styling within the file
    console.log(svgEl.querySelector("style"));
    for (var i = 0; i  < this.state.floorplanData.length; i++)
    {
        let room1 = this.state.floorplanData[i];
        document.querySelectorAll("rect").forEach((roomEl) => 
        {
          let suiteEl = roomEl.parentElement;
          let room2 = this.getDataFromSvg(suiteEl) + this.getDataFromSvg(roomEl);
          if (room1["ROOM"] == room2 && room1["PRIORITY"])
          {
            console.log("MATCH! " + room1["ROOM"] + " " + room2);
            roomEl.setAttribute("fill", "red");
          }
        });
    }
    // Override the xlink:href attribute (which is deprecated)
    // with an href that links to the corresponding floorplan JPG
    let baseImage = svgEl.querySelectorAll("image")[0];
    let xlinkHref = baseImage.getAttributeNode("xlink:href");
    baseImage.removeAttributeNode(xlinkHref);
    baseImage.setAttribute("href", this.state.floorplanUrl);

    let rectsArray = document.querySelectorAll("rect");
    rectsArray.forEach((rect) => {
      rect.addEventListener("mouseover", this.hoverStart);
    });
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    let rectsArray = document.querySelectorAll("rect");
    rectsArray.forEach((rect) => {
      rect.removeEventListener("mouseover", this.hoverStart);
    });
  }

  hoverStart(e) {
    let roomEl = e.target;
    let suiteEl = roomEl.parentElement;
    let room = this.getDataFromSvg(roomEl);
    let suite = this.getDataFromSvg(suiteEl);
    console.log("START Suite: " + suite + "\tRoom: " + room);
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
