"SELECT FLOOR FROM dorms.ShaftLive WHERE DORM = 'East Campus"

var express = require('express');
var router = express.Router();
var pool = require('../database')

router.get('/:dorm', async (req, res) => {
	let query = `SELECT DISTINCT FLOOR
	FROM ShaftLive WHERE DORM = "${req.params.dorm}";`
	const result = await pool.query(query);
	res.send(result)
})

module.exports = router;