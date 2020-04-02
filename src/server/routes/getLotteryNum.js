/** Route fetches a floor plan for a specific dorm and floor to be used for the whiteboard display */
var express = require('express');
var router = express.Router();
var pool = require('../database');

router.get('/:dorm/:floor', async (req, res) => {
	let query = `SELECT * FROM LotteryPredicter WHERE DORM="${req.params.dorm}" AND FLOOR="${req.params.floor}";`
	const result = await pool.query(query);
	res.send(result)
})

module.exports = router;