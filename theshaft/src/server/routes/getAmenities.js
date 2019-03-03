var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var redis = require('redis');
var client = redis.createClient();

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
	var redis_key = "amenities_" + req.body.DORM;
	client.get(redis_key, function(err, reply){
		if(reply == null){
			console.log("Using mysql for " + redis_key)
			var con = mysql.createConnection({
				host: "192.34.62.10",
				user: "USERNAME",
				password: "PASSWORD",
				database: "dorms"
			});
			
			getAmentities(con, req.body, (dormInfo) => {
				client.set(redis_key, JSON.stringify(dormInfo[0]))
				client.expire(redis_key,86400)
				res.json(dormInfo)
			})
		} else {
			console.log("Using redis for " + redis_key)
			res.json(JSON.parse(reply))
		}
	})

})

module.exports = router;