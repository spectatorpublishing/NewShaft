var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');
var mysql = require('mysql');

var inputFile='shaft.csv';
var con = mysql.createConnection({
      host: "157.230.66.55",
      user: "root",
      password: "spec1877",
      database: "dorms"
  });

function switcho(stringa) {
  //line[2]
  if(stringa === "600 West 113th Street")
      return "600 W 113th"
  if(stringa === "600 West 116th Street")
      return "600 W 116th"
  if(stringa === "Residential Brownstones")
      return "Symposium"

  //line[4]
  if(stringa === "First Year")
      return "first-years"
  if(stringa === "Sophomore")
      return "sophomores"
  if(stringa === "Junior")
      return "juniors"
  if(stringa === "Senior")
      return "seniors"
  else
      return stringa
}

var parser = parse({delimiter: ','}, function (err, data) {
  con.connect(function(err) {
    var first = true
    async.eachSeries(data, function (line, callback) {
      if(first)
        first = false

      else {
        
          if (err) throw err;
          console.log("Connected!");
          dorm = switcho(line[2])
          year = switcho(line[4])
          var sqlStatement = `INSERT INTO review (DORM, ADDRESS, NUM_STARS, REVIEW_TXT, ROOM_NUM, YEAR)`
          sqlStatement += `VALUES ("${dorm}", "${line[1]}", "${line[5]}", "${line[7]}", "${line[3]}", "${year}");`
          
          con.query(sqlStatement, function(err, res) {
            if (err) throw err;
          });
      }
      callback()
    })
     con.end(); // DO NOT REMOVE!
  });
});

fs.createReadStream(inputFile).pipe(parser);
