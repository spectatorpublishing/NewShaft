var express = require('express');
var router = express.Router();
var pool = require('../database');

router.post('/', (req,res) =>{

   const review = req.body
   var sql =  "INSERT INTO review_distinct (DORM,ROOM_NUM,YEAR,NUM_STARS,REVIEW_TXT) VALUES(?,?,?,?,?);";

   pool.query(
       sql,
       
       [
           review.DORM,
           review.ROOM_NUM,
           review.YEAR,
           review.NUM_STARS,
           review.REVIEW_TXT
       ],



   (err) =>{
       if(!err){
        res.send("Good");
       }

       else{
           console.log(err.message);
           res.send(err);
       }

       
   }

   )


});

                   
module.exports = router;