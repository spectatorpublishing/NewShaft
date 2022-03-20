/*
 * Route fetches # of likely, similar, unlikely rooms by residence hall
 * based on the input lottery number.
 */

var express = require('express');
var router = express.Router();
var pool = require('../database');

router.get('/:num', async (req, res) => {
	let table = "NLotteryPredicter2021"
	let margin = 50
	let lotteryNum = parseInt(req.params.num)
	let likelyCutoff = lotteryNum - margin
	let unlikelyCutoff = lotteryNum + margin

	let query = `select dorm_count.DORM, dorm_likely.LIKELY, dorm_similar.SIM, dorm_unlikely.UNLIKELY, dorm_count.TOTAL
	from
		(select DORM, count(ROOM) as TOTAL from ${table} np group by np.DORM) dorm_count,
		(select DORM, SUM(np.NEW_NUM < ${likelyCutoff}) as LIKELY from ${table} np group by np.DORM) dorm_likely,
		(select DORM, SUM(np.NEW_NUM >= ${likelyCutoff} and np.NEW_NUM <= ${unlikelyCutoff}) as SIM from ${table} np group by np.DORM) dorm_similar,
		(select DORM, SUM(np.NEW_NUM > ${unlikelyCutoff}) as UNLIKELY from ${table} np group by np.DORM) dorm_unlikely
	WHERE dorm_count.DORM = dorm_likely.DORM and dorm_likely.DORM = dorm_similar.DORM and dorm_similar.DORM = dorm_unlikely.DORM`

	const result = await pool.query(query);
	res.send(result)
})

module.exports = router;
