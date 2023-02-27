var express = require('express');
var router = express.Router();
var pool = require('../database');

router.get('/:dorm', async (req, res) => {
	let query = `SELECT * FROM dorm_photos WHERE DORM = "${req.params.dorm}" ORDER BY IS_MAIN DESC;`
	const result = await pool.query(query);
	res.send(result)
})

module.exports = router;
