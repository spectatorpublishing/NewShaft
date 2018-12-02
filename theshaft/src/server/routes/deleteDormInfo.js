
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

function deleteDormInfo(con, request, callback) {
	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");

	  /* Code vague such as to apply to any table.
		{
			"table": "dorm_static_info",
			"DORM": "110",
			"ADDRESS": "601 W 110th Street"
		}
		*/

	  var sqlStatement = `DELETE FROM \`${request.table}\` `
	  delete request.table
	  var firstKey = true;

	  for (key in request)  {
	  	if(firstKey) {
			firstKey = false
	  		sqlStatement += `WHERE ${key}="${request[key]}"`
	  	}
	  	else
	  		sqlStatement += ` AND ${key}="${request[key]}"`
	  }

	  if (!sqlStatement.includes("WHERE")) {
	  	console.log("Cannot use this endpoint to delete table");
	  	callback({"Status": "Failure"});
	  	return ;
	  }
	  console.log(sqlStatement);

	  con.query(sqlStatement, function(err, res) {
		if (err) throw err;
		console.log(res);
		callback({"Status": "Success"})
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

	console.log("requesting deletion of",req.body)
	
	deleteDormInfo(con, req.body, (dormInfo) => {
		res.json(dormInfo)
	})

})

module.exports = router;