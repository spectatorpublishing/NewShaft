const { response } = require('express');
var express = require('express');
var router = express.Router();
var pool = require('../database');

router.post('/', (req,res) =>{

   const review = req.body
   var sql =  "INSERT INTO reviews (a,b,c,d) VALUES(?,?,?,?);";

   pool.query(
       sql,
       
       [
           review.a,
           review.b,
           review.c,
           review.d
       ],



   (err) =>{
       if(!err){
        res.send(rows);
       }

       else{
           console.log(err.message);
           res.send(err);
       }

       
   }

   )


});

                   
module.exports = router;