import React, { Component } from "react";
import styled from 'styled-components';
import ReactSVG from 'react-svg'
import ReactTooltip from 'react-tooltip';
import "../css/FloorPlanSVG.css";

let FloorPlanWrapper = styled.div`
  display:flex
  flex-direction:column;
  text-align:left;
  margin-top:7vh;

  & rect {
    fill: none;
    pointer-events: all;
  }

  & rect:hover {
    fill: red;
    opacity: 0.3;
  }
`

let SVGWrapper = styled.div`
  border: solid;
  border-width:0.5rem;
  height:80vh;
  width:25vw;
  border-color:${props => props.theme.columbiaBlue}

`

export default class FloorPlanSVG extends Component {
  constructor(props) {
    super(props);

    // Attach unique id to component to access SVG
    let id = this.props.name.replace(/\ /g, "-");
    // Generate AWS url
    let url = this.props.name.replace(/\ /g, "+");
    let jpgUrl = "https://s3.amazonaws.com/shaft-dorm-floorplans/" + url + ".jpg";
    let svgUrl = "https://s3.amazonaws.com/shaft-svg/"+ url +".svg";

    this.state = {
      floorplanId: id,
      floorplanJpg: jpgUrl,
      floorplanSvg: svgUrl,
      floorplanDic : {}
    };

    this.hoverStart = this.hoverStart.bind(this);
    this.clickStart = this.clickStart.bind(this);
  }

  componentDidMount() {
    var floorplanDic = {};

    for (var i = 0; i  < this.props.data.length; i++) {
      let roomFromDb = this.props.data[i];
      floorplanDic[roomFromDb["ROOM"]] = {
        "NEW_PRIORITY": roomFromDb["NEW_PRIORITY"],
        "NEW_NUM" : roomFromDb["NEW_NUM"]
      };
    }

    this.setState({floorplanDic : floorplanDic });
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

    for (var i = 0; i  < this.props.data.length; i++) {
      let roomFromDb = this.props.data[i];

      document.querySelectorAll("rect").forEach((roomEl) => {
        let suiteEl = roomEl.parentElement;
        let roomFromSvg = this.getRoomNumber(this.getDataFromSvg(suiteEl), this.getDataFromSvg(roomEl));
        // Check if the room labeled on the SVG matches the name in the db
        if (roomFromDb["ROOM"] == roomFromSvg) {
          // Attach data attributes for react-tooltip
          roomEl.setAttribute("data-tip", roomFromSvg);
          roomEl.setAttribute("data-for", "global");
          ReactTooltip.rebuild();

          // Check if lottery number exists for it (i.e. it's already taken)
          if (roomFromDb["NEW_PRIORITY"]) {
            console.log("MATCH! " + roomFromDb["ROOM"] + " " + roomFromSvg);
            roomEl.setAttribute("fill", "red");
          } else {
            roomEl.setAttribute("fill", "green");
          }
        }
      });
    }

    // Override the xlink:href attribute (which is deprecated)
    // with an href that links to the corresponding floorplan JPG
    let imageElements = svgBoundingDivEl.querySelectorAll("image");
    console.log(imageElements);
    let baseImage = imageElements[0];
    console.log(baseImage);
    let xlinkHref = baseImage.getAttributeNode("xlink:href");
    console.log(xlinkHref);
    baseImage.removeAttributeNode(xlinkHref);
    if(xlinkHref) {
      baseImage.setAttribute("href", this.state.floorplanJpg);
    }

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

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  hoverStart(e) {
    this.getTargetRoom(e);
  }

  clickStart(e) {
    this.getTargetRoom(e);
  }

  getTargetRoom(e) {
    let roomEl = e.target;
    let suiteEl = roomEl.parentElement;
    let room = this.getDataFromSvg(roomEl);
    let suite = this.getDataFromSvg(suiteEl);
    console.log("START Suite: " + suite + "\tRoom: " + room);
  }

  getDataFromSvg(el) {
    // Check if element is one level under svg
    // If it is, this means it's a floor (not a suite)
    // And that this floorplan doesn't have suites
    if (el.parentElement.tagName.toLowerCase() == "svg") {
      return "";
    }
    return el.dataset.name ? el.dataset.name : el.getAttribute("id");
  }

  getRoomNumber(suite, room) {
    const exceptions = new Set(["600 W 113th", "Watt Hall", "Wien Hall"]);
    if (exceptions.has(this.props.data[0]["DORM"])) {
      return suite + room;
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

  render() {
    return (
        <FloorPlanWrapper id={this.state.floorplanId}>
          <ReactSVG src={this.state.floorplanSvg} 
          onInjected={(error, svg) => this.styleSVG(error, svg)}
          />

          <ReactTooltip 
            id='global' 
            aria-haspopup='true' 
            clickable='true'
            getContent={ (dataTip) => this.getTooltipContent(dataTip)}
            className='floorplan-tooltip'
          />
        </FloorPlanWrapper>
    );
  }
}
