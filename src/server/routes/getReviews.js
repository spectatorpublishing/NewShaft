/** Route that gets all reviews for specific dorm. Good candidate for refactoring */
var express = require('express');
var router = express.Router();
var pool = require("../database")

router.get('/:dorm', async (req, res) => {
	let sqlStatement1 = `SELECT * FROM review 
	WHERE DORM = "${req.params.dorm}";`
	let sqlStatement2 = `SELECT 
	(SELECT count(*) from dev.review where RECOMMEND=1 and DORM="${req.params.dorm}") /
	(SELECT count(*) from dev.review where DORM="${req.params.dorm}")
	from dev.review;`;
	let sqlStatement3 = `SELECT @row_number:=@row_number+1 AS row_number,DORM FROM dev.avg_stars,
	(SELECT @row_number:=0) AS t
	ORDER BY avg_stars DESC;`
	
	const result = await pool.query(sqlStatement1, async (err, res)=> {
		if (err) throw err;
		if(res.length == 0){
			let to_return = {reccomended: "—", avg_rating: "—", ranking: "—", reviews: [{TIMESTAMP: 'No Review', ADDRESS: '', DORM: req.params.dorm, YEAR: '2018', NUM_STARS : 0, RECOMMEND: 0, ROOM_NUM: 'No Room' , REVIEW_TXT: 'No Reviews', THUMBS_UP: '', THUMBS_DOWN: ''}]}
			return (to_return);
		}else{
			var avg_rating = 0
			for (var i = 0; i < res.length; i++) {
				avg_rating += res[i].NUM_STARS;
			}
			var avg_rating =  (avg_rating / res.length).toFixed(1);
			await pool.query(sqlStatement2, async (err, res2) => {	
				if(err) throw err;
				var reccomended = Object.values(res2[0])[0].toFixed(1) * 100 + "%";
				await pool.query(sqlStatement3, function(err, res3) {
					var ranking = "-"
					for (var i = 0; i < res3.length; i++) {
						if (res3[i]["DORM"] == req.params.dorm) {
							var ranking = res3[i]["row_number"];
						}
					}
					let to_return = {reccomended: reccomended, avg_rating: avg_rating, ranking: ranking, reviews: res};
					return to_return;
				});
			});
		}
	
	});
	res.send(result[0])
})

module.exports = router;