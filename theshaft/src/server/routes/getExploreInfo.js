var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/**
 * How to test:
 * Using Postman, send POST request to 
 * localhost:8080/api/getExploreInfo/
 */


function getExploreInfo(con, callback) {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");

	
		var sqlStatement = `SELECT DORM, DESCRIPTION, COLLEGE, THUMBNAIL_IMAGE, LATITUDE, LONGITUDE FROM dorm_static_info; `

		
		con.query(sqlStatement, function(err, res) {
			if (err) throw err;
			callback(res)
		});

		con.end(); // DO NOT REMOVE!
	});
}

router.get('/', function(req, res, next) {
	console.log("request received");
	var con = mysql.createConnection({
		host: "192.34.62.10",
		user: "USERNAME",
		password: "PASSWORD",
		database: "dorms"
	  });
	
	getExploreInfo(con, (dormInfo) => {
		res.json(dormInfo)
		// lmao wtf why => res.send(JSON.stringify(res))
	})

})

module.exports = router;