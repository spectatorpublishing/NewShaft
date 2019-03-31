var express = require('express');
var router = express.Router();
var mysql = require('mysql');

function getFloorPlans(con, request, callback) {
	con.connect(function(err) {
		if (err) throw err;

        var sqlStatement = `SELECT * FROM floor_plan_svgs 
        WHERE DORM = "${request["DORM"]}";`
		
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
	
	getFloorPlans(con, req.body, (revInfo) => {
		res.json(revInfo)
	})

})

module.exports = router;