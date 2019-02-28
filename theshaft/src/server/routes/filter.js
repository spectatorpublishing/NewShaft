
var express = require("express");
var router = express.Router();
var mysql = require("mysql");


function filterDormInfo(con, request, callback) {

  var sqlStatement = `SELECT DORM, DESCRIPTION, COLLEGE, THUMBNAIL_IMAGE, LATITUDE, LONGITUDE FROM dorm_static_info `

  var firstKey = true
  var keys = Object.keys(request);

  if(request["COLUMBIA"] === 1 && request["BARNARD"] == 0){
    firstKey = false;
    sqlStatement += `WHERE COLLEGE = "COLUMBIA"`;
  }else if(request["COLUMBIA"] == 0 && request["BARNARD"] == 1 ){
    firstkey = false;
    sqlStatement += `WHERE COLLEGE = "BARNARD"`;
  }

  // Prevent iteration through COLUMBIA and BARNARD
  for(i = 2; i < keys.length; i++) {
    if(typeof request[keys[i]] === "number" && request[keys[i]] === 1){
      if(firstKey) {
				firstKey = false
				sqlStatement += `WHERE ${keys[i]}=${request[keys[i]]}`
			} else {
				sqlStatement += ` AND ${keys[i]}=${request[keys[i]]}`
			}
    }
    else if((typeof request[keys[i]] === "string" && request[keys[i]].length > 0)){
      if(firstKey) {
				firstKey = false
				sqlStatement += `WHERE ${keys[i]} LIKE '${request[keys[i]]}%'`
			} else {
				sqlStatement += ` AND ${keys[i]} LIKE '${request[keys[i]]}%'`
			}
    }
	}
  sqlStatement+=`;`
  console.log(sqlStatement);
  
  con.query(sqlStatement, function(err, res) {
    if (err) throw err;
    callback(res)
  });

  con.end(); // DO NOT REMOVE!

}

router.post("/", function(req, res, next) {
  var con = mysql.createConnection({
    host: "157.230.66.55",
    user: "root",
    password: "spec1877",
    database: "dorms"
  });
  filterDormInfo(con, req.body, dormInfo => {
    console.log("server side dorminfo", dormInfo);
    // JSON.stringify(dormInfo[0])
    res.json(dormInfo);
  });
});

module.exports = router;
