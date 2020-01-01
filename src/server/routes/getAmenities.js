/** Route that gets amenities for a specific dorm */
var express = require('express');
var router = express.Router();
var pool = require('../database');

router.get('/:dorm', async (req, res) => {

	let query = `SELECT P_BATHROOM, LAUNDRY, CARPET,
		F_KITCHEN, P_KITCHEN, LOUNGE, GYM, BIKE, COMPUTER, PRINT,
		AC, MUSIC FROM amenities
		WHERE DORM = "${req.params.dorm}";`
	
	const result = await pool.query(query);
	res.send(result[0])
})

module.exports = router;