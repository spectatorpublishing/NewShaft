var express = require('express');
var router = express.Router();
var pool = require('../database');

router.get('/:dorm', async (req, res) => {
	let query = `SELECT MAIN_IMAGE, OTHER1, OTHER2, OTHER3 FROM dorm_explore_photos 
		WHERE DORM = "${req.params.dorm}";`
	const result = await pool.query(query);
	res.send(result[0])
})

module.exports = router;