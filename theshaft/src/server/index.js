// lmao
const express = require('express');
const app = express();
const os = require('os');
const bodyParser = require('body-parser')
var cors = require('cors');
app.use(cors())


var getDormInfo = require('./routes/getDormInfo');
var filterDormInfo = require('./routes/filter');
var postReview = require('./routes/postReview');
var getExploreInfo = require('./routes/getExploreInfo');
var getAmenities = require('./routes/getAmenities');
var getReviews = require('./routes/getReviews');
var getRelatedArticles = require('./routes/getRelatedArticles');
var getFloorPlans = require('./routes/getFloorPlans');
var getDormPhotos = require('./routes/getDormPhotos');
var getRelatedDorms = require('./routes/getRelatedDorms.js')
var getFloorPlanSVGs = require('./routes/getFloorPlanSVGs.js')
var getUniqueFloorNumbers = require('./routes/getUniqueFloorNumbers.js')

app.use(bodyParser.json())
app.use(express.static('dist'));

app.use('/api/getAmenities', (req, res) => getAmenities(req, res) );
app.use('/api/getDormInfo', (req, res) => getDormInfo(req, res) );
app.use('/api/getReviews', (req, res) => getReviews(req, res) );
app.use('/api/filterDorm', (req, res) => filterDormInfo(req, res));
app.use('/api/postReview', (req, res) => postReview(req, res));
app.use('/api/getExploreInfo', (req, res) => getExploreInfo(req,res));
app.use('/api/getRelatedArticles', (req, res) => getRelatedArticles(req,res));
app.use('/api/getFloorPlans', (req,res) => getFloorPlans(req,res));
app.use('/api/getDormPhotos', (req,res) => getDormPhotos(req,res));
app.use('/api/getRelatedDorms', (req, res) => getRelatedDorms(req, res))
<<<<<<< HEAD
app.use('/api/getLotteryNum', (req, res) => getLotteryNum(req, res))
=======
app.use('/api/getFloorPlanSVGs', (req, res) => getFloorPlanSVGs(req, res))
app.use('/api/getUniqueFloorNumbers', (req, res) => getUniqueFloorNumbers(req, res))
>>>>>>> 8087cf76803b48fd1bba1bf2dd3c05ca0800d5a4


var server = app.listen(8080, () => {
	console.log("Connected on Port 8080")
});

module.exports = server;
