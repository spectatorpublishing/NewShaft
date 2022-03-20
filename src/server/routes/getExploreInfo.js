/** Route that gets all information for explore page */
var express = require('express');
var router = express.Router();
var pool = require('../database');

router.get('/', async (req, res) => {
	let query = `SELECT D.DORM, D.DESCRIPTION, D.COLLEGE, D.LATITUDE, D.LONGITUDE, D.SINGLE_, D.DOUBLE_, D.TRIPLE_, D.CLASS_MAKEUP, D.SUITE_, DP.IMAGE_LINK FROM dorm_static_info D, dorm_photos DP WHERE D.DORM = DP.DORM AND IS_MAIN = 1 ORDER BY D.DORM ASC;`
	const result = await pool.query(query);
	res.send(result)
})

module.exports = router;