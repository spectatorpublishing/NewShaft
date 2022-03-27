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

const claremont = (room) => {
  return "1"
}

const W548 = (room) => {
  return "1"
}

const W600 = (room) => {
  return "1"
}

const W627 = (room) => {
  return "1"
}

const broadway = (room) => {
  return "1"
}

const carlton = (room) => {
  return "1"
}

const eastCampus = (room) => {
  return "1"
}

const furnald = (room) => {
  return "1"
}

const harmony = (room) => {
  return "1"
}

const hogan = (room) => {
  return "1"
}

const mcbain = (room) => {
  return "1"
}

const plimpton = (room) => {
  return "1"
}

const river = (room) => {
  return "1"
}

const ruggles = (room) => {
  return "1"
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

const watt = (room) => {
  return "1"
}

const wien = (room) => {
  return "1"
}

const woodbridge = (room) => {
  return "1"
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
