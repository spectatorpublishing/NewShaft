/*
 * This file is the single source of truth for parameters used for
 * the Lottery Predictor Page.
 *
 * For maintainability and ease of refactor in the future, please don't scatter
 * parameters for the Lottery Predictor Page in separate files.
 *
 * This is used by both the server and client, so we use CommonJS module for
 * compatibility.
 */


/*****************************************************************************
 *  Constants
 *****************************************************************************/

const LOTTERY_LO = 1     // lowest possible lottery number  (highest priority)
const LOTTERY_HI = 5000  // highest possible lottery number (lowest priority)

// Given a lottery number X, a room picked by
//  [max(X-RANGE, LotteryLo), min(X+RANGE, LotteryHi)]
// are considered similar.
const RANGE = 150

// Colors of dorm on floor plan
//   SIMILAR_COLOR: for dorms picked within the range of the lottery number
//   UNAVAILABLE_COLOR: for dorms picked by a lower lottery number -> likely unavailable
//   AVAILABLE_COLOR: for dorms picked by a higher lottery number -> likely available
//   NO_DATA_COLOR: for dorms we don't have historical lottery data
const SIMILAR_COLOR = "yellow"
const UNAVAILABLE_COLOR = "red"
const AVAILABLE_COLOR = "green"
const NO_DATA_COLOR = "gray"


/******************************************************************************
 *  Helper Functions
 *****************************************************************************/

function isLotteryNumberValid(num) {
  return num >= LOTTERY_LO && num <= LOTTERY_HI
}

function getDormColor(userLotteryNumber, historicalLotteryNumber) {
  userLotteryNumber = parseInt(userLotteryNumber)
  let similarLowerbound = Math.max(userLotteryNumber - RANGE, LOTTERY_LO)
  let similarUpperbound = Math.min(userLotteryNumber + RANGE, LOTTERY_HI)
  let color

  if (typeof historicalLotteryNumber === "undefined") {
    color = NO_DATA_COLOR
  } else if (historicalLotteryNumber < similarLowerbound) {
    color = UNAVAILABLE_COLOR
  } else if (historicalLotteryNumber > similarUpperbound) {
    color = AVAILABLE_COLOR
  } else {
    color = SIMILAR_COLOR
  }

  // console.log(`similar range: [${similarLowerbound}, ${similarUpperbound}]`)
  // console.log(userLotteryNumber, historicalLotteryNumber, color)

  return color
}


/******************************************************************************
 *  SVG ROOM / SUITE FORMAT -> DB ROOM FORMAT
 *****************************************************************************/

function carltonRoomFormatter(svgSuite, svgRoom, floor) {
  let room = svgRoom ? svgRoom.split("-")[0] : svgRoom
  return floor + room
}

function claremontRoomFormatter(svgSuite, svgRoom, floor) {
  let room = svgRoom ? svgRoom.split("-")[0] : svgRoom
  if (floor == "1") {
    return svgSuite + room
  } else {
    return floor + svgSuite + room
  }
}

function broadwayRoomFormatter(svgSuite, svgRoom, floor) {
  return floor + svgRoom
}

function eastCampusRoomFormatter(svgSuite, svgRoom, floor) {
  let inferred = svgSuite + svgRoom

  // Not suites
  if (floor === "6") {
    inferred = svgRoom
  }

  return inferred
}

// M floor rooms are in form 1M03 etc
function harmonyRoomFormatter(svgSuite, svgRoom, floor) {
  if (floor == "M") { 
    return "1M" + svgRoom
  }
  return floor + svgRoom
}

function hartleyRoomFormatter(svgSuite, svgRoom, floor) {
  console.log("hartleyRoomFormatter", svgSuite + svgRoom)
  return svgSuite + svgRoom
}

function hoganRoomFormatter(svgSuite, svgRoom, floor) {
  let room = svgRoom ? svgRoom.split("-")[0].trim() : svgRoom
  return floor + svgSuite + room
}

// In databases, lottery number is stored for each room, not by suite
// so we use the inferred room number from svg.
function rugglesRoomFormatter(svgSuite, svgRoom, floor) {
  return svgRoom ? svgRoom.split("-")[0] : svgRoom
  }

// A/B rooms are in DB with A/B ending but in SVG as just number
function schapiroRoomFormatter(svgSuite, svgRoom, floor) {
  let room = svgRoom
  if (svgRoom == "05" || svgRoom == "07") {
    room = svgRoom + "A/B"
  }
  return floor + room
} 

// In database, Watt Hall Room is floor followed by room.
// so concatenate the floor and svgRoom number.
// For L and F (except 1L), room in DB is 2L1 or 2L2 
function wattRoomFormatter(svgSuite, svgRoom, floor) {
  if ((svgRoom === "L" && floor !== 1) || svgRoom === "F") {
    return floor + svgRoom + "1"
  }
  return floor + svgRoom
}

function wienRoomFormatter(svgSuite, svgRoom, floor) {
  // rooms 04, 42, and 45 in DB with A or B at end
  console.log(svgRoom, floor)
  let room = svgRoom
  if (svgRoom && svgRoom.includes("04/")) {
    room = "04A"
  }
  else if (svgRoom && svgRoom.includes("42/")) {
    room = "42A"
  }
  else if (svgRoom && svgRoom.includes("45")) {
    room = "45A"
  }
  // walk through doubles
  else if (svgRoom && svgRoom.includes("06/")) {
    room ="06/7"
  }
  else if (svgRoom && svgRoom.includes("01/")) {
    room = "01"
  }
  return floor + room
}

// In database, Woodbridge Hall Room is floor followed by room.
// so concatenate the floor and svgRoom number.
function woodbridgeRoomFormatter(svgSuite, svgRoom, floor) {
  let room = svgRoom
  // rooms 7H, 7I, 7J have 1 or 2 at end in DB
  if (floor === "7" && ((svgRoom == "H") || (svgRoom == "I") || (svgRoom == "J"))) {
    room = room + "1"
  }
  return floor + room
}

function w600RoomFormatter(svgSuite, svgRoom, floor) {
  return floor + svgSuite + svgRoom
}

function normalRoomFormatter(svgSuite, svgRoom, floor) {
  console.log(svgSuite, svgRoom, floor)
  return floor + svgRoom
}

const db2svgRoomFormat = {
  "47 Claremont": claremontRoomFormatter,
  "Broadway Hall": broadwayRoomFormatter,
  "Carlton Arms": carltonRoomFormatter,
  "East Campus": eastCampusRoomFormatter,
  "Furnald Hall": normalRoomFormatter,
  "Hartley Hall": hartleyRoomFormatter,
  "Harmony Hall": harmonyRoomFormatter,
  "Hogan Hall": hoganRoomFormatter,
  "McBain Hall": normalRoomFormatter,
  "600 W 113th": w600RoomFormatter,
  "River Hall": normalRoomFormatter,
  "Ruggles Hall": rugglesRoomFormatter,
  "Schapiro Hall": schapiroRoomFormatter,
  "Watt Hall": wattRoomFormatter,
  "Wien Hall": wienRoomFormatter,
  "Woodbridge Hall": woodbridgeRoomFormatter
}


/******************************************************************************
 *  Exports
 *****************************************************************************/

module.exports = {
  LOTTERY_LO, LOTTERY_HI, RANGE,
  SIMILAR_COLOR, UNAVAILABLE_COLOR, AVAILABLE_COLOR, NO_DATA_COLOR,
  isLotteryNumberValid,
  getDormColor,
  db2svgRoomFormat
}
