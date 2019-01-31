var fakedata = [
    {
        "dorm": "110",
        "adress":"601 W 110th St",
        "description": "Off-campus but not really",
        "college": "barnard",
        "thumbnail_image": "N/A",
        "suite": ["6"],
        "walkthrough": false,
        "single": true,
        "double": true,
        "triple": true,
        "pros": "",
        "cons": ""
    },

    {
        "dorm": "SIC",
        "adress":"619 W 113th St",
        "description": "Comedy House",
        "college": "columbia",
        "thumbnail_image": "N/A",
        "suite": ["5"],
        "walkthrough": false,
        "single": true,
        "double": true,
        "triple": false,
        "pros": "",
        "cons": ""
    },

    {
        "dorm": "McBain",
        "adress":"McBain Fake Address",
        "description": "On Campus",
        "college": "columbia",
        "thumbnail_image": "N/A",
        "suite": ["4","3"],
        "walkthrough": false,
        "single": true,
        "double": true,
        "triple": true,
        "pros": "",
        "cons": ""
    }

]

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var _ = require('underscore')

function filterDormInfo(data,request, callback){
    var result = data.filter(function (el) {
        if(request.college!=-1){
            return el.college==request.college;
        }
        return typeof el.college == 'string' 
    });

    result = result.filter(function (el) {
        console.log(!_.isEqual(_.difference(request.suite, el.suite),(request.suite))) //debug
        return (!_.isEqual(_.difference(request.suite, el.suite),(request.suite))||request.suite.length===0) && 
        ((!request.single || el.single == request.single) &&
        (!request.double || el.double == request.double) &&
        (!request.triple || el.triple == request.triple));

    })

    console.log(result)
    callback(result)
}

router.post('/', function(req, res, next) {
	

	console.log("filtering selection of",req.body)
	
	filterDormInfo(fakedata, req.body, (dormInfo) => {
		res.json(dormInfo)
    });
    

})

module.exports = router;