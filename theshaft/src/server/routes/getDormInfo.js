//qu'est que c'est le squel lmao???
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

function getDormInfo(con, request, callback) {
	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");

	  /**
	  	Trying to make the code as vague as possible because no database mockup
		Let's say for now that the request's body is the following:
		{
			"table": "Test",
			"dorm": "John Jay",
			"ac": "1",
			"number_of_rooms": "3",
			"toilet_person_ratio": "1"
		}
		Let's also assume that the table is always given.
	   */
	  var sqlStatement = `SELECT * FROM \`${request.table}\` `
	  delete request.table
	  var firstKey = true

	  for (key in request)  {
	  	if(firstKey) {
			firstKey = false
	  		sqlStatement += `WHERE ${key}="${request[key]}"`
	  	}
	  	else
	  		sqlStatement += ` AND ${key}="${request[key]}"`
	  }
	  console.log(sqlStatement)

	  con.query(sqlStatement, function(err, res) {
					  	if (err) throw err;
					  	console.log(res);
					  	callback(res)
					  });
	})
}

router.post('/', function(req, res, next) {
	
	var con = mysql.createConnection({
	  host: "85.10.205.173",
	  user: "spectech",
	  password: "Eyeball1962",
	  database: "theshaft"
	});

	console.log("requesting selection of",req.body)
	
	getDormInfo(con, req.body, (dormInfo) => {
		res.json(dormInfo)
	})

})

module.exports = router;