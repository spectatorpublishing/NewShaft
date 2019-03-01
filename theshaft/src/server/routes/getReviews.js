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
		var sqlStatement2 = `select 
		(select count(*) from dorms.review where RECOMMEND=1 and DORM="${request["DORM"]}") /
		(select count(*) from dorms.review where DORM="${request["DORM"]}")
		from dorms.review;`;
		var sqlStatement3 = `SELECT @row_number:=@row_number+1 AS row_number,DORM FROM dorms.avg_stars,
		(SELECT @row_number:=0) AS t
		ORDER BY avg_stars DESC;`

		console.log(sqlStatement);
		
		con.query(sqlStatement, function(err, res) {
			if (err) throw err;
			var avg_rating = 0
			for (var i = 0; i < res.length; i++) {
				avg_rating += res[i].NUM_STARS;
			}
			var avg_rating =  (avg_rating / res.length).toFixed(1);
			/*con.query(sqlStatement2, function(err, res2) {
				var reccomended = Object.values(res2[0])[0].toFixed(1) * 100 + "%";
				con.query(sqlStatement3, function(err, res3) {
					var ranking = "-"
					for (var i = 0; i < res3.length; i++) {
						if (res3[i]["DORM"] == request["DORM"]) {
							var ranking = res3[i]["row_number"];
						}
					} */
					var to_return = { avg_rating: avg_rating,  reviews: res};
					callback(to_return);
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
	
	getReviews(con, req.body, (revInfo) => {
		res.json(revInfo)
	})

})

module.exports = router;