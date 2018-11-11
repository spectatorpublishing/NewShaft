var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.json({"Message": "Spectator is great"});
});

module.exports = router;
