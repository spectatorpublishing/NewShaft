/*
 * Route fetches # of likely, similar, unlikely rooms by residence hall
 * based on the input lottery number.
 */

var express = require('express');
var router = express.Router();
var pool = require('../database');
var { RANGE } = require('../../client/src/util/LotteryPredictor')

router.get('/:num', async (req, res) => {
	let table = "housing_data_2024"
	let lotteryNum = parseInt(req.params.num)
	let likelyCutoff = lotteryNum - RANGE
	let unlikelyCutoff = lotteryNum + RANGE

	let query = `select dorm_count.DORM, dorm_likely.LIKELY, dorm_similar.SIM, dorm_unlikely.UNLIKELY, dorm_count.TOTAL
	from
		(select dorm, count(room) as TOTAL from ${table} np group by np.dorm) dorm_count,
		(select dorm, SUM(np.lottery_number < ${likelyCutoff}) as LIKELY from ${table} np group by np.dorm) dorm_likely,
		(select dorm, SUM(np.lottery_number >= ${likelyCutoff} and np.lottery_number <= ${unlikelyCutoff}) as SIM from ${table} np group by np.dorm) dorm_similar,
		(select dorm, SUM(np.lottery_number > ${unlikelyCutoff}) as UNLIKELY from ${table} np group by np.dorm) dorm_unlikely
	WHERE dorm_count.dorm = dorm_likely.dorm and dorm_likely.dorm = dorm_similar.dorm and dorm_similar.dorm = dorm_unlikely.dorm`
	// console.log(query);
	const result = await pool.query(query);
	res.send(result)
})

module.exports = router;
