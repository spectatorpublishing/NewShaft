import React, { Component, useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import { ReactSVG } from 'react-svg'
import ReactTooltip from 'react-tooltip';
import "../css/FloorPlanSVG.css"; // Because react-tooltip
import { CUTOFFS, SUITE_PICK } from "../util/Cutoffs";
import { MAPPING } from "../util/Mapping";


const RANGE = 150; //range above and below lottery num that is considered "within range"
const RANGE_COLOR = "yellow";//Color for the dorms within the range of the lottery number
const ABOVE_COLOR = "gray";//Color for the dorms likely to be unavailable (above lottery #)
const BELOW_COLOR = "green";//Color for dorms likely to be available but below range

let FloorPlanWrapper = styled.div`
  & rect {
    opacity: 0.3;
    pointer-events: all;
  }

  & rect:hover {
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

  const prevDormIdRef = useRef();
  useEffect(() => {
    prevDormIdRef.current = props.dorm;
  });

  const prevDorm = prevDormIdRef.current;

  useEffect(() => {
    if (prevDorm === props.dorm) {
      // only floor changed
      setFloor(false);
    }

    if (prevDorm !== props.dorm) {
      // dorm changed
      setFloor(true);
    }
  }, [props.floor, props.dorm]);

  const setFloor = (dorm_change) => {
    // Strip " Hall" out of the dorm name and concat with floor number
    // e.g. dorm: River Hall, floor: 6 -> River 6
    let dorm = props.dorm.replace(" Hall", "");
    if (dorm == "600 W 113th") {
      dorm = "600 West 113";
    }

    if (dorm_change == true) {
      var name = dorm + " " + firstFloor[dorm]
    }
    else {
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
  }

  const styleSVG = (error, svg) => {
    var svgBoundingDivEl;
    if (svg) {
      svgBoundingDivEl = svg;

      let imageElements = svgBoundingDivEl.querySelectorAll("image");
      let baseImage = imageElements[0];
      let xlinkHref = baseImage.getAttributeNode("xlink:href");
      // Override the xlink:href attribute (which is deprecated)
      // with an href that links to the corresponding floorplan JPG
      if (xlinkHref) {
        baseImage.setAttribute("xlink:href", floorplanJpg);
        baseImage.setAttribute("href", floorplanJpg);
      }

      // Remove any SVG styling within the file
      if (svgBoundingDivEl.querySelector("style")) {
        svgBoundingDivEl.querySelector("style").remove();
      }
    }

    document.querySelectorAll("rect").forEach((roomEl) => {
      // Get the name of the room or suite that the lottery number
      // Is stored under in the db
      let suiteEl = roomEl.parentElement;
      let suiteFromSvg = getDataFromSvg(suiteEl);
      // Nullify non-sensical suite value if not suite-style
      if (!suitePick && props.dorm != "600 W 113th") {
        suiteFromSvg = "";
      }
      let roomFromSvg = getDataFromSvg(roomEl);
      let roomOrSuiteName = getRoomOrSuite(suiteFromSvg, roomFromSvg);

      if (props.dorm == "Watt Hall") {
        let temp = roomOrSuiteName.substring(0, 1);
        roomOrSuiteName = temp;
      }

      if (props.dorm == "Woodbridge Hall") {
        // TODO:
        // Temporary Hack. The SVG for Woodbridge floor 3 mis-spelled
        // the attribute id to just d for room 3K
        //
        // Also need to implement the logic for Woodbridge in
        // getRoomOrSuite
        if (roomFromSvg != undefined) {
          let temp = roomOrSuiteName.substring(0, 1);
          roomOrSuiteName = temp;
        }
      }

      // Check if the room labeled on the SVG matches the name in the db

      console.log(roomOrSuiteName)
      let fromDb = floorplanDic[roomOrSuiteName];
      if (fromDb) {
        let selectableEl = suitePick ? suiteEl : roomEl;
        let roomPickedBy = fromDb["NEW_NUM"]
        let similarLowerbound = Math.max(props.lotteryNum - RANGE, 0)
        let similarUpperbound = Math.min(props.lotteryNum + RANGE, 5000)

        // recall: above_color = gray
        // range_color = yellow
        // below_color = green

        if (roomPickedBy < similarLowerbound) {
          selectableEl.setAttribute("fill", ABOVE_COLOR)
        } else if (roomPickedBy > similarUpperbound) {
          selectableEl.setAttribute("fill", BELOW_COLOR);
        } else {
          selectableEl.setAttribute("fill", RANGE_COLOR);
        }
        console.log(fromDb, roomPickedBy, similarLowerbound, similarUpperbound)

        // Attach data attributes for react-tooltip
        selectableEl.setAttribute("data-tip", roomOrSuiteName);
        selectableEl.setAttribute("data-for", "global");
      }
    });
  }

  const getDataFromSvg = (el) => {
    return el.dataset.name ? el.dataset.name : el.getAttribute("id");
  }

  const getRoomOrSuite = (suite, room) => {
    // TODO: all the conditions stuff of turning the combination of
    // Floor #, Suite #, and Room # into whatever is stored in the db
    // Get dorm name and floor number through props
    // Have fun mapping Carlton Arms and Ruggles
    let dorm = props.dorm.replace(" Hall", "");
    if (suite) {
      if (dorm == "Ruggles") {
        return props.floor + suite;
      }
      else if (dorm == "47 Claremont") {
        let claremontFloor = props.floor == 1 ? "" : props.floor
        return claremontFloor + suite;
      }
      else if (dorm == "Harmony") {
        return props.floor + suite;
      }
      else if (dorm == "600 W 113th") {
        return props.floor + suite + room
      }
      else if (dorm == "East Campus") {
        return suite
      }
      return props.floor + suite;
    }
    else {
      let floor = props.floor
      if (dorm == "Harmony" && props.floor == "Mezzanine") {
        floor = "1M"
      }
      else if (dorm == "East Campus") {
        if (props.floor == "H" || props.floor == "6") {
          return room
        }
      }
      return floor + room;
    }
  }

  const getTooltipContent = (room) => {
    ////console.log("tooltip", room)
    let fromDb = floorplanDic[room];
    let label = suitePick ? "Suite" : "Room";

    if (!fromDb) {
      // RA Room / not a part of room selection (Gray)
      return <TooltipBox><TooltipText>Not Available</TooltipText></TooltipBox>;
    }
    else {
      // Get room type by mapping the type string as it appears in the db
      // to the descriptive string as it appears on Housing's website
      // (where we scraped the cutoff data from)
      let roomTypeMapped = getRoomTypeMapped(fromDb["ROOM_TYPE"])
      let roomTypeLabel = "Room Type";
      let roomType = roomTypeMapped;

      // if (props.dorm == "Woodbridge Hall") {
      //   let roomFromSvg = getDataFromSvg(room);
      //   if (roomFromSvg == "H" || roomFromSvg == "K" || roomFromSvg == "C") {
      //     roomType = "High Demand (H + K + C lines)";
      //   }
      //   else if (roomFromSvg == "G" || roomFromSvg == "D" || roomFromSvg == "I") {
      //     roomType = "Low Demand (G + D + I lines)";
      //   }
      //   else {
      //     roomType = "Medium Demand (all others)";
      //   }
      // }

      // Not taken yet (Green)
      let lotteryLabel = "Last Year's Cutoff";
      let lottery = getCutoff(roomTypeMapped);

      // Taken room (Red)
      if (fromDb["NEW_PRIORITY"]) {
        lotteryLabel = "Taken By";
        lottery = fromDb["NEW_PRIORITY"] + " | " + fromDb["NEW_NUM"];
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
    return CUTOFFS[floorplanDorm][roomTypeMapped];
  }

  const getStaticFloorplan = () => {
    return <img alt={floorplanName} src={floorplanJpg} />;
  }

  return (
    <FloorPlanWrapper id={floorplanId}>
      {floorplanSvg ? <ReactSVG
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