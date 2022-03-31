const fs = require('fs');


/* replace with the absolute path to the json files on your machine */
const NLotteryPredicter2021 = "/Users/yunlan/Desktop/NLotteryPredicter2020_202203232113.json"
const out = "/Users/yunlan/Desktop/NLotteryPredicter2020_inferred.json"
const table = 'NLotteryPredicter2021'
const debug = 0

const DLog = (msg) => {
  if (debug > 0) {
    console.log(msg)
  }
}

/*
 * 47 Claremont has 6 floors.
 * The first digit/first two digits of the room number is the floor number.
*/
const claremont = (room) => {
  let floor = ""

  if (room.length === 2){
    floor = "1"
  } else if (room.length === 3){
    floor = room.slice(0,1)
  } else {
    console.error(`[ 47 Claremont ] invalid room number ${room}`)
  }

  return floor
}

const W548 = (room) => {
  let floor = room.slice(0,1)

  return floor
}

/*
 * 600 W 113th has 6 floors.
 * The first digit/first two digits of the room number is the floor number.
*/
const W600 = (room) => {
  let floor = ""

  if (room.length === 3){
    floor = room.slice(0,1)
  } else if (room.length === 4){
    floor = room.slice(0,2)
  } else {
    console.error(`[ 600 W 113th ] invalid room number ${room}`)
  }

  return floor
}

const W627 = (room) => {
  let floor = room.slice(0,1)

  return floor
}

/*
 * Broadway Hall has 11 floors.
 * The first digit/first two digits of the room number is the floor number.
*/
const broadway = (room) => {
  let floor = ""

  if (room.length === 3){
    floor = room.slice(0,1)
  } else if (room.length === 4){
    floor = room.slice(0,2)
  } else {
    console.error(`[ Broadway Hall ] invalid room number ${room}`)
  }

  return floor
}

/*
 * Carlton Arms has only 9 floors.
 * The floors are split into 4 different floor plans
 * The first two digits of the room number is the floor number.
*/
const carlton = (room) => {
  let floor = room.slice(0,2)

  return floor
}

/* East Campus room numbers:
 *
 *  Highrise:
 *  1. first 1/2 digits are the floor number
 *
 *  Townhouse (Prefix with "H"):
 *  1. lower townhouses end in 1 or 2
 *    - all on same floor plan
 *
 *  2. middle townhouses end in 3 or 4
 *    - middle A and B = MT1
 *    - MT2 are living rooms
 *    - middle C and D = MT3
 *    - middle E and F = MT4
 *
 *  3. upper townhouses end in 5 or 6
 *    - UT1 are living rooms
 *    - upper A and B = UT2
 *    - upper C and D = UT3
 *    - upper E and F = UT4
 *
 */

const eastCampus = (room) => {
  let isTownhouse = room.slice(0,1) === "H"
  let floor = ""

  if (isTownhouse){
    // roomSuffix : individual room letter (i.e. for room 1002A => "A")
    let roomSuffix = room.slice(room.length - 1, room.length)

    // suiteSuffix : last digit of suite number (i.e. for room 1002A => "2")
    let suiteSuffix = room.slice(room.length - 2, room.length - 1)
    let isLower = suiteSuffix === "1" || suiteSuffix === "2"
    let isMiddle = suiteSuffix === "3" || suiteSuffix === "4"
    let isUpper = suiteSuffix === "5" || suiteSuffix === "6"

    if (isLower){
      floor = "LT"
    } else if (isMiddle){
      if (roomSuffix === "A" || roomSuffix === "B"){
        floor = "MT1"
      } else if (roomSuffix === "C" || roomSuffix === "D") {
        floor = "MT3"
      } else if (roomSuffix === "E" || roomSuffix === "F"){
        floor = "MT4"
      } else {
        console.error(`[ East Campus ] invalid room number ${room}`)
      }
    } else if (isUpper){
      if (roomSuffix === "A" || roomSuffix === "B"){
        floor = "UT2"
      } else if (roomSuffix === "C" || roomSuffix === "D") {
        floor = "UT3"
      } else if (roomSuffix === "E" || roomSuffix === "F"){
        floor = "UT4"
      } else {
        console.error(`[ East Campus ] invalid room number ${room}`)
      }
    } else {
      console.error(`[ East Campus ] invalid room number ${room}`)
    }
  } else {
    // Highrise
    if (room.length === 3 || room.length === 4) {
      floor = room.slice(0, 1)
    } else if (room.length == 5) {
      floor = room.slice(0, 2)
    } else {
      console.error(`[ East Campus ] invalid room number ${room}`)
    }
  }

  return floor
}

/*
 * Furnald Hall has only 10 floors.
 * The first digit/first two digits of the room number is the floor number.
*/
const furnald = (room) => {
  let floor = ""

  if (room.length === 3) {
    floor = room.slice(0, 1)
  } else if (room.length == 4) {
    floor = room.slice(0, 2)
  } else {
    console.error(`[ Furnald ] invalid room number ${room}`)
  }

  return floor
}

/*
 * Harmony Hall has 9 floors.
 * 1. Rooms in the Mezzanine have the "1M suffix"
 * 2. For other rooms, the first digit of the room number is the floor number.
*/
const harmony = (room) => {
  let floor = ""

  if (room.length === 3) {
    floor = room.slice(0, 1)
  } else if (room.length == 4) {
    floor = "M"
  } else {
    console.error(`[ Harmony Hall ] invalid room number ${room}`)
  }

  return floor
}

/*
 * Hogan Hall has 6 floors.
 * The first digit of the room number is the floor number.
*/
const hogan = (room) => {
  let floor = room.slice(0,1)

  return floor
}

/*
 * Hogan Hall has 8 floors.
 * The first digit of the room number is the floor number.
*/
const mcbain = (room) => {
  let floor = room.slice(0,1)

  return floor
}


/*
 * Plimpton Hall has 14 floors.
 * The first digit/first two digits of the room number is the floor number.
*/
const plimpton = (room) => {
  let floor = ""

  if (room.length === 3) {
    floor = room.slice(0, 1)
  } else if (room.length == 4) {
    floor = room.slice(0, 2)
  } else {
    console.error(`[ Plimpton Hall ] invalid room number ${room}`)
  }

  return floor
}

/*
 * River Hall has only 6 floors.
 * The first digit of the room number is the floor number.
*/
const river = (room) => {
  let floor = room.slice(0,1)
  DLog(`[ River ] ${room} -> ${floor}`)

  return floor
}

/*
 * Ruggles Hall has only 8 floors.
 * The first digit of the room number is the floor number.
*/
const ruggles = (room) => {
  let floor = room.slice(0,1)

  return floor
}

/*
 * Schapiro Room Numbers:
 * 1. doubles are suffixed by "A/B"
 * 2. first 1/2 digits are the floor number
*/
const schapiro = (room) => {
  let roomNoSuffix = room.replace("A/B", "")
  let roomStrlen = roomNoSuffix.length
  let floor = ""

  if (roomStrlen === 3) {
    floor = roomNoSuffix.slice(0, 1)
  } else if (roomStrlen == 4) {
    floor = roomNoSuffix.slice(0, 2)
  } else {
    console.error(`[ Schapiro ] invalid room number ${room}`)
  }

  DLog(`[ Schapiro ] ${room} -> floor: ${floor}`)

  return floor
}

/*
 * Watt Hall has only 6 floors.
 * The first digit of the room number is the floor number.
*/
const watt = (room) => {
  let floor = room.slice(0,1)

  return floor
}

/*
 * Wien Hall has 12 floors.
 * Rooms with shared private bathroom are suffixed by "A/B".
 * The first one/two digit(s) of the room number is the floor number.
 *
 * Room 206/7 is a special case and is a walk through double on floor 2.
*/
const wien = (room) => {
  let roomNoSuffix = room.replace("A/B", "").replace("/7", "")
  let roomStrlen = roomNoSuffix.length
  let floor = ""

  if (roomStrlen === 3) {
    floor = roomNoSuffix.slice(0, 1)
  } else if (roomStrlen == 4) {
    floor = roomNoSuffix.slice(0, 2)
  } else {
    console.error(`[ Wien ] invalid room number ${room}`)
  }

  DLog(`[ Wien ] ${room} -> floor: ${floor}`)

  return floor
}

/*
 * Woodbridge Hall has only 7 floors.
 * The first digit of the room number is the floor number.
*/
const woodbridge = (room) => {
  let floor = room.slice(0,1)
  DLog(`[ Woodbridge ] ${room} -> ${floor}`)

  return floor
}

const residenceHalls = {
  "47 Claremont": claremont,
  "548 West 113": W548,
  "600 W 113th": W600,
  "627 West 115": W627,
  "Broadway Hall": broadway,
  "Carlton": carlton,
  "East Campus": eastCampus,
  "Furnald Hall": furnald,
  "Harmony Hall": harmony,
  "Hogan Hall": hogan,
  "McBain Hall": mcbain,
  "Plimpton": plimpton,
  "River Hall": river,
  "Ruggles Hall": ruggles,
  "Schapiro Hall": schapiro,
  "Watt Hall": watt,
  "Wien Hall": wien,
  "Woodbridge Hall": woodbridge
}


let rawdata = fs.readFileSync(NLotteryPredicter2021);
let data = JSON.parse(rawdata)[table];


let inferred = JSON.parse(rawdata)[table].map( record => {
  let {DORM: hall, ROOM: room} = record
  record["FLOOR"] = residenceHalls[hall](room)

  return record
})

let newTable = {}
newTable[table] = inferred

fs.writeFile (out, JSON.stringify(newTable), function(err) {
    if (err) throw err;
    console.log('Floor inferrence complete!');
    }
);
