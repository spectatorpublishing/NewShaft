var express = require('express');
var router = express.Router();
var mysql = require('mysql');

function getRelatedArticles(con, request, callback) {
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");

		var sqlStatement = `SELECT related_articles.RELATED1 AS RELATED, related_articles_metadata.TITLE, related_articles_metadata.IMAGE_URL, related_articles_metadata.AUTHOR, related_articles_metadata.DATE 
        FROM related_articles
        INNER JOIN related_articles_metadata ON related_articles.RELATED1=related_articles_metadata.URL 
        WHERE related_articles.DORM="${request["DORM"]}"
        UNION 
        SELECT related_articles.RELATED2 AS RELATED, related_articles_metadata.TITLE, related_articles_metadata.IMAGE_URL, related_articles_metadata.AUTHOR, related_articles_metadata.DATE 
        FROM related_articles
        INNER JOIN related_articles_metadata ON related_articles.RELATED2=related_articles_metadata.URL 
        WHERE related_articles.DORM="${request["DORM"]}";`
		
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
		host: "192.34.62.10",
		user: "USERNAME",
		password: "PASSWORD",
		database: "dev"
	  });
	console.log("requesting selection of" , req.body, '!')
	
	getRelatedArticles(con, req.body, (dormInfo) => {
		res.json(dormInfo)
	})

})

module.exports = router;