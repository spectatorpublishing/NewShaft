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


function getDormPhotos(con, request, callback) {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");

		/* Code vague such as to apply to any table.
		{
			"table": */

        var sqlStatement = `SELECT MAIN_IMAGE, OTHER1, OTHER2, OTHER3 FROM dorm_explore_photos 
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
	var redis_key = "dormphotos_" + req.body.DORM;
	client.get(redis_key, (err, reply)=> {
		if(reply == null){
			console.log("Using mysql for " + redis_key)
			var con = mysql.createConnection({
				host: "192.34.62.10",
				user: "USERNAME",
				password: "PASSWORD",
				database: "dorms"
			});

			getDormPhotos(con, req.body, (revInfo) => {
				client.set(redis_key, JSON.stringify(revInfo[0]))
				res.json(revInfo)
			})
		} else {
			console.log("Using redis for " + redis_key)
			res.json(JSON.parse(reply))
		}
	})

})

module.exports = router;