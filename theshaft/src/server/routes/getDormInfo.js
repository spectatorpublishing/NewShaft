//qu'est que c'est le squel lmao???
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

function getDormInfo(con, dormName, tableName, callback) {
	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");

	  var sqlStatement = `SELECT * FROM \`${tableName}\` WHERE dorm = "${dormName}"`

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

	var dormName = req.body.dormName
	var tableName = 'Test' //should we be getting this be from the request?
	console.log("requesting",dormName,"from",tableName)
	
	getDormInfo(con, dormName, tableName, (dormInfo) => {
		res.json(dormInfo)
	})

})

module.exports = router;