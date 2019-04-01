import React, { Component } from "react";
import styled from 'styled-components';
import ReactSVG from 'react-svg'
import ReactTooltip from 'react-tooltip';
import "../css/FloorPlanSVG.css";

let FloorPlanWrapper = styled.div`
  & rect {
    opacity: 0.3;
    pointer-events: all;
  }
`

let TooltipBox = styled.div`
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
`

let TooltipText = styled.p`
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
`

let TooltipBold = styled.b`
  color: ${props => props.theme.white};
  text-shadow: ${props => props.theme.shadow};
`

export default class FloorPlanSVG extends Component {
  constructor(props) {
    super(props);

    // Attach unique id to component to access SVG
    let name = props.dorm.replace(" Hall", "") + " " + props.floor;
    console.log(name);
    let id = name.replace(/\ /g, "-");
    // Generate AWS url
    let url = name.replace(/\ /g, "+");
    let jpgUrl = "https://s3.amazonaws.com/shaft-dorm-floorplans/" + url + ".jpg";
    let svgUrl = "https://s3.amazonaws.com/shaft-svg/"+ url +".svg";

    let dic = {};
    for (var i = 0; i  < this.props.data.length; i++) {
      let roomFromDb = this.props.data[i];
      dic[roomFromDb["ROOM"]] = {
        "ROOM_TYPE": roomFromDb["ROOM_TYPE"],
        "NEW_PRIORITY": roomFromDb["NEW_PRIORITY"],
        "NEW_NUM" : roomFromDb["NEW_NUM"]
      };
    }

    this.state = {
      floorplanId: id,
      floorplanJpg: jpgUrl,
      floorplanSvg: svgUrl,
      floorplanDic : dic
    };

    this.getStaticFloorplan = this.getStaticFloorplan.bind(this);
  }

  styleSVG(error, svg) {
    console.log(error);
    console.log(svg);

    // Get the parent div of the SVG element
    // let svgBoundingDivEl = document.getElementById(this.state.floorplanId);
    let svgBoundingDivEl = svg;
    // Remove any SVG styling within the file
    if (svgBoundingDivEl.querySelector("style")) {
      svgBoundingDivEl.querySelector("style").remove();
    }

    document.querySelectorAll("rect").forEach((roomEl) => {
      let suiteEl = roomEl.parentElement;
      let roomFromSvg = this.getDataFromSvg(roomEl);
      // Check if element is one level under svg
      // If it is, this means it's a floor (not a suite)
      // And that this floorplan doesn't have suites
      if (suiteEl.parentElement.tagName.toLowerCase() == "svg") {
        suiteEl = null;
      }
      else {
        roomFromSvg = this.getDataFromSvg(suiteEl) + roomFromSvg;
      }
      // Check if the room labeled on the SVG matches the name in the db
      let roomFromDb = this.state.floorplanDic[roomFromSvg];
      if (roomFromDb) {
        // Check if lottery number exists for it (i.e. it's already taken)
        if (roomFromDb["NEW_PRIORITY"]) {
          console.log("TAKEN: " + roomFromSvg);
          roomEl.setAttribute("fill", "red");
        } else {
          console.log("AVAILABLE: " + roomFromSvg);
          roomEl.setAttribute("fill", "green");
        }
        
        // Attach data attributes for react-tooltip
        roomEl.setAttribute("data-tip", roomFromSvg);
        roomEl.setAttribute("data-for", "global");
        ReactTooltip.rebuild();
      }
    });

    // Override the xlink:href attribute (which is deprecated)
    // with an href that links to the corresponding floorplan JPG
    let imageElements = svgBoundingDivEl.querySelectorAll("image");
    // console.log(imageElements);
    let baseImage = imageElements[0];
    // console.log(baseImage);
    let xlinkHref = baseImage.getAttributeNode("xlink:href");
    // console.log(xlinkHref);
    baseImage.removeAttributeNode(xlinkHref);
    if(xlinkHref) {
      baseImage.setAttribute("href", this.state.floorplanJpg);
    }
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  getDataFromSvg(el) {
    return el.dataset.name ? el.dataset.name : el.getAttribute("id");
  }

  getRoomNumber(suite, room) {
    const exceptions = new Set([]);
    if (exceptions.has(this.props.data[0]["DORM"])) {
      // Exceptions
    }
    return suite + room;
  }

  getTooltipContent(room) {
    let roomDic = this.state.floorplanDic[room];

    if (!roomDic) {
      // RA Room / not a part of room selection (Gray)
      return <TooltipBox><TooltipText>Not Available</TooltipText></TooltipBox>
    }
    
    if (roomDic["NEW_PRIORITY"] == "") {
      // Not taken yet (Green)
      return <TooltipBox>
      <TooltipText>Room: <TooltipBold>{room}</TooltipBold></TooltipText>
      <TooltipText>
        Last Year's Cutoff: <TooltipBold>{roomDic["NEW_PRIORITY"] + " / " + roomDic["NEW_NUM"]}</TooltipBold>
      </TooltipText>
    </TooltipBox>
    }

    // Taken room (Red)
    return <TooltipBox>
      <TooltipText>Room: <TooltipBold>{room}</TooltipBold></TooltipText>
      <TooltipText>
        Taken By: <TooltipBold>{roomDic["NEW_PRIORITY"] + " / " + roomDic["NEW_NUM"]}</TooltipBold>
      </TooltipText>
    </TooltipBox>;
  }

  getStaticFloorplan() {
    return <img alt={this.props.dorm + " " + this.props.floor} src={this.state.floorplanJpg} />;
  }

  render() {
    return (
        <FloorPlanWrapper id={this.state.floorplanId}>
          <ReactSVG 
            src={this.state.floorplanSvg} 
            onInjected={(error, svg) => this.styleSVG(error, svg)}
            fallback={this.getStaticFloorplan}
          />

          <ReactTooltip 
            id="global"
            aria-haspopup="true"
            getContent={ (dataTip) => this.getTooltipContent(dataTip)}
            className="floorplan-tooltip"
          />
        </FloorPlanWrapper>
    );
  }
}
