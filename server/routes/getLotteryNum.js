/** Route fetches a floor plan for a specific dorm and floor to be used for the whiteboard display */
var express = require('express');
var router = express.Router();
var pool = require('../database');

router.get('/:dorm/:floor', async (req, res) => {
  let table = "housing_data_2022"
	let query = `SELECT * FROM ${table} WHERE dorm="${req.params.dorm}" AND floor="${req.params.floor}";`
	const result = await pool.query(query);
	// console.log(query);
	res.send(result)
})

module.exports = router;