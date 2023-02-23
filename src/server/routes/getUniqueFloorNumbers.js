
var express = require('express');
var router = express.Router();
var pool = require('../database')

router.get('/:dorm', async (req, res) => {
	var tableQ = `NLotteryPredicter2021`
	var dormQ = req.params.dorm
	if (req.params.dorm == "Carlton Arms") {
		dormQ = `Carlton`
	}

	let query = `SELECT DISTINCT FLOOR FROM ` + tableQ + ` WHERE DORM = "` + dormQ + `";`
	const result = await pool.query(query);
	console.log(query);
	res.send(result)
})

module.exports = router;