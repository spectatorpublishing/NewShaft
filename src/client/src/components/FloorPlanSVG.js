import React, { Component, useEffect, useState, useRef } from "react"
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import ReactTooltip from 'react-tooltip'
import "../css/FloorPlanSVG.css" // Because react-tooltip
import { CUTOFFS, SUITE_PICK } from "../util/Cutoffs"
import { MAPPING } from "../util/Mapping"
import { getDormColor, db2svgRoomFormat, NO_DATA_COLOR } from '../util/LotteryPredictor.js'


let FloorPlanWrapper = styled.div`
  & rect {
    opacity: 0.3;
    pointer-events: all;
  }

  & rect:hover {
    opacity: 0.5;
  }

  & path {
    opacity: 0.3;
    pointer-events: all;
  }

  & path:hover {
    opacity: 0.5;
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

const firstFloor = {
  "47 Claremont": "1",
  "Broadway": "3",
  "Carlton Arms": "1A",
  "East Campus": "6",
  "Furnald": "1",
  "Harmony": "1",
  "Hogan": "2",
  "McBain": "1",
  "600 West 113": "2",
  "River": "1",
  "Ruggles": "1",
  "Schapiro": "2",
  "Watt": "1",
  "Wien": "2",
  "Woodbridge": "1"
}

const FloorPlanSVG = (props) => {
  const [floorplanName, setFloorPlanName] = useState("");
  const [floorplanDorm, setFloorPlanDorm] = useState("");
  const [floorplanId, setFloorPlanId] = useState("");
  const [floorplanJpg, setFloorPlanJpg] = useState("");
  const [floorplanSvg, setFloorPlanSvg] = useState("");
  const [floorplanDic, setFloorPlanDic] = useState({});
  const [suitePick, setSuitePick] = useState(false);
  const [showInfo, setShowInfo] = useState(props.showInfo);
  
  useEffect(() => {
    setFloor(true);
    console.log("1. floorplans: change in dorm")
  }, [props.dorm]);

  useEffect(() => {
    setFloor(false);
    console.log("1. floorplans: change in floor")
  }, [props.floor])

  const setFloor = (dorm_change) => {
    // Strip " Hall" out of the dorm name and concat with floor number
    // e.g. dorm: River Hall, floor: 6 -> River 6
    console.log("2. floorplans: setFloor")
    let dorm = props.dorm.replace(" Hall", "");
    if (dorm == "600 W 113th") {
      dorm = "600 West 113";
    }

    if (dorm_change == true) {
      var name = dorm + " " + firstFloor[dorm]
    } else {
      var name = dorm + " " + props.floor;
    }

    // Attach unique id to component to access SVG
    let id = name.replace(/\ /g, "-");

    // Generate AWS urls for JPG and SVG
    let url = name.replace(/\ /g, "+");
    let jpgUrl = "https://shaft-dorm-floorplans.s3.amazonaws.com/" + url + ".jpg";
    let svgUrl = "https://shaft-svg.s3.amazonaws.com/" + url + ".svg";

    // Turn data array passed in from endpoint into JSON for faster lookup
    let dic = {};
    for (var i = 0; i < props.data.length; i++) {
      let dataFromDb = props.data[i];
      dic[dataFromDb["ROOM"]] = {
        "ROOM_TYPE": dataFromDb["ROOM_TYPE"],
        "NEW_PRIORITY": dataFromDb["NEW_PRIORITY"],
        "NEW_NUM": dataFromDb["NEW_NUM"],
        "ROOM_TYPE": dataFromDb["ROOM_TYPE"]
      };
    }

    // Determine whether dorm type is suite-style or individual rooms
    // Because lottery numbers reflect how suites/rooms are picked
    let suitePickStyle = false;
    // Harmony Floor 1 is suite-style picking but its other floors aren't
    if (dorm == "Harmony") {
      if (props.floor == "1") {
        suitePickStyle = true;
      }
    }
    else if (dorm == "East Campus") {
      if (props.floor != "H" && props.floor != "6") {
        suitePickStyle = true;
      }
    }
    else {
      if (SUITE_PICK.has(dorm.toUpperCase())) {
        suitePickStyle = true;
      }
    }

    setFloorPlanName(name);
    setFloorPlanDorm(dorm);
    setFloorPlanId(id);
    setFloorPlanJpg(jpgUrl);
    setFloorPlanSvg(svgUrl);
    setFloorPlanDic(dic);
    setSuitePick(suitePickStyle);
    console.log("3. svg url: " + svgUrl)
  }

  const styleSVG = (error, svg) => {
    console.log("4. floorplans: style svg")
    var svgBoundingDivEl;
    if (svg) {
      svgBoundingDivEl = svg;

      let imageElements = svgBoundingDivEl.querySelectorAll("image");
      let baseImage = imageElements[0];
      
      if (baseImage.hasAttribute("xlink:href")) {
        baseImage.setAttribute("xlink:href", floorplanJpg);
        baseImage.setAttribute("href", floorplanJpg);
      }
      else {
        baseImage.setAttribute("href", floorplanJpg);
      }

      // Remove any SVG styling within the file
      if (svgBoundingDivEl.querySelector("style")) {
        svgBoundingDivEl.querySelector("style").remove();
      }
    }

    document.querySelectorAll("rect").forEach((roomEl) => {
      let suiteEl = roomEl.parentElement;
      let suiteFromSvg = getDataFromSvg(suiteEl);
      let roomFromSvg = getDataFromSvg(roomEl);

      // Nullify non-sensical suite value if not suite-style
      if (!suitePick && props.dorm != "600 W 113th") {
        suiteFromSvg = "";
      }

      // convert room/suite info from svg + floor to a room format used in database
      let roomOrSuiteName
      if (db2svgRoomFormat.hasOwnProperty(props.dorm)) {
        roomOrSuiteName = db2svgRoomFormat[props.dorm](suiteFromSvg, roomFromSvg, props.floor)
      }

      // A room needs to be colored if
      //   1. it's not part of a suite
      //   2. a suite but the suite is not colored yet or is colored
      //      NO_DATA_COLOR because we don't have the lottery info for a previous
      //      room of the suite
      let fromDb = floorplanDic[roomOrSuiteName];
      let suiteFill = suiteEl.getAttribute("fill")
      let needColoring = !suitePick || (suiteFill === null || suiteFill === NO_DATA_COLOR)
      let color = NO_DATA_COLOR

      if (needColoring) {
        let selectableEl = suitePick ? suiteEl : roomEl;
        let roomPickedBy = fromDb && fromDb["NEW_NUM"]

        color = getDormColor(props.lotteryNum, roomPickedBy)

        // Attach data attributes for react-tooltip
        selectableEl.setAttribute("fill", color)
        selectableEl.setAttribute("data-tip", roomOrSuiteName);
        selectableEl.setAttribute("data-for", "global");
      }
    });

    // test if it will work w path
    document.querySelectorAll("path").forEach((roomEl) => {
      let suiteEl = roomEl.parentElement;
      let suiteFromSvg = getDataFromSvg(suiteEl);
      let roomFromSvg = getDataFromSvg(roomEl);

      // Nullify non-sensical suite value if not suite-style
      if (!suitePick && props.dorm != "600 W 113th") {
        suiteFromSvg = "";
      }

      // convert room/suite info from svg + floor to a room format used in database
      let roomOrSuiteName
      if (db2svgRoomFormat.hasOwnProperty(props.dorm)) {
        roomOrSuiteName = db2svgRoomFormat[props.dorm](suiteFromSvg, roomFromSvg, props.floor)
      }

      // A room needs to be colored if
      //   1. it's not part of a suite
      //   2. a suite but the suite is not colored yet or is colored
      //      NO_DATA_COLOR because we don't have the lottery info for a previous
      //      room of the suite
      let fromDb = floorplanDic[roomOrSuiteName];
      let suiteFill = suiteEl.getAttribute("fill")
      let needColoring = !suitePick || (suiteFill === null || suiteFill === NO_DATA_COLOR)
      let color = NO_DATA_COLOR

      if (needColoring) {
        let selectableEl = suitePick ? suiteEl : roomEl;
        let roomPickedBy = fromDb && fromDb["NEW_NUM"]

        color = getDormColor(props.lotteryNum, roomPickedBy)

        // Attach data attributes for react-tooltip
        selectableEl.setAttribute("fill", color)
        selectableEl.setAttribute("data-tip", roomOrSuiteName);
        selectableEl.setAttribute("data-for", "global");
      }
    });
  }

  const getDataFromSvg = (el) => {
    return el.dataset.name ? el.dataset.name : el.getAttribute("id");
  }

  const getTooltipContent = (room) => {
    let fromDb = floorplanDic[room];
    let label = suitePick ? "Suite" : "Room";

    if (!fromDb) {
      // RA Room / not a part of room selection (Gray)
      return <TooltipBox><TooltipText>Not Available</TooltipText></TooltipBox>;
    } else {
      // Get room type by mapping the type string as it appears in the db
      // to the descriptive string as it appears on Housing's website
      // (where we scraped the cutoff data from)
      //
      // TODO: 2020&2021 lottery data from housing doesn't contain room type
      // information. This needs to be added.
      let roomTypeMapped = getRoomTypeMapped(fromDb["ROOM_TYPE"])
      let roomTypeLabel = "Room Type";
      let roomType = roomTypeMapped;

      // Not taken yet (Green)
      let lotteryLabel = "Last Year's Cutoff";
      let lottery = getCutoff(roomTypeMapped);

      // Taken room (Red)
      if (fromDb["NEW_NUM"]) {
        lotteryLabel = "Taken By";
        lottery = fromDb["NEW_NUM"];
      }

      return (
        <>
          <TooltipBox>
            <TooltipText>{label}: <TooltipBold>{room}</TooltipBold></TooltipText>
            <TooltipText>
              {lotteryLabel}: <TooltipBold>{lottery}</TooltipBold>
            </TooltipText>
            <TooltipText>
              {roomTypeLabel}: <TooltipBold>{roomType}</TooltipBold>
            </TooltipText>
          </TooltipBox>
        </>);
    }
  }

  const getRoomTypeMapped = (roomType) => {
    return MAPPING[floorplanDorm][roomType];
  }

  const getCutoff = (roomTypeMapped) => {
    // TODO: These data are no longer accurate, needs to be updated.
    return CUTOFFS[floorplanDorm][roomTypeMapped];
  }

  const getStaticFloorplan = () => {
    return <img alt={floorplanName} src={floorplanJpg} />;
  }

  return (
    <FloorPlanWrapper id={floorplanId}>
      {floorplanSvg !== "" ? <ReactSVG
        src={floorplanSvg}
        afterInjection={(error, svg) => styleSVG(error, svg)}
        fallback={getStaticFloorplan}
      /> : null}

      {showInfo ? <ReactTooltip
        id="global"
        aria-haspopup="true"
        getContent={(dataTip) => getTooltipContent(dataTip)}
        className="floorplan-tooltip"
      /> : null}
    </FloorPlanWrapper>
  );

};

export default FloorPlanSVG;