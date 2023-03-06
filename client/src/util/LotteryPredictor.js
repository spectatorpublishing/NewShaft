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
    console.log("red", userLotteryNumber, historicalLotteryNumber)
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
  let suite

  if (floor == "1") {
    suite = `${svgSuite}${svgRoom}`
  } else {
    suite = `${floor}${svgSuite}${svgRoom}`
  }

  return suite
}

// In databases, lottery number is stored for each room, not by suite
// so we use the inferred room number from svg.
//
// Ruggles Floor 1 & 2: svgRoom is the room number
// Other floors: svgSuite is in the form ()-(room number)
function rugglesRoomFormatter(svgSuite, svgRoom, floor) {
  let converted = svgRoom
  floor = parseInt(floor)

  if (floor > 2) {
    converted = svgSuite.split("-")[1]
  }

  return converted
}

// In database, Watt Hall Room is floor followed by room.
// so concatenate the floor and svgRoom number.
function wattRoomFormatter(svgSuite, svgRoom, floor) {
  let inferred = `${floor}${svgRoom}`

  return inferred
}

// In database, Woodbridge Hall Room is floor followed by room.
// so concatenate the floor and svgRoom number.
function woodbridgeRoomFormatter(svgSuite, svgRoom, floor) {
  let inferred = `${floor}${svgRoom}`

  return inferred
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

function hartleyRoomFormatter(svgSuite, svgRoom, floor) {
  console.log("hartleyRoomFormatter", svgSuite + svgRoom)
  return svgSuite + svgRoom
}

function hoganRoomFormatter(svgSuite, svgRoom, floor) {
  svgRoom = svgRoom.trim().slice(0,1)
  return floor + svgSuite + svgRoom
}

function w600RoomFormatter(svgSuite, svgRoom, floor) {
  return floor + svgSuite + svgRoom
}

function normalRoomFormatter(svgSuite, svgRoom, floor) {
  return floor + svgRoom
}

const db2svgRoomFormat = {
  "47 Claremont": claremontRoomFormatter,
  "Broadway Hall": broadwayRoomFormatter,
  "Carlton Arms": carltonRoomFormatter,
  "East Campus": eastCampusRoomFormatter,
  "Furnald Hall": normalRoomFormatter,
  "Hartley Hall": hartleyRoomFormatter,
  "Harmony Hall": normalRoomFormatter,
  "Hogan Hall": hoganRoomFormatter,
  "McBain Hall": normalRoomFormatter,
  "600 W 113th": w600RoomFormatter,
  "River Hall": normalRoomFormatter,
  "Ruggles Hall": rugglesRoomFormatter,
  "Schapiro Hall": normalRoomFormatter,
  "Watt Hall": wattRoomFormatter,
  "Wien Hall": normalRoomFormatter,
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
