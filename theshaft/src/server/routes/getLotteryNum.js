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
		console.log(request["DORM"])
		console.log(request["FLOOR"])
		var sqlStatement = `SELECT * FROM ShaftLive WHERE DORM="${request["DORM"]}" AND FLOOR="${request["FLOOR"]}";`
		
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
	
	getLotteryNum(con, req.body, (lotteryInfo) => {
		res.json(lotteryInfo)
		// lmao wtf why => res.send(JSON.stringify(res))
	})

})

module.exports = router;