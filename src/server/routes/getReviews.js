// Route that fetches reviews for specific dorm, needs to be refactored to async model

var express = require('express');
var router = express.Router();
var mysql = require('mysql');


function getReviews(con, dorm, callback) {
	con.connect(function(err) {
		if (err) throw err;

        var sqlStatement = `SELECT * FROM review 
		WHERE DORM = "${dorm}";`
		var sqlStatement2 = `select 
		(select count(*) from dev.review where RECOMMEND=1 and DORM="${dorm}") /
		(select count(*) from dev.review where DORM="${dorm}")
		from dev.review;`;
		var sqlStatement3 = `SELECT @row_number:=@row_number+1 AS row_number,DORM FROM dev.avg_stars,
		(SELECT @row_number:=0) AS t
		ORDER BY avg_stars DESC;`
		
		con.query(sqlStatement, function(err, res) {
			if (err) throw err;
			if(res.length == 0){
				var to_return = {reccomended: "—", avg_rating: "—", ranking: "—", reviews: [{TIMESTAMP: 'No Review', ADDRESS: '', DORM: dorm, YEAR: '2018', NUM_STARS : 0, RECOMMEND: 0, ROOM_NUM: 'No Room' , REVIEW_TXT: 'No Reviews', THUMBS_UP: '', THUMBS_DOWN: ''}]}
				callback(to_return);
			}else{
				var avg_rating = 0
				for (var i = 0; i < res.length; i++) {
					avg_rating += res[i].NUM_STARS;
				}
				var avg_rating =  (avg_rating / res.length).toFixed(1);
				con.query(sqlStatement2, function(err, res2) {	
					var reccomended = Object.values(res2[0])[0];
					console.log("recomended is", Object.values(res2[0])[0]);
					con.query(sqlStatement3, function(err, res3) {
						var ranking = "-"
						for (var i = 0; i < res3.length; i++) {
							if (res3[i]["DORM"] == dorm) {
								var ranking = res3[i]["row_number"];
							}
						}
						var to_return = {recommended: reccomended, avg_rating: avg_rating, ranking: ranking, reviews: res};
						callback(to_return);
					});
					con.end(); // DO NOT REMOVE!
				});
			}
		
		});

	});
}

router.get('/:dorm', function(req, res) {
	var con = mysql.createConnection({
	    host: process.env.SHAFTHOST,
  		user: process.env.SHAFTUSER,
  		password: process.env.SHAFTPASSWORD,
  		database: process.env.SHAFTDATABASE
	});
	
	getReviews(con, req.params.dorm, (revInfo) => {
		res.json(revInfo)
	})

})

module.exports = router;