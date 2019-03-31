import React, { Component } from "react";
import styled from 'styled-components';
import { ReactComponent as ClaremontSVG } from "../assets/47 Claremont 1.svg";
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
  },
  {
    "ROOM": "1D",
    "PRIORITY": "",
    "LOTTERY": ""
  },
  {
    "ROOM": "1E",
    "PRIORITY": "",
    "LOTTERY": ""
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
    // url = "https://s3.amazonaws.com/shaft-svg/"+ url +".svg";

    this.state = {
      floorplanId: id,
      floorplanUrl: url,
      floorplanData: data,
      floorplanDic : {}
    };

    this.hoverStart = this.hoverStart.bind(this);
    this.clickStart = this.clickStart.bind(this);
  }

  componentDidMount() {
    // Get the parent div of the SVG element
    let svgBoundingDivEl = document.getElementById(this.state.floorplanId);

    // Remove any SVG styling within the file
    if (svgBoundingDivEl.querySelector("style")) {
      svgBoundingDivEl.querySelector("style").remove();
    }

    var floorplanDic = {};

    for (var i = 0; i  < this.state.floorplanData.length; i++) {
      let roomFromDb = this.state.floorplanData[i];
      floorplanDic[roomFromDb["ROOM"]] = {"PRIORITY": roomFromDb["PRIORITY"], "LOTTERY" : roomFromDb["LOTTERY"]};

      document.querySelectorAll("rect").forEach((roomEl) => {
        let suiteEl = roomEl.parentElement;
        let roomFromSvg = this.getDataFromSvg(suiteEl) + this.getDataFromSvg(roomEl);
        // Check if the room labeled on the SVG matches the name in the db
        if (roomFromDb["ROOM"] == roomFromSvg) {
          // Attach data attributes for react-tooltip
          roomEl.setAttribute("data-tip", roomFromSvg);
          roomEl.setAttribute("data-for", "global");
          ReactTooltip.rebuild();

          // Check if lottery number exists for it (i.e. it's already taken)
          if (roomFromDb["PRIORITY"]) {
            console.log("MATCH! " + roomFromDb["ROOM"] + " " + roomFromSvg);
            roomEl.setAttribute("fill", "red");
          } else {
            roomEl.setAttribute("fill", "green");
          }
        }
      });
    }

    this.setState({floorplanDic : floorplanDic });

    // Override the xlink:href attribute (which is deprecated)
    // with an href that links to the corresponding floorplan JPG
    let baseImage = svgBoundingDivEl.querySelectorAll("image")[0];
    let xlinkHref = baseImage.getAttributeNode("xlink:href");
    baseImage.removeAttributeNode(xlinkHref);
    baseImage.setAttribute("href", this.state.floorplanUrl);

    let rectsArray = document.querySelectorAll("rect");
    rectsArray.forEach((rect) => {
      // rect.addEventListener("mouseover", this.hoverStart);
      rect.addEventListener("click", this.clickStart);
    });
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    let rectsArray = document.querySelectorAll("rect");
    rectsArray.forEach((rect) => {
      // rect.removeEventListener("mouseover", this.hoverStart);
      rect.removeEventListener("click", this.clickStart);
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
    return el.dataset.name ? el.dataset.name : el.getAttribute("id");
  }

  getTooltipContent(room) {
    let roomDic = this.state.floorplanDic[room];

    if (!roomDic) {
      // RA Room / not a part of room selection (Gray)
      return <TooltipBox><TooltipText>Not Available</TooltipText></TooltipBox>
    }
    
    if (roomDic["PRIORITY"] == "") {
      // Not taken yet (Green)
      return <TooltipBox>
      <TooltipText>Room: <TooltipBold>{room}</TooltipBold></TooltipText>
      <TooltipText>
        Last Year's Cutoff: <TooltipBold>{roomDic["PRIORITY"] + " / " + roomDic["LOTTERY"]}</TooltipBold>
      </TooltipText>
    </TooltipBox>
    }

    // Taken room (Red)
    return <TooltipBox>
      <TooltipText>Room: <TooltipBold>{room}</TooltipBold></TooltipText>
      <TooltipText>
        Taken By: <TooltipBold>{roomDic["PRIORITY"] + " / " + roomDic["LOTTERY"]}</TooltipBold>
      </TooltipText>
    </TooltipBox>;
  }

  render() {
    return (
        <FloorPlanWrapper id={this.state.floorplanId}>
          <ClaremontSVG></ClaremontSVG>

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
