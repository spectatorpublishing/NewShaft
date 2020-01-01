/*
    DOCUMENTATION FOR INSERTION
    To use my script follow the following instructions:
    (1) Git commit the current DB's to prevent screwing up the jsons
    (2) Make sure you have the hard coded data placed in hardcoded_info
    (3) Ensure that your data is in the following format: data0,data1,data2 
        (data can contain spaces but must be seperated only by commas)
    (3a) Ensure that the data you enter matches the following dorm order based on latlong.txt
    (3b) Follow the order that is listed in the DormJSONS folder (claremont, nuss, broadway, carlton...)
    (4) at line 70 change the name of the text file to desired
    (5) add keys and values
    (5a) keys are hardcoded the values is dependent on what it reads in from the text file
         for example: in latlong text, data2 is latitude and data3 is longitutde
         thus the value for key latitude is data2 which is index 1 for json potential
    (6) Run script and check if the jsons are to your liking
*/


const fs = require('fs')

var path = "../db/DormJSONS";
var jsonArray=[]
fs.readdir(path, updateJSONs);

function updateJSONs(err, files)
{
    for (var i = 0; i < files.length; i++)
    {    
        var filePath = path + '/' + files[i];
        var data = fs.readFileSync(filePath, 'utf8');
        var jsonObject = JSON.parse(data);
        jsonArray.push(jsonObject)
    }
    Inject(jsonArray,filePath,files);
}


var content;
// Second - get latitude longitude

function Inject(jsonArray,filePath,files){
    fs.readFile('../hardcoded_info/latlong.txt',"utf8", function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;
        var arr = content.split('\n')
        var newJsonArray=[];
        /*NOTE: FILES BEING READ IN HAVE _ALLDATA, _CUTOFFS.JSON PRESENT HERE ADDING LENGTH BY 2*/
        for( i =files.length-1;i>=0;i--)
        {
            var filePath = path + '/' + files[i];
            json_potentional = arr[i].split(',');
            curr_json=jsonArray[i];
            curr_json["Latitude"]=json_potentional[1];
            curr_json["Longitude"]=json_potentional[2];
            fs.writeFileSync(filePath,JSON.stringify(curr_json))
        }


        });
}

