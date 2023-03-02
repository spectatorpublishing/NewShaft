var express = require('express');
var router = express.Router();
var pool = require('../database');

router.get('/:dorm', async (req, res) => {

	let query = `SELECT * FROM quick_review WHERE DORM = "${req.params.dorm}";`

	const result = await pool.query(query);
	res.send(result[0])
})

module.exports = router;
