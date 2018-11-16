//qu'est que c'est squel lmao???
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

function SELECTdorm(con, dormName, callback) {
	var tableName = 'TEST' //for now...
	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");

	  var sqlStatement = `SELECT ${dormName} FROM ${tableName}`
	  con.query(sqlStatement, function(err, res) {
					  	if (err) throw err;
					  	console.log(res);
					  	callback(res)
					  });
	})
}

router.post('/', function(req, res) {
	
	var con = mysql.createConnection({
	  host: "85.10.205.173",
	  user: "spectech",
	  password: "Eyeball1962",
	  database: "theshaft"
	});

	var dorm = req.body.dormName

	SELECTdorm(con, dorm, (dormInfo) => {
		res.json(dormInfo)
	})

})