/** Route that gets all information for explore page */
var express = require('express');
var router = express.Router();
var pool = require('../database');

router.get('/', async (req, res) => {
	let query = `SELECT DORM, DESCRIPTION, COLLEGE, THUMBNAIL_IMAGE, LATITUDE, LONGITUDE FROM dorm_static_info; `
	const result = await pool.query(query);
	res.send(result)
})

module.exports = router;