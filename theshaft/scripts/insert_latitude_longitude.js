const fs = require('fs')

var path = "../db/DormJSONS";
var jsonArray=[]
fs.readdir(path, updateJSONs);

function updateJSONs(err, files)
{
    console.log(files.length)
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
    fs.readFile('./latlong.txt',"utf8", function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;
        var arr = content.split('\n')
        var newJsonArray=[]
        for( i =0;i<arr.length-1;i++)
        {
            json_potentional = arr[i].split(',');
            curr_json=jsonArray[i];
            curr_json["Latitude"]=json_potentional[1];
            curr_json["Longitude"]=json_potentional[2];
            newJsonArray.push(curr_json);
            newJsonArray.reverse();
        }

        for (var i = 0; i < files.length; i++)
        {    
            var filePath = path + '/' + files[i];
            fs.writeFileSync(filePath, JSON.stringify(newJsonArray[i]));
        }

        });
}
