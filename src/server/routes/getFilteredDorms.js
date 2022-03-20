var express = require('express');
var router = express.Router();
var pool = require('../database');

router.post('/', async (req, res) => {
    var query = `SELECT D.DORM, D.DESCRIPTION, D.COLLEGE, D.LATITUDE, D.LONGITUDE, D.SINGLE_, D.DOUBLE_, D.TRIPLE_, D.CLASS_MAKEUP, D.SUITE_, DP.IMAGE_LINK FROM dorm_static_info D, dorm_photos DP WHERE (D.DORM = DP.DORM AND IS_MAIN = 1`
    var collegeQ = ``
    var groupQ = ``
    var roomQ = ``
    var resQ = ``
    var searchQ = ``
    
    let filters = req.body
    var trueFilters = []

    console.log("filters: " + filters)

    for(var prop in filters) {
        if(filters[prop]) {
            trueFilters.push(prop)
        }
    }

    //build search query
    if(filters.DORM !== '') {
        searchQ = `D.DORM LIKE '%` + filters.DORM + `%' `
    }

    //build for colleges
    if((!filters.COLUMBIA && filters.BARNARD) || (filters.COLUMBIA && !filters.BARNARD)) {
        if(filters.COLUMBIA) {
            collegeQ += `D.COLLEGE="COLUMBIA" `
        }
        if(filters.BARNARD) {
            collegeQ += `D.COLLEGE="BARNARD" `
        }
    }

    //build for group num
    for(var i = 0; i < trueFilters.length; i += 1) {
        if(trueFilters[i].endsWith("_SUITE")) {
            let gQ = `select dorm from suites where ` + trueFilters[i] + ` = 1;`
            const validDorms = await pool.query(gQ);
            var inClause = `("` + validDorms[0].dorm + `"`
            for(var i = 1; i < validDorms.length; i += 1) {
                inClause += ' , "' + validDorms[i].dorm + `" `
            }
            inClause += `)`
            groupQ = `D.DORM in ` + inClause
            break;
        }
    }

    //build for room type
    if(filters.SINGLE_ || filters.DOUBLE_ || filters.TRIPLE_) {
        roomQ += ``
        if (filters.SINGLE_) roomQ += `D.SINGLE_ = 1 AND `
        if (filters.DOUBLE_) roomQ += `D.DOUBLE_ = 1 AND `
        if (filters.TRIPLE_) roomQ += `D.TRIPLE_ = 1 AND `
    }

    //build for corridor/suite style
    if(filters.NOTSUITE_ && !filters.SUITE_) {
        roomQ += `D.SUITE_ = 0 AND `
    } else if (!filters.NOTSUITE_ && filters.SUITE_){
        roomQ += `D.SUITE_ = 1 AND `
    } 

    if(roomQ.endsWith("AND ")) roomQ = roomQ.slice(0, -4)


    //build for typical resident
    if(filters.FRESHMAN || filters.SOPHOMORE || filters.JUNIOR || filters.SENIOR) {
        resQ = `(`
        if (filters.FRESHMAN) resQ += `D.CLASS_MAKEUP LIKE '%first-years%' AND `
        if (filters.SOPHOMORE) resQ += `D.CLASS_MAKEUP LIKE '%sophomores%' AND `
        if (filters.JUNIOR) resQ += `D.CLASS_MAKEUP LIKE '%juniors%' AND `
        if (filters.SENIOR) resQ += `D.CLASS_MAKEUP LIKE '%seniors%' AND `
        if(resQ.endsWith("AND ")) resQ = resQ.slice(0, -4)
        resQ += `)`
    }


    if(roomQ !== `` || collegeQ !== '' || groupQ !== '' || resQ !== '' || searchQ !== '') {
        query += ` AND `
        if(roomQ !== '') query += roomQ + `AND `
        if(collegeQ !== '') query += collegeQ + `AND `
        if(groupQ !== '') query += groupQ + `AND `
        if(resQ !== '') query += resQ + `AND `
        if(searchQ !== '') query += searchQ + `AND `
    }

    while(query.endsWith("AND ") || query.endsWith("AND")) query = query.slice(0, -4)

    query += ") ORDER BY D.DORM ASC;"
    console.log(query)

	const result = await pool.query(query);
	res.send(result)
})

module.exports = router;
