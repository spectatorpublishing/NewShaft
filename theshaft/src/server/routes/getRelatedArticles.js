var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var redis = require('redis')
var client = redis.createClient();

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
	var redis_key = "relatedArticles_" + req.body.DORM;
	client.get(redis_key, (err, reply)=> { 
		if(reply == null){
			console.log("Using mysql for " + redis_key)
			var con = mysql.createConnection({
				host: "192.34.62.10",
				user: "USERNAME",
				password: "PASSWORD",
				database: "dorms"
			});

			getRelatedArticles(con, req.body, (ArticleInfo) => {
				client.set(redis_key, JSON.stringify(ArticleInfo[0]))
				client.expire(redis_key,86400)
				res.json(ArticleInfo)
			})
		} else {
			console.log("Using redis for " + redis_key)
			res.json(JSON.parse(reply))
		}
	})
})

module.exports = router;