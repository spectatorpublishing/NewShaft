/** Route fetches a floor plan for a specific dorm and floor to be used for the whiteboard display */
var express = require('express');
var router = express.Router();
var pool = require('../database');
var { toDatabaseDormName } = require('./lotteryDormNames');

router.get('/:dorm/:floor', async (req, res) => {
	const query = `SELECT * FROM housing_data_2025 WHERE dorm = ? AND floor = ?;`
	const result = await pool.query(query, [
		toDatabaseDormName(req.params.dorm),
		req.params.floor,
	]);
	// console.log(query);
	res.send(result)
})

module.exports = router;