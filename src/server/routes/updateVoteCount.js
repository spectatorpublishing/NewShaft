var express = require('express');
var router = express.Router();
var pool = require('../database');

router.get('/:dorm/:roomNum/:up/:down', async (req, res) => {
    var query = `UPDATE review_distinct
                      SET thumbs_up = thumbs_up + (${Number(req.params.up)}),
                          thumbs_down = thumbs_down + (${Number(req.params.down)})
                      WHERE dorm = "${req.params.dorm}" and room_num = "${req.params.roomNum}";`
    console.log(query)
    const result = await pool.query(query);
	  res.send(result)
})

module.exports = router;
