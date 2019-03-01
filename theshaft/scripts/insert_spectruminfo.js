var fs = require("fs");

var alldata_json = JSON.parse(fs.readFileSync("../db/OtherJSONS/_alldata.json"));
var spectrum_json = JSON.parse(fs.readFileSync("../db/OtherJSONS/_spectruminfo.json"));
var spectrum = {};
var alldata = {};

// This takes in CSV converted to JSON at https://www.csvjson.com/csv2json

// Convert from Array to Object
for (var dorm in spectrum_json) {
    spectrum[spectrum_json[dorm]["Dorm"]] = spectrum_json[dorm];
}
for (var dorm2 in alldata_json) {
    alldata[alldata_json[dorm2]["DORM"]] = alldata_json[dorm2];
}

var alldata_keys = Object.keys(alldata);

var dorms = [];

// Add new information
for (var i = 0; i < alldata_keys.length; i++)
{
    var dorm_name = alldata_keys[i];
    if (dorm_name in spectrum)
    {
        var spectrum_dorm = spectrum[dorm_name];
        var alldata_dorm = alldata[dorm_name];
        alldata_dorm["DESCRIPTION"] = spectrum_dorm["Blurb (~100 words)"];
        var pros = [];
        var cons = [];
        if (spectrum_dorm["Pro1 (at least 1)"] != '') {
            pros.push(spectrum_dorm["Pro1 (at least 1)"])
        }
        if (spectrum_dorm["Pro2"] != '') {
            pros.push(spectrum_dorm["Pro2"])
        }
        if (spectrum_dorm["Pro3"] != '') {
            pros.push(spectrum_dorm["Pro3"])
        }
        if (spectrum_dorm["Con1 (at least 1)"] != '') {
            cons.push(spectrum_dorm["Con1 (at least 1)"])
        }
        if (spectrum_dorm["Con2"] != '') {
            cons.push(spectrum_dorm["Con2"])
        }
        if (spectrum_dorm["Con3"] != '') {
            cons.push(spectrum_dorm["Con3"])
        }
        alldata_dorm["PROS"] = pros;
        alldata_dorm["CONS"] = cons;

        var related = [];

        if (spectrum_dorm["Related Article 1 (URL)"] != '') {
            related.push(spectrum_dorm["Related Article 1 (URL)"])
        }
        if (spectrum_dorm["Related Article 2 (URL)"] != '') {
            related.push(spectrum_dorm["Related Article 2 (URL)"])
        }
        alldata_dorm["RELATED"] = related;
        dorms.push(alldata_dorm);
    }
}

fs.writeFileSync("../db/OtherJSONS/_alldata.json", JSON.stringify(dorms));
