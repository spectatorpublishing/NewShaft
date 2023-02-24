
var express = require('express');
var router = express.Router();
var pool = require('../database')

router.get('/:dorm', async (req, res) => {
	let query = `SELECT DISTINCT floor
	FROM housing_data_2022 WHERE dorm = "${req.params.dorm}";`
	const result = await pool.query(query);
	// console.log(query);
	res.send(result)
})

module.exports = router;