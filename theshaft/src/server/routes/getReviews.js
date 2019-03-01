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


function getReviews(con, request, callback) {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");

		/* Code vague such as to apply to any table.
		{
			"table": */

        var sqlStatement = `SELECT * FROM review 
        WHERE DORM = "${request["DORM"]}";`
		
		con.query(sqlStatement, function(err, res) {
			if (err) throw err;
			var avg_rating = 0
			for (var i = 0; i < res.length; i++)
			{
				avg_rating += res[i].NUM_STARS;
			}
			to_return = {avg_rating: (avg_rating / res.length).toFixed(1), reviews: res};
			callback(to_return);
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
	
	getReviews(con, req.body, (revInfo) => {
		console.log(revInfo)
		res.json(revInfo)
	})

})

module.exports = router;