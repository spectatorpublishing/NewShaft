/** Route that gets amenities for a specific dorm */
var express = require('express');
var router = express.Router();
var pool = require('../database');

router.get('/:dorm', async (req, res) => {

	let query = `SELECT P_BATHROOM, P_BATHROOM_DETAILS, LAUNDRY, LAUNDRY_DETAILS, CARPET, CARPET_DETAILS,
		F_KITCHEN, F_KITCHEN_DETAILS, P_KITCHEN, P_KITCHEN_DETAILS, LOUNGE, LOUNGE_DETAILS, GYM, 
		GYM_DETAILS, BIKE, BIKE_DETAILS, COMPUTER, COMPUTER_DETAILS, PRINT, PRINT_DETAILS,
		AC, AC_DETAILS, MUSIC, MUSIC_DETAILS FROM amenities
		WHERE DORM = "${req.params.dorm}";`
	
	const result = await pool.query(query);
	res.send(result[0])
})

module.exports = router;