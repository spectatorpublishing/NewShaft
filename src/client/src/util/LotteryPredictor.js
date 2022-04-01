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
const SIMILAR_COLOR = "yellow"
const UNAVAILABLE_COLOR = "gray"
const AVAILABLE_COLOR = "green"

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

  if (historicalLotteryNumber < similarLowerbound) {
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


const db2svgRoomFormat = {
  "47 Claremont": claremontRoomFormatter,
  "Ruggles Hall": rugglesRoomFormatter
}


/******************************************************************************
 *  Exports
 *****************************************************************************/

module.exports = {
  LOTTERY_LO, LOTTERY_HI, RANGE,
  SIMILAR_COLOR, UNAVAILABLE_COLOR, AVAILABLE_COLOR,
  isLotteryNumberValid,
  getDormColor,
  db2svgRoomFormat
}
