var express = require('express');
var router = express.Router();
var pool = require('../database');


router.post('/', async (req, res) => {
    var query = `SELECT DORM, DESCRIPTION, COLLEGE, THUMBNAIL_IMAGE, LATITUDE, LONGITUDE FROM dorm_static_info `
    var groupSize =``       //group size toggle
    var suiteQ=``           //suite checkbox
    var roomQ = ``          //single, double, triple checkboxes 
    var collegeQ = ``       //Columbia and Barnard checkboxes
    var searchQ = ``        //search box query

    let filters = req.body
    var trueFilters = []

    for(var prop in filters) {
        // console.log(prop)
        if(filters[prop]) {
            trueFilters.push(prop)
        }
    }

    //build based on group size
    var starterQ = ``
    var selectTextPart1 = ` SELECT DORM from group_size_options where ` //for use on line [] to detect out-of-range group values
    var selectTextPart2 = ``; //the column from group_size_options to use as a query condition
    var selectTextPart3 = ` = 1;`

    for(var i=0; i< trueFilters.length; i+=1){
        if ( trueFilters[i].startsWith("GROUP_SIZE_") ){
            selectTextPart2 += trueFilters[i]
            break //unneccessary because there is only one number, but just in case...
        }
    }
    starterQ = selectTextPart1 + selectTextPart2 + selectTextPart3 
    // console.log( "starterQ: ",  starterQ ) //to test the query

    if (selectTextPart2 != ``){
        //if groupsize is not 0 or out of range (for some reason)

        const sDorms = await pool.query(starterQ);
        // console.log("sDorms: ", sDorms)  //to test what the printed dorm objects are

        //loop to fit values into a list
        groupSize += `( `
        if (sDorms[0]!=undefined && sDorms[0]!=null){
            var sClause = `("` + sDorms[0].DORM + `"`
            for(var i = 1; i < sDorms.length; i += 1) {
                sClause += ' , "' + sDorms[i].DORM+ `" `
            }
            sClause += `) `
            groupSize = `dorm in ` + sClause 
        }
        else{
            groupSize =``;
        }
        // console.log("groupSize: ", groupSize)  //to test print groupSize values
    }

    //build suites only
    if ( filters[`SUITE_`] ){
        suiteQ += ` SUITE_ = 1 `
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
    if(groupSize !== '' || roomQ !== `` || collegeQ !== '' ||  searchQ !== '') {
        query += `WHERE `
        if(groupSize !== '') query += groupSize + `AND `
        if(suiteQ !== '') query += suiteQ + `AND `
        if(roomQ !== '') query += roomQ + `AND `
        if(collegeQ !== '') query += collegeQ + `AND `
        if(searchQ !== '') query += searchQ + `AND `
    }
    while(query.endsWith("AND ") || query.endsWith("AND")) query = query.slice(0, -4)

    query += ";"
    // console.log(query)   //print the final query

	const result = await pool.query(query);
	res.send(result)
})

module.exports = router;
