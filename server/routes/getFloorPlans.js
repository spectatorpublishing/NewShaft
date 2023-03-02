/** Route that fetches floor plans for specific dorm */
var express = require('express');
var router = express.Router();
var pool = require('../database');


router.get('/:dorm', async (req, res) => {
	let query = `SELECT * FROM floor_plans WHERE DORM = "${req.params.dorm}";`
	const result = await pool.query(query);
	res.send(result[0])
})

module.exports = router;