/** Route that gets related dorms for a specific dorm */
var express = require('express');
var router = express.Router();
var pool = require('../database');


router.get('/:dorm', async (req, res) => {
	let query = `
	SELECT d.DORM AS RELATED, d.THUMBNAIL_IMAGE AS IMAGE FROM related_dorms r
		JOIN dorm_static_info d ON r.RELATED1 = d.DORM
		WHERE r.DORM = "${req.params.dorm}"
		UNION
	SELECT d.DORM AS RELATED, d.THUMBNAIL_IMAGE AS IMAGE FROM related_dorms r
		JOIN dorm_static_info d ON r.RELATED2 = d.DORM
		WHERE r.DORM = "${req.params.dorm}"
	;`
	const result = await pool.query(query);
	res.send(result)
})

module.exports = router;