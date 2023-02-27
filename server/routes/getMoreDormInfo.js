var express = require('express');
var router = express.Router();
var pool = require('../database');

router.get('/:dorm', async (req, res) => {

      let query = `SELECT dorm_static_info.DORM, dorm_static_info.WALKTHROUGH, dorm_static_info.SUITE,
                          dorm_static_info.SINGLE_, dorm_static_info.DOUBLE_, dorm_static_info.TRIPLE_,
                          dorm_static_info.CLASS_MAKEUP, dorm_static_info.LOTTERY_NUMS, amenities.F_KITCHEN,
                          amenities.P_KITCHEN, amenities.P_BATHROOM
                   FROM dorm_static_info RIGHT JOIN amenities
                   ON dorm_static_info.DORM = amenities.DORM
                   WHERE amenities.DORM = "${req.params.dorm}";`

    	const result = await pool.query(query);
    	res.send(result[0])
})

module.exports = router;
