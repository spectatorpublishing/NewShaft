const fs = require('fs');
let { parse } = require("csv-parse");
const { Console } = require('console');

// infer floor from housing data (2022) in csv form

/* replace with the absolute path to the csv files on your machine */
const NLotteryPredicter2022 = "/Users/zhuci/Desktop/SpecTech/Shaft_stuff/Housing2022.csv"
const out = "/Users/zhuci/Desktop/SpecTech/Shaft_stuff/Housing2022_inferred_new.csv"
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

  if (room.length === 2) {
    floor = "1"
  } else if (room.length === 3) {
    floor = room.slice(0, 1)
  } else {
    console.error(`[ 47 Claremont ] invalid room number ${room}`)
  }

  return floor
}

const W548 = (room) => {
  let floor = room.slice(0, 1)

  return floor
}

/*
 * 600 W 113th has 6 floors.
 * The first digit/first two digits of the room number is the floor number.
*/
const W600 = (room) => {
  let floor = ""

  if (room.length === 3) {
    floor = room.slice(0, 1)
  } else if (room.length === 4) {
    floor = room.slice(0, 2)
  } else {
    console.error(`[ 600 W 113th ] invalid room number ${room}`)
  }

  return floor
}

const W627 = (room) => {
  let floor = room.slice(0, 1)

  return floor
}

/*
 * Broadway Hall has 11 floors.
 * The first digit/first two digits of the room number is the floor number.
*/
const broadway = (room) => {
  let floor = ""

  if (room.length === 3) {
    floor = room.slice(0, 1)
  } else if (room.length === 4) {
    floor = room.slice(0, 2)
  } else {
    console.error(`[ Broadway Hall ] invalid room number ${room}`)
  }

  return floor
}

/*
 * Carlton Arms has 10 floors.
 * The floors are split into 4 different floor plans
 * The first two digits of the room number is the floor number.
*/
const carlton = (room) => {
  let floor
  if (room.slice(0, 2) ==="10") {
    floor = room.slice(0, 3)
  }
  else {
    floor = room.slice(0, 2)
  }
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
  let isTownhouse = room.slice(0, 1) === "H"
  let floor = ""

  if (isTownhouse) {
    // roomSuffix : individual room letter (i.e. for room 1002A => "A")
    let roomSuffix = room.slice(room.length - 1, room.length)

    // suiteSuffix : last digit of suite number (i.e. for room 1002A => "2")
    let suiteSuffix = room.slice(room.length - 2, room.length - 1)
    let isLower = suiteSuffix === "1" || suiteSuffix === "2"
    let isMiddle = suiteSuffix === "3" || suiteSuffix === "4"
    let isUpper = suiteSuffix === "5" || suiteSuffix === "6"

    if (isLower) {
      floor = "LT"
    } else if (isMiddle) {
      if (roomSuffix === "A" || roomSuffix === "B") {
        floor = "MT1"
      } else if (roomSuffix === "C" || roomSuffix === "D") {
        floor = "MT3"
      } else if (roomSuffix === "E" || roomSuffix === "F") {
        floor = "MT4"
      } else {
        console.error(`[ East Campus ] invalid room number ${room}`)
      }
    } else if (isUpper) {
      if (roomSuffix === "A" || roomSuffix === "B") {
        floor = "UT2"
      } else if (roomSuffix === "C" || roomSuffix === "D") {
        floor = "UT3"
      } else if (roomSuffix === "E" || roomSuffix === "F") {
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
 * Hartley Hall has 10 floors.
 * The first 1-2 digits of the room number is the floor number.
*/
const hartley = (room) => {
  let floor = "";
  end = room.search(/[ABCDEFG]/);
  floor = room.slice(0, end);
  return floor
}
/*
 * Hogan Hall has 6 floors.
 * The first digit of the room number is the floor number.
*/
const hogan = (room) => {
  let floor = room.slice(0, 1)
  console.log(floor, room)
  return floor
}

/*
 * Mcbain Hall has 8 floors.
 * The first digit of the room number is the floor number.
*/
const mcbain = (room) => {
  let floor = room.slice(0, 1)

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
  let floor = room.slice(0, 1)
  DLog(`[ River ] ${room} -> ${floor}`)

  return floor
}

/*
 * Ruggles Hall has only 8 floors.
 * The first digit of the room number is the floor number.
*/
const ruggles = (room) => {
  let floor = room.slice(0, 1)

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
 * Wallach has 10 floors
 * The first 1-2 digits are the floor
*/
const wallach = (room) => {
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
 * Watt Hall has only 6 floors.
 * The first digit of the room number is the floor number.
*/
const watt = (room) => {
  let floor = room.slice(0, 1)

  return floor
}

/*
 * Wien Hall has 12 floors.
 * Rooms with shared private bathroom are suffixed by "A" or "B".
 * The first one/two digit(s) of the room number is the floor number.
 *
 * Room 206/7 is a special case and is a walk through double on floor 2.
*/
const wien = (room) => {
  let roomNoSuffix = room.replace(/[AB]/, "").replace("/7", "")
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
  let floor = room.slice(0, 1)
  DLog(`[ Woodbridge ] ${room} -> ${floor}`)

  return floor
}

const residenceHalls = {
  "47C": claremont,
  "BR548": W548,
  "600": W600,
  "BR627": W627,
  "BWY": broadway,
  "CRL": carlton,
  "EC": eastCampus,
  "FUR": furnald,
  "HMY": harmony,
  "HTL": hartley,
  "HOG": hogan,
  "MCB": mcbain,
  "BCPLI": plimpton,
  "RIV": river,
  "RUG": ruggles,
  "SHP": schapiro,
  "WAL": wallach,
  "WTT": watt,
  "WIN": wien,
  "WBH": woodbridge
}

// converts @param{data} in json format into csv
// with fields specified by @param{fields}.
// The resulting csv string is written to @param{out}.
const json2csv = (data, fields, out) => {
  let { parse } = require("json2csv");

  const opts = { fields }

  try {
    const csv = parse(data, opts)

    fs.writeFile(out, csv, function(err) {
      if (err) throw err
      console.log('Floor inferrence complete!')
    })
  } catch (err) {
    console.error(err)
  }
}

const data = [];

fs.createReadStream(NLotteryPredicter2022)
  .pipe(
    parse({
      delimiter: ",",
      columns: true,
      ltrim: true,
    })
  )
  .on("data", function (row) {
    // This will push the object row into the array
    data.push(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    // Here log the result array
    console.log("parsed csv data:");
    let inferred = data.map(record => {
        let {'raw_room_description': room} = record;
        let dorm = room?.split(' ')[0];
        let room_number = room?.split(' ')[1]?.split('-')[0];
        record["room"] = room_number;
        record["room_suffix"] = room?.split(' ')[1]?.split('-')[1];
        record["floor"] = residenceHalls[dorm](room_number);
        // fields = Object.keys(record)
        // console.log(record['dorm'])
        return record;
    });
    let fields = Object.keys(inferred[0])
    // console.log(fields)
    json2csv(inferred, fields, out)
  });