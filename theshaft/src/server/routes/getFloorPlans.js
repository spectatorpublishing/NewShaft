var express = require('express');
var router = express.Router();
var redis = require("redis");
var mysql = require('mysql');
var client = redis.createClient();

function getFloorPlans(con, request, callback) {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");

        var sqlStatement = `SELECT * FROM floor_plans 
        WHERE DORM = "${request["DORM"]}";`
		
		con.query(sqlStatement, function(err, res) {
			if (err) throw err;
			callback(res)
		});

		con.end(); // DO NOT REMOVE!
	});
}

router.post('/', function(req, res, next) {
  var redis_key = "floorplans_" + req.body.DORM;
	client.get(redis_key, (err, reply)=> { 
		if(reply == null){
			console.log("Using mysql for " + redis_key)
			var con = mysql.createConnection({
				host: "192.34.62.10",
				user: "USERNAME",
				password: "PASSWORD",
				database: "dev"
			});

			getFloorPlans(con, req.body, (dormInfo) => {
				client.set(redis_key, JSON.stringify(dormInfo))
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