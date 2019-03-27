var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/**
 * How to test:
 * Using Postman, send POST request to 
 * localhost:8080/api/getLotteryNum/
 * In params, make sure you set key=value 
 * to table=theshaft.whiteboard_test
 */


function getLotteryNum(con, request, callback) {
	con.connect(function(err) {
		if (err) throw err;

		/* Code vague such as to apply to any table.
		{
			"table": "whiteboard_test",
			"DORM": "110",
			"ADDRESS": "601 W 110th Street"
		}
		*/

		var sqlStatement = `SELECT * FROM whiteboard_test `
		delete request.table;
		var firstKey = true

		for (key in request)  {
			if(firstKey) {
				firstKey = false
				sqlStatement += `WHERE ${key}="${request[key]}"`
			} else {
				sqlStatement += ` AND ${key}="${request[key]}"`
			}
		}
		sqlStatement+=`;`

		
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
		database: "dev"
	  });
	
	getLotteryNum(con, req.body, (lotteryInfo) => {
		res.json(lotteryInfo)
		// lmao wtf why => res.send(JSON.stringify(res))
	})

})

module.exports = router;