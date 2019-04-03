var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/**
 * How to test:
 * Using Postman, send POST request to 
 * localhost:8080/api/postReview/
 * In params, make sure you set key=value 
 * to table=theshaft.dorm_static_info
 */

 //^ yeetful legacy comment, pls disregard :3


function postReview(con, request, callback) {
	con.connect(function(err) {
		if (err) throw err;

		var sqlStatement = `INSERT INTO review (DORM, ADDRESS, NUM_STARS, REVIEW_TXT, ROOM_NUM, YEAR)`
		sqlStatement += `VALUES ("${request.DORM}", "${request.ADDRESS}", "${request.NUM_STARS}", "${request.REVIEW_TXT}", "${request.ROOM_NUM}", "${request.YEAR}");`
		
		con.query(sqlStatement, function(err, res) {
			if (err) throw err;
			callback("good shit bruh")
		});

		con.end(); // DO NOT REMOVE!
	});
}

router.post('/', function(req, res, next) {
	var con = mysql.createConnection({
	    host: "157.230.66.55",
  		user: "root",
  		password: "spec1877",
  		database: "dev"
	});
	
	postReview(con, req.body, (resp) => {
		res.json(resp)
	})

})

module.exports = router;