var express = require('express');
var router = express.Router();
var mysql = require('mysql');

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
	console.log("request received");
	var con = mysql.createConnection({
	    host: "157.230.66.55",
  		user: "root",
  		password: "spec1877",
  		database: "dorms"
	});
	console.log("requesting selection of" , req.body)
	
	getFloorPlans(con, req.body, (revInfo) => {
		console.log(revInfo)
		res.json(revInfo)
	})

})

module.exports = router;