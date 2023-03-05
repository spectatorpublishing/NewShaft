/** Route that gets amenities for a specific dorm */
var express = require('express');
var router = express.Router();
var pool = require('../database');

router.get('/:dorm', async (req, res) => {

	let query = `SELECT BATHROOM, BATHROOM_DETAILS, LAUNDRY,FLOORING, FLOORING_DETAILS,
		KITCHEN, KITCHEN_DETAILS, LOUNGE, LOUNGE_DETAILS, GYM, BIKE, COMPUTER, PRINT,
		AC, MUSIC, A_ENTRANCE FROM new_amenities
		WHERE DORM = "${req.params.dorm}";`
	
	const result = await pool.query(query);
	res.send(result[0])
})

module.exports = router;