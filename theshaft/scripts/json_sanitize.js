var fs = require('fs');

var path = "../db/DormJSONS";
fs.readdir(path, handleJSONs);

function handleJSONs(err, files)
{
    for (var i = 0; i < files.length; i++)
    {    
        console.log(files.length);
        console.log(i);
        console.log(files[i]);
        var filePath = path + '/' + files[i];
        var data = fs.readFileSync(filePath, 'utf8');
        var finalObject = {};
        var jsonObject = JSON.parse(data);
        var allKeys = Object.keys(jsonObject);
        for (var j = 0; j < allKeys.length; j++)
        {
            var key = allKeys[j];
            var newKey = key.trim();
            var value = jsonObject[key];
            var newValue = value.replace(/\s+/g,' ');
            finalObject[newKey] = newValue;
        }
        fs.writeFileSync(filePath, JSON.stringify(finalObject));
    }
}
