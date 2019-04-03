"SELECT FLOOR FROM dorms.ShaftLive WHERE DORM = 'East Campus"

var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/**
 * How to test:
 * Using Postman, send POST request to 
 * localhost:8080/api/getDormInfo/
 * In params, make sure you set key=value 
 * to table=theshaft.dorm_static_info
 */


function getUniqueFloorNumbers(con, request, callback) {
	con.connect(function(err) {
		if (err) throw err;

		/* Code vague such as to apply to any table.
		{
			"table": "dorm_static_info",
			"DORM": "110",
			"ADDRESS": "601 W 110th Street"
		}
		*/

		var sqlStatement = `SELECT DISTINCT FLOOR
        FROM ShaftLive WHERE DORM = "${request["DORM"]}";`
		
		con.query(sqlStatement, function(err, res) {
			if (err) throw err;
			callback(res)
		});

		con.end(); // DO NOT REMOVE!
	});
}

router.post('/', function(req, res, next) {
	var con = mysql.createConnection({
		host: "192.34.62.10",
		user: "USERNAME",
		password: "PASSWORD",
		database: "dorms"
	  });
	
	getUniqueFloorNumbers(con, req.body, (dormInfo) => {
		res.json(dormInfo)
	})

})

module.exports = router;