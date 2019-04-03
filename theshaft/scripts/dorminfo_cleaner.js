var fs = require("fs");

var cutoffs_json = fs.readFileSync("../db/otherJSONS/_cutoffs.json");
var cutoffs = JSON.parse(cutoffs_json);

var keys = Object.keys(cutoffs);
var cutDorms = relevantKeys();
var dorms = []

var path = "../db/DormJSONS"

fs.readdir(path, updateJSONs);

function updateJSONs(err, files)
{
    for (var i = 0; i < files.length; i++)
    {   
        var filePath = path + '/' + files[i];
        var data = fs.readFileSync(filePath, 'utf8');
        var jsonObject = JSON.parse(data);
        cleanify(files[i], jsonObject);
    }
    fs.writeFileSync("../db/otherJSONS/_alldata.json", JSON.stringify(dorms));
}

function relevantKeys(){
    var names = []
    for (var i = 0; i < keys.length; i++){
        names.push(keys[i].toLowerCase().replace(/ /g, "-") + "_data.json");   
    }
    return names
}

function cleanText(data){
    if(data){
        return data.replace(/“/g, '"').replace(/'/g, "''").replace(/"/g, '\"');
    } else {
        return "N/A"
    }
}

function cleanify(fileName, dorm_data){
    var realName = fileName.replace('_data.json','').replace(/-/g,' ').replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    i = cutDorms.indexOf(fileName)
    var dorm = {
        DORM: realName,
        ADDRESS: cleanText(dorm_data["Entrance Info"]),
        DESCRIPTION: cleanText(dorm_data["Features"]),
        COLLEGE: "Columbia",
        THUMBNAIL_IMAGE: "react.png",
        PROS: cleanText(dorm_data["What Students Say"]),
        CONS: cleanText(dorm_data["Cleaning Schedule"]),
        LATITUDE: dorm_data["Latitude"],
        LONGITUDE: dorm_data["Longitude"],
        LOTTERY_NUMS: cutoffs[keys[i]] || "N/A",
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

