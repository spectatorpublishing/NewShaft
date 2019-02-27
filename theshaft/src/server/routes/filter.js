var fakedata = {
  Carman: {
    dorm: "Schapiro", // name of dorm for display
    address: "619 W 113th St",
    description: "Comedy House",
    columbia: true,
    barnard: false,
    thumbnail_image: "https://housing.columbia.edu/files/housing/Carman.jpg",
    suite: ["5"],
    walkthrough: false,
    single: true,
    double: true,
    triple: false,
    two_suite: false,
    three_suite: false,
    four_suite: false,
    five_suite: false,
    six_suite: false,
    seven_suite: false,
    eight_suite: false,
    nine_suite: false,
    freshmen: false,
    sophomores: true,
    juniors: true,
    seniors: true,
    pros: ["pro1", "pro2", "pro3"],
    cons: ["con1", "con2", "con3"],
    latitude: 40.7128,
    longitude: -74.006,
    ac: false,
    accessibility: false,
    gym: false,
    bathroom: false
  },

  Mcbain: {
    dorm: "McBain",
    address: "McBain Fake Address",
    description: "On Campus",
    columbia: true,
    barnard: false,
    thumbnail_image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    suite: ["4", "3"],
    walkthrough: false,
    single: true,
    double: true,
    triple: true,
    two_suite: false,
    three_suite: false,
    four_suite: false,
    five_suite: false,
    six_suite: false,
    seven_suite: false,
    eight_suite: false,
    nine_suite: false,
    freshmen: false,
    sophomores: true,
    juniors: false,
    seniors: false,
    pros: ["pro1", "pro2", "pro3"],
    cons: ["con1", "con2", "con3"],
    latitude: 40.7127,
    longitude: -74.005,
    ac: false,
    accessibility: false,
    gym: false,
    bathroom: false
  },
  Test: {
    dorm: "110",
    address: "601 W 110th St",
    description: "Off-campus but not really",
    columbia: false,
    barnard: true,
    thumbnail_image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    suite: ["6"],
    walkthrough: false,
    single: true,
    double: false,
    triple: false,
    two_suite: false,
    three_suite: false,
    four_suite: false,
    five_suite: false,
    six_suite: false,
    seven_suite: false,
    eight_suite: false,
    nine_suite: false,
    freshmen: true,
    sophomores: true,
    juniors: true,
    seniors: true,
    pros: ["pro1", "pro2", "pro3"],
    cons: "",
    latitude: 40.7129,
    longitude: -74.004,
    ac: false,
    accessibility: false,
    gym: false,
    bathroom: false
  },
  EC: {
    dorm: "East Campus",
    address: "601 W 110th St",
    description: "Off-campus but not really",
    columbia: true,
    barnard: false,
    thumbnail_image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    suite: ["6"],
    walkthrough: false,
    single: true,
    double: false,
    triple: false,
    two_suite: false,
    three_suite: false,
    four_suite: true,
    five_suite: true,
    six_suite: true,
    seven_suite: false,
    eight_suite: false,
    nine_suite: false,
    freshmen: false,
    sophomores: false,
    juniors: true,
    seniors: true,
    pros: ["pro1", "pro2", "pro3"],
    cons: "",
    latitude: 40.7135,
    longitude: -74.004,
    ac: false,
    accessibility: false,
    gym: false,
    bathroom: false
  },
  DC: {
    dorm: "East Campus",
    address: "601 W 110th St",
    description: "Off-campus but not really",
    columbia: true,
    barnard: false,
    thumbnail_image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    suite: ["6"],
    walkthrough: false,
    single: true,
    double: false,
    triple: false,
    two_suite: false,
    three_suite: false,
    four_suite: false,
    five_suite: false,
    six_suite: false,
    seven_suite: false,
    eight_suite: false,
    nine_suite: false,
    freshmen: false,
    sophomores: false,
    juniors: true,
    seniors: true,
    pros: ["pro1", "pro2", "pro3"],
    cons: "",
    latitude: 40.7135,
    longitude: -74.004,
    ac: false,
    accessibility: false,
    gym: false,
    bathroom: false
  },
  FC: {
    dorm: "East Campus",
    address: "601 W 110th St",
    description: "Off-campus but not really",
    columbia: "true",
    barnard: "false",
    thumbnail_image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    suite: ["6"],
    walkthrough: false,
    single: true,
    double: false,
    triple: false,
    two_suite: false,
    three_suite: false,
    four_suite: false,
    five_suite: false,
    six_suite: false,
    seven_suite: false,
    eight_suite: false,
    nine_suite: false,
    freshmen: false,
    sophomores: false,
    juniors: true,
    seniors: true,
    pros: ["pro1", "pro2", "pro3"],
    cons: "",
    latitude: 40.7135,
    longitude: -74.004,
    ac: false,
    accessibility: false,
    gym: false,
    bathroom: false
  }
};

var express = require("express");
var router = express.Router();
var mysql = require("mysql");

const filterItems = [
  "columbia",
  "barnard",
  "single",
  "double",
  "triple",
  "two_suite",
  "three_suite",
  "four_suite",
  "five_suite",
  "six_suite",
  "seven_suite",
  "eight_suite",
  "nine_suite",
  "freshmen",
  "sophomores",
  "juniors",
  "seniors",
  "ac",
  "accessibility",
  "gym",
  "bathroom"
]

function filterDormInfo(data, request, callback) {
  console.log("request received", request)
  let result = Object.values(data)

  // Reduce through each of the different
  // attributes we are filtering on, and
  // filter each. null indicates a don't care
  // condition. 
  const reducer = (newResult, filterItem) => (
    newResult.filter(el => {
      if (request[filterItem] !== null) {
        return el[filterItem] === request[filterItem];
      }
      return true;
    })
  )

  const filteredResult = filterItems.reduce(reducer, result)

  callback(filteredResult);
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
