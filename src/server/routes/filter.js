
var pool = require('../database');
var express = require("express");
var router = express.Router();



function filterDormInfo(con, request, callback) {




}

router.post("/", async function (req, res) {
  console.log("ENTER FILTER");

  let query = `SELECT d.DORM as DORM, d.DESCRIPTION as DESCRIPTION, d.COLLEGE as COLLEGE, 
  d.THUMBNAIL_IMAGE as THUMBNAIL_IMAGE, d.LATITUDE as LATITUDE, d.LONGITUDE as LONGITUDE, a.AC as AC, a.GYM as GYM,
  a.P_BATHROOM as BATHROOM, a.P_KITCHEN as P_KITCHEN, c.FRESHMAN as FRESHMAN, c.SOPHOMORE as SOPHOMORE, c.JUNIOR as JUNIOR, c.SENIOR as SENIOR, ifnull(s.TWO_SUITE, 0) as TWO_SUITE, ifnull(s.THREE_SUITE, 0) as THREE_SUITE, 
  ifnull(s.FOUR_SUITE, 0) as FOUR_SUITE, ifnull(s.FIVE_SUITE, 0) as FIVE_SUITE, ifnull(s.SIX_SUITE, 0) as SIX_SUITE,
  ifnull(s.SEVEN_SUITE, 0) as SEVEN_SUITE, ifnull(s.EIGHT_SUITE, 0) as EIGHT_SUITE, ifnull(s.NINE_SUITE, 0) as NINE_SUITE 
  FROM dorm_static_info as d JOIN amenities as a on a.DORM = d.DORM JOIN class_makeup as c ON c.DORM = d.DORM LEFT JOIN suites as s on s.DORM = d.DORM `

  const request = req.body;

  let firstKey = true
  let keys = Object.keys(request);

  // Prevent iteration through COLUMBIA and BARNARD
  for (i = 0; i < keys.length; i++) {
    if (typeof request[keys[i]] === "number" && request[keys[i]] === 1) {
      if (firstKey) {
        firstKey = false
        query += `WHERE ${keys[i]}=${request[keys[i]]}`
      } else {
        query += ` AND ${keys[i]}=${request[keys[i]]}`
      }
    }
    else if ((typeof request[keys[i]] === "string" && request[keys[i]].length > 0)) {
      if (firstKey) {
        firstKey = false
        query += `WHERE d.${keys[i]} LIKE '${request[keys[i]]}%'`
      } else {
        query += ` AND d.${keys[i]} LIKE '${request[keys[i]]}%'`
      }
    }
  }
  query += `;`

  const result = await pool.query(query)

  res.send(result);


});

module.exports = router;
