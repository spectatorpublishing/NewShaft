var express = require('express');
var router = express.Router();
var pool = require('../database');
var pool2 = require('../database');
var strNum = {
    'ONE': 1,
    'TWO': 2,
    'THREE': 3,
    'FOUR': 4,
    'FIVR': 5,
    'SIX': 6,
    'SEVEN': 7,
    'EIGHT': 8,
    'NINE': 9,
};

var strNumArr = [ 'ONE','TWO','THREE','FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE']
router.post('/', async (req, res) => {
    var query = `SELECT DORM, DESCRIPTION, COLLEGE, THUMBNAIL_IMAGE, LATITUDE, LONGITUDE FROM dorm_static_info `
    var baseQ =``
    var roomQ = ``
    var collegeQ = ``
    var searchQ = ``

    
    let filters = req.body
    var trueFilters = []

    console.log("filters", filters)

    for(var prop in filters) {
        console.log(prop)
        if(filters[prop]) {
            trueFilters.push(prop)
        }
    }


    //build suite 
    var starterQ = ``
    var selectText = ` Select DORM from suites where `
    //if the incremented number is 1-3
    if (filters[`ONE_SUITE`] || filters[`TWO_SUITE`] || filters[`THREE_SUITE`]  ){
        var starterQS=``;
        if (filters[`ONE_SUITE`] && filters[`SINGLE_`]){
            //...ONE_SUITE
            starterQS =`  
                            Select n.DORM from 
                            dorm_static_info n inner join suites  on  n.dorm = suites.dorm where ONE_SUITE = 1 `;
        }
        else if (filters[`TWO_SUITE`] && filters[`DOUBLE_`]){
             //...TWO_SUITE
             starterQS =`  
                            Select n.DORM from 
                            dorm_static_info n inner join suites  on  n.dorm = suites.dorm where TWO_SUITE = 1 `;
        }
        else if (filters[`THREE_SUITE`] && filters[`TRIPLE_`]){
             //...THREE_SUITE
             starterQS =`  
                            Select n.DORM from 
                            dorm_static_info n inner join suites  on  n.dorm = suites.dorm where THREE_SUITE = 1 `;
        }
        starterQ += starterQS
        if (!filters["SUITE_"]){
            // add UNION here
            starterQ += ` UNION `
            var starterQNonS=``;
            if ( filters[`ONE_SUITE`] && filters[`SINGLE_`] ){
                //...SINGLE_ = 1
                starterQNonS = ` Select dorm from dorm_static_info where SINGLE_ = 1 and SUITE_ = 0 `
            }
            else if ( filters[`TWO_SUITE`] && filters[`DOUBLE_`] ){
                //...DOUBLE_ =1
                starterQNonS = ` Select dorm from dorm_static_info where DOUBLE_ = 1 and SUITE_ = 0 `
            }
            else if ( filters[`THREE_SUITE`] && filters[`TRIPLE_`] ){
                //...TRIPLE_ =1
                starterQNonS = ` Select dorm from dorm_static_info where TRIPLE_ = 1 and SUITE_ = 0 `
            }
            starterQ += starterQNonS
        }
    }
    else{
        //select from suits 4-9'
        //select dorm from dorm_static_info where ___SUIT_ =1
        var starterQS2 = selectText;
        for(var i = 3; i < strNumArr.length; i += 1) {
            console.log (strNumArr[i]+`_SUITE`)
            if (filters[strNumArr[i]+`_SUITE`]){
                starterQS2 += strNumArr[i]+`_SUITE = 1 ` 
            }
        } 
        starterQ+=starterQS2

    } 
    starterQ+= `;`

    if (starterQS2 != selectText){
        //if it's not 0
        
        console.log("starterQ: " , starterQ)
        //make query call to get the values 
        const sDorms = await pool.query(starterQ);
        // console.log("sDorms: " , sDorms, sDorms[0], sDorms[0].DORM )

        //loop to fit values into a list

        baseQ += `( `
        if (sDorms[0]!=undefined && sDorms[0]!=null){
            var sClause = `("` + sDorms[0].DORM + `"`
            for(var i = 1; i < sDorms.length; i += 1) {
                sClause += ' , "' + sDorms[i].DORM+ `" `
            }
            sClause += `)`
            baseQ = `dorm in ` + sClause 
        }
        else{
            baseQ =``;
        }
        console.log("baseQ: " , baseQ)

    }

    //build general room-type (might retread, but because we're using ANDs only, it should be fine)

    if ( filters[`SINGLE_`] ){
        roomQ += ` SINGLE_ = 1 AND `
    }
    if ( filters[`DOUBLE_`] ){
        roomQ += ` DOUBLE_ = 1 AND `
    }
    if ( filters[`TRIPLE_`] ){
        roomQ += ` TRIPLE_ = 1 `
    }
    if(roomQ.endsWith("AND ")) roomQ = roomQ.slice(0, -4)




    //build for colleges
    if((!filters.COLUMBIA && filters.BARNARD) || (filters.COLUMBIA && !filters.BARNARD)) {
        if(filters.COLUMBIA) {
            collegeQ += `college="COLUMBIA" `
        }
        if(filters.BARNARD) {
            collegeQ += `college="BARNARD" `
        }
    }


    //build search query
    if(filters.DORM !== '') {
        searchQ = `DORM LIKE '%` + filters.DORM + `%' `
    }

    // put the final Query together
    if(baseQ !== '' || roomQ !== `` || collegeQ !== '' ||  searchQ !== '') {
        query += `WHERE `
        if(baseQ !== '') query += baseQ + `AND `
        if(roomQ !== '') query += roomQ + `AND `
        if(collegeQ !== '') query += collegeQ + `AND `
        if(searchQ !== '') query += searchQ + `AND `
    }
    while(query.endsWith("AND ") || query.endsWith("AND")) query = query.slice(0, -4)

    query += ";"
    console.log(query)

	const result = await pool.query(query);
	res.send(result)
})

module.exports = router;
