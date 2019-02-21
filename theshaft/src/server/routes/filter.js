var fakedata = {
  Carman: {
    dorm: "Carman", // name of dorm for display
    id: "Carman", // link to dorm page
    address: "619 W 113th St",
    description: "Comedy House",
    college: "columbia",
    thumbnail_image: "https://housing.columbia.edu/files/housing/Carman.jpg",
    suite: ["5"],
    walkthrough: false,
    single: true,
    double: true,
    triple: false,
    make_up: ["sophomores", "juniors", "seniors"],
    pros: ["pro1", "pro2", "pro3"],
    cons: ["con1", "con2", "con3"],
    latitude: 40.7128,
    longitude: -74.006
  },

  Mcbain: {
    dorm: "McBain",
    id: "McBain",
    address: "McBain Fake Address",
    description: "On Campus",
    college: "columbia",
    thumbnail_image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    suite: ["4", "3"],
    walkthrough: false,
    single: true,
    double: true,
    triple: true,
    make_up: ["sophomores"],
    pros: ["pro1", "pro2", "pro3"],
    cons: ["con1", "con2", "con3"],
    latitude: 40.7127,
    longitude: -74.005
  },
  Test: {
    dorm: "110",
    id: "110",
    address: "601 W 110th St",
    description: "Off-campus but not really",
    college: "barnard",
    thumbnail_image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    suite: ["6"],
    walkthrough: false,
    single: true,
    double: false,
    triple: false,
    make_up: ["first-years", "sophomores", "juniors", "seniors"],
    pros: ["pro1", "pro2", "pro3"],
    cons: "",
    latitude: 40.7129,
    longitude: -74.004
  }
};

var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var _ = require("underscore");

function filterDormInfo(data, request, callback) {
  console.log("request received", request)
  //console.log(_.values(data))
  result = _.values(data)


  var result = result.filter(function(el) {
    if (request.college != -1) {
      return el.college == request.college;
    }
    return typeof el.college == "string";
  });

  result = result.filter(function(el) {
    // console.log(!_.isEqual(_.difference(request.suite, el.suite),(request.suite))) //debug
    // If request make_up is empty, defaults to all
    // Same thing with suite
    return (
      (!_.isEqual(_.difference(request.make_up, el.make_up), request.make_up) ||
        request.make_up.length === 0) &&
      (!_.isEqual(_.difference(request.suite, el.suite), request.suite) ||
        request.suite.length === 0) &&
      ((!request.single || el.single == request.single) &&
        (!request.double || el.double == request.double) &&
        (!request.triple || el.triple == request.triple))
    );
  });

  callback(result);
}

router.post("/", function(req, res, next) {
  // console.log("filtering selection of",req.body)

  filterDormInfo(fakedata, req.body, dormInfo => {
    console.log("server side dorminfo", dormInfo);
    // JSON.stringify(dormInfo[0])
    res.json(dormInfo);
  });
});

module.exports = router;
