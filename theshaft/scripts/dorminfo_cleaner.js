var fs = require("fs");

var cutoffs_json = fs.readFileSync("../db/DormJSONS/_cutoffs.json");
var cutoffs = JSON.parse(cutoffs_json);

var keys = Object.keys(cutoffs);
var dorms = []
for (var i = 0; i < keys.length; i++)
{
    var filename = "../db/DormJSONS/" + keys[i].toLowerCase().replace(/ /g, "-") + "_data.json";
    if (!fs.existsSync(filename)) {
        continue;
    }

    var dorm_data = JSON.parse(fs.readFileSync(filename));
    var dorm = {
        DORM: keys[i],
        ADDRESS: dorm_data["Entrance Info"],
        DESCRIPTION: dorm_data["Features"],
        COLLEGE: "Columbia",
        THUMBNAIL_IMAGE: "react.png",
        PROS: dorm_data["What Students Say"],
        CONS: dorm_data["Cleaning Schedule"],
        LATITUDE: dorm_data["Latitude"],
        LONGITUDE: dorm_data["Longitude"],
        LOTTERY_NUMS: cutoffs[keys[i]],
        WALKTHROUGH: dorm_data["Room Type"].toLowerCase().includes("through"),
        SINGLE: dorm_data["Room Type"].toLowerCase().includes("single"),
        DOUBLE: dorm_data["Room Type"].toLowerCase().includes("double"),
        TRIPLE: dorm_data["Room Type"].toLowerCase().includes("triple"),
        CLASS_MAKEUP: [],
    }
    if (dorm_data["Class Make-Up"].toLowerCase().includes("first")) {
        dorm.CLASS_MAKEUP.push("first-years");
    }
    if (dorm_data["Class Make-Up"].toLowerCase().includes("sophomore")) {
        dorm.CLASS_MAKEUP.push("sophomores");
    }
    if (dorm_data["Class Make-Up"].toLowerCase().includes("junior")) {
        dorm.CLASS_MAKEUP.push("juniors");
    }
    if (dorm_data["Class Make-Up"].toLowerCase().includes("senior")) {
        dorm.CLASS_MAKEUP.push("seniors");
    }
    dorms.push(dorm);
}

fs.writeFileSync("../db/DormJSONS/_alldata.json", JSON.stringify(dorms));
