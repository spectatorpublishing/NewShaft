var fs = require("fs");

var cutoffs_json = fs.readFileSync("../db/DormJSONS/_cutoffs.json");
var cutoffs = JSON.parse(cutoffs_json);

var keys = Object.keys(cutoffs);
var amenities = []
for (var i = 0; i < keys.length; i++)
{
    var filename = "../db/DormJSONS/" + keys[i].toLowerCase().replace(/ /g, "-") + "_data.json";
    if (!fs.existsSync(filename)) {
        continue;
    }
    console.log(keys[i]);
    var dorm_data = JSON.parse(fs.readFileSync(filename));
    var dorm = {
        DORM: keys[i],
        "PRIVATE BATHROOM": dorm_data["Bathroom"].toLowerCase().includes("private"),
        LAUNDRY: dorm_data["Laundry"].toLowerCase().includes("available"),
        CARPET: dorm_data["Flooring"].toLowerCase().includes("no"),
        "FLOOR KITCHEN": dorm_data["Kitchen"].toLowerCase().includes("floor"),
        "PRIVATE KITCHEN": dorm_data["Kitchen"].toLowerCase().includes("private"),
        LOUNGE: "Lounge" in dorm_data,
        "FITNESS ROOM": "Fitness Room" in dorm_data,
        "BIKE STORAGE": "Bike Storage" in dorm_data,
        "COMPUTER LAB": "Computer Lab" in dorm_data,
        AC: ("A/C" in dorm_data) && dorm_data["A/C"].toLowerCase().includes("yes"),
        "PRINT STATION": "Print Station" in dorm_data,
        "MUSIC PRACTICE ROOM": "Music Practice Room" in dorm_data
    }
    amenities.push(dorm);
}

fs.writeFileSync("../db/DormJSONS/_amenities.json", JSON.stringify(amenities));
