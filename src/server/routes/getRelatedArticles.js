var express = require('express');
var router = express.Router();
var pool = require('../database');


router.get('/:dorm', async (req, res) => {
	let query = `SELECT related_articles.RELATED1 AS RELATED, related_articles_metadata.TITLE, related_articles_metadata.IMAGE_URL, related_articles_metadata.AUTHOR, related_articles_metadata.DATE 
        FROM related_articles
        INNER JOIN related_articles_metadata ON related_articles.RELATED1=related_articles_metadata.URL 
        WHERE related_articles.DORM="${req.params.dorm}"
        UNION 
        SELECT related_articles.RELATED2 AS RELATED, related_articles_metadata.TITLE, related_articles_metadata.IMAGE_URL, related_articles_metadata.AUTHOR, related_articles_metadata.DATE 
        FROM related_articles
        INNER JOIN related_articles_metadata ON related_articles.RELATED2=related_articles_metadata.URL 
        WHERE related_articles.DORM="${req.params.dorm}";`
	const result = await pool.query(query);
	res.send(result)
})

module.exports = router;