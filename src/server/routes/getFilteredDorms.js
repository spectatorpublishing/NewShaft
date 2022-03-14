var express = require('express');
var router = express.Router();
var pool = require('../database');

router.post('/', async (req, res) => {
    var query = `SELECT DORM, DESCRIPTION, COLLEGE, THUMBNAIL_IMAGE, LATITUDE, LONGITUDE, SINGLE_, DOUBLE_, TRIPLE_, CLASS_MAKEUP, SUITE_ FROM dorm_static_info `
    var collegeQ = ``
    var groupQ = ``
    var roomQ = ``
    var searchQ = ``
    
    let filters = req.body
    var trueFilters = []

    console.log(filters)

    for(var prop in filters) {
        if(filters[prop]) {
            trueFilters.push(prop)
        }
    }

    //build search query
    if(filters.DORM !== '') {
        searchQ = `DORM LIKE '%` + filters.DORM + `%' `
    }

    //build for colleges
    if((!filters.COLUMBIA && filters.BARNARD) || (filters.COLUMBIA && !filters.BARNARD)) {
        if(filters.COLUMBIA) {
            collegeQ += `college="COLUMBIA" `
        }
        if(filters.BARNARD) {
            collegeQ += `college="BARNARD" `
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
            groupQ = `dorm in ` + inClause
            break;
        }
    }

    //build for room type
    if(filters.SUITE_ || filters.SINGLE_ || filters.DOUBLE_ || filters.TRIPLE_) {
        roomQ += `(`
        for(var i = 0; i < trueFilters.length; i += 1) {
            if(trueFilters[i].endsWith('_')) {
                roomQ += trueFilters[i] + ` = 1 AND `
            }
        }
        if(roomQ.endsWith("AND ")) roomQ = roomQ.slice(0, -4)
        roomQ += `)`
    }


    if(roomQ !== `` || collegeQ !== '' || groupQ !== '' || searchQ !== '') {
        query += `WHERE `
        if(roomQ !== '') query += roomQ + `AND `
        if(collegeQ !== '') query += collegeQ + `AND `
        if(groupQ !== '') query += groupQ + `AND `
        if(searchQ !== '') query += searchQ + `AND `
    }

    while(query.endsWith("AND ") || query.endsWith("AND")) query = query.slice(0, -4)

    query += ";"
    console.log(query)

	const result = await pool.query(query);
	res.send(result)
})

module.exports = router;
