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


function getAmentities(con, request, callback) {
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

		var sqlStatement = `SELECT P_BATHROOM, LAUNDRY, CARPET,
		F_KITCHEN, P_KITCHEN, LOUNGE, GYM, BIKE, COMPUTER, PRINT,
		AC, MUSIC FROM amenities
		WHERE DORM = "${request["DORM"]}";`
		
		console.log(sqlStatement);
		
		con.query(sqlStatement, function(err, res) {
			if (err) throw err;
			callback(res)
		});

		con.end(); // DO NOT REMOVE!
	});
}

router.post('/', function(req, res, next) {
	console.log("request received");
	var con = mysql.createConnection({
		host: "192.34.62.10",
		user: "USERNAME",
		password: "PASSWORD",
		database: "dorms"
	  });
	console.log("requesting selection of" , req.body)
	
	getAmentities(con, req.body, (dormInfo) => {
		res.json(dormInfo)
	})

})

module.exports = router;