import React, { Component } from "react";
import styled from 'styled-components';
import ReactSVG from 'react-svg'
import ReactTooltip from 'react-tooltip';
import "../css/FloorPlanSVG.css"; // Because react-tooltip
import { CUTOFFS, SUITE_PICK } from "../util/Cutoffs";
import { MAPPING } from "../util/Mapping";

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

    // Strip " Hall" out of the dorm name and concat with floor number
    // e.g. dorm: River Hall, floor: 6 -> River 6
    let dorm = props.dorm.replace(" Hall", "");
    let name = dorm + " " + props.floor;
    
    // Attach unique id to component to access SVG
    let id = name.replace(/\ /g, "-");

    // Generate AWS urls for JPG and SVG
    let url = name.replace(/\ /g, "+");
    let jpgUrl = "https://s3.amazonaws.com/shaft-dorm-floorplans/" + url + ".jpg";
    let svgUrl = "https://s3.amazonaws.com/shaft-svg/"+ url +".svg";

    // Turn data array passed in from endpoint into JSON for faster lookup
    let dic = {};
    for (var i = 0; i  < this.props.data.length; i++) {
      let dataFromDb = this.props.data[i];
      dic[dataFromDb["ROOM"]] = {
        "ROOM_TYPE": dataFromDb["ROOM_TYPE"],
        "NEW_PRIORITY": dataFromDb["NEW_PRIORITY"],
        "NEW_NUM" : dataFromDb["NEW_NUM"]
      };
    }

    // Determine whether dorm type is suite-style or individual rooms
    // Because lottery numbers reflect how suites/rooms are picked
    let suitePickStyle = false;
    // Harmony Floor 1 is suite-style picking but its other floors aren't
    if (dorm == "Harmony") {
      if (this.props.floor == "1") {
        suitePickStyle = true;
      }
    }
    else {
      if (SUITE_PICK.has(dorm.toUpperCase())) {
        suitePickStyle = true;
      }
    }

    this.state = {
      floorplanName: name,
      floorplanDorm: dorm,
      floorplanId: id,
      floorplanJpg: jpgUrl,
      floorplanSvg: svgUrl,
      floorplanDic: dic,
      suitePick: suitePickStyle
    };

    this.getStaticFloorplan = this.getStaticFloorplan.bind(this);
  }

  styleSVG(error, svg) {
    let svgBoundingDivEl = svg;
    // Remove any SVG styling within the file
    if (svgBoundingDivEl.querySelector("style")) {
      svgBoundingDivEl.querySelector("style").remove();
    }

    document.querySelectorAll("rect").forEach((roomEl) => {
      // Get the name of the room or suite that the lottery number
      // Is stored under in the db
      let suiteEl = roomEl.parentElement;
      let suiteFromSvg = this.getDataFromSvg(suiteEl);
      // Nullify non-sensical suite value if not suite-style
      if (!this.state.suitePick) {
        suiteFromSvg = "";
      }
      let roomFromSvg = this.getDataFromSvg(roomEl);
      let roomOrSuiteName = this.getRoomOrSuite(suiteFromSvg, roomFromSvg);

      // Check if the room labeled on the SVG matches the name in the db
      let fromDb = this.state.floorplanDic[roomOrSuiteName];
      if (fromDb) {
        let selectableEl = roomEl;
        if (this.state.suitePick) {
          selectableEl = suiteEl;
        }
        // Check if lottery number exists for it (i.e. it's already taken)
        if (fromDb["NEW_PRIORITY"]) {
          // console.log("TAKEN: " + roomOrSuiteName);
          selectableEl.setAttribute("fill", "red");
        } else {
          // console.log("AVAILABLE: " + roomOrSuiteName);
          selectableEl.setAttribute("fill", "green");
        }
        
        // Attach data attributes for react-tooltip
        selectableEl.setAttribute("data-tip", roomOrSuiteName);
        selectableEl.setAttribute("data-for", "global");
        ReactTooltip.rebuild();
      }
    });

    let imageElements = svgBoundingDivEl.querySelectorAll("image");
    let baseImage = imageElements[0];
    let xlinkHref = baseImage.getAttributeNode("xlink:href");
    // Override the xlink:href attribute (which is deprecated)
    // with an href that links to the corresponding floorplan JPG
    if(xlinkHref) {
      baseImage.removeAttributeNode(xlinkHref);
      baseImage.setAttribute("href", this.state.floorplanJpg);
    }
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  getDataFromSvg(el) {
    return el.dataset.name ? el.dataset.name : el.getAttribute("id");
  }

  getRoomOrSuite(suite, room) {
    // TODO: all the conditions stuff of turning the combination of
    // Floor #, Suite #, and Room # into whatever is stored in the db
    // Get dorm name and floor number through props
    // Have fun mapping Carlton Arms and Ruggles
    if (suite) {
      return suite + room;
    }
    else {
      return this.props.floor + room;
    }
  }

  getTooltipContent(room) {
    let fromDb = this.state.floorplanDic[room];
    let label = this.state.suitePick ? "Suite" : "Room";
    
    if (!fromDb) {
      // RA Room / not a part of room selection (Gray)
      return <TooltipBox><TooltipText>Not Available</TooltipText></TooltipBox>;
    }
    else {
      // Not taken yet (Green)
      let lotteryLabel = "Last Year's Cutoff";
      let lottery = this.getCutoff(fromDb["ROOM_TYPE"]);

      // Taken room (Red)
      if (fromDb["NEW_PRIORITY"]) {
        lotteryLabel = "Taken By";
        lottery = fromDb["NEW_PRIORITY"] + " / " + fromDb["NEW_NUM"];
      }
  
      return <TooltipBox>
        <TooltipText>{label}: <TooltipBold>{room}</TooltipBold></TooltipText>
        <TooltipText>
          {lotteryLabel}: <TooltipBold>{lottery}</TooltipBold>
        </TooltipText>
      </TooltipBox>;
    }
  }

  getCutoff(roomType) {
    let roomTypeMapped = MAPPING[this.state.floorplanDorm][roomType];
    return CUTOFFS[this.state.floorplanDorm][roomTypeMapped];
  }

  getStaticFloorplan() {
    return <img alt={this.state.floorplanName} src={this.state.floorplanJpg} />;
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
            getContent={(dataTip) => this.getTooltipContent(dataTip)}
            className="floorplan-tooltip"
          />
        </FloorPlanWrapper>
    );
  }
}
