var fs = require('fs');

var path = "/Users/nahumgetachew/Desktop/Spec/NewShaft/theshaft/db/DormJSONS";
fs.readdir(path, handleJSONs);

function handleJSONs(err, files)
{
    var fileReadOptions = { 'encoding':'utf-8' };
    for (i = 0; i < files.length; i++)
    {
        filePath = path + '/' + files[i];
        fs.readFile(filePath, fileReadOptions, handleOneJSON);
    }
}

function handleOneJSON(err, data)
{
    var jsonObject = JSON.parse(data);
    var allKeys = Object.keys(jsonObject);
    for (i = 0; i < allKeys.length; i++)
    {
        console.log(allKeys[i]);
    }
}