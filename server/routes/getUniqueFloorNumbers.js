
var express = require('express');
var router = express.Router();
var pool = require('../database')
var { toDatabaseDormName } = require('./lotteryDormNames');

router.get('/:dorm', async (req, res) => {
	const query = `SELECT DISTINCT floor
	FROM housing_data_2025 WHERE dorm = ?;`
	const result = await pool.query(query, [toDatabaseDormName(req.params.dorm)]);
	// console.log(query);
	res.send(result)
})

module.exports = router;