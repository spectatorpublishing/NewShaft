var express = require('express');
var router = express.Router();
var pool = require('../database');

//update review set thumbs_up = thumbs_up + 1 where dorm = "47 Claremont" and room_num = "51C"; select thumbs_up from review where dorm = "47 Claremont" and room_num = "51C";



router.get('/:dorm/:roomNum/:type/:action', async (req, res) => {
    if(req.params.type == "up" && req.params.action == "add") {
        var query = `UPDATE review SET thumbs_up = thumbs_up + 1 
        WHERE dorm = "${req.params.dorm}" and room_num = "${req.params.roomNum}";`
    } else if(req.params.type == "up" && req.params.action == "subtract") {
        var query = `UPDATE review SET thumbs_up = thumbs_up - 1 
        WHERE dorm = "${req.params.dorm}" and room_num = "${req.params.roomNum}";`
    } else if(req.params.type == "down" && req.params.action == "add") {
        var query = `UPDATE review SET thumbs_down = thumbs_down + 1 
        WHERE dorm = "${req.params.dorm}" and room_num = "${req.params.roomNum}";`
    } else if(req.params.type == "down" && req.params.action == "subtract") {
        var query = `UPDATE review SET thumbs_down = thumbs_down - 1 
        WHERE dorm = "${req.params.dorm}" and room_num = "${req.params.roomNum}";`
    }
    
    await pool.query(query);

    var query = `SELECT thumbs_${req.params.type} FROM review WHERE dorm = "${req.params.dorm}" and room_num = "${req.params.roomNum}";`

    const result = await pool.query(query);
    
	res.send(result)
})

module.exports = router;