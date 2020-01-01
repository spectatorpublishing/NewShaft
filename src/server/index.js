/** Entrypoint for API that intializes all backend routes */

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
app.use(cors())

// Initialize backend routes
const getDormInfo = require('./routes/getDormInfo');
const filterDormInfo = require('./routes/filter');
const postReview = require('./routes/postReview');
const getExploreInfo = require('./routes/getExploreInfo');
const getAmenities = require('./routes/getAmenities');
const getReviews = require('./routes/getReviews');
const getRelatedArticles = require('./routes/getRelatedArticles');
const getFloorPlans = require('./routes/getFloorPlans');
const getDormPhotos = require('./routes/getDormPhotos');
const getRelatedDorms = require('./routes/getRelatedDorms.js');
const getLotteryNum = require('./routes/getLotteryNum.js');
const getUniqueFloorNumbers = require('./routes/getUniqueFloorNumbers.js');

app.use(bodyParser.json())
app.use(express.static('dist'));

// Implement backend routes
app.use('/api/getAmenities', (req, res) => getAmenities(req, res) );
app.use('/api/getDormInfo', (req, res) => getDormInfo(req, res) );
app.use('/api/getReviews', (req, res) => getReviews(req, res) );
app.use('/api/filterDorm', (req, res) => filterDormInfo(req, res));
app.use('/api/postReview', (req, res) => postReview(req, res));
app.use('/api/getExploreInfo', (req, res) => getExploreInfo(req,res));
app.use('/api/getRelatedArticles', (req, res) => getRelatedArticles(req,res));
app.use('/api/getFloorPlans', (req,res) => getFloorPlans(req,res));
app.use('/api/getDormPhotos', (req,res) => getDormPhotos(req,res));
app.use('/api/getRelatedDorms', (req, res) => getRelatedDorms(req, res));
app.use('/api/getLotteryNum', (req, res) => getLotteryNum(req, res));
app.use('/api/getUniqueFloorNumbers', (req, res) => getUniqueFloorNumbers(req, res));


const server = app.listen(8080, () => {
	console.log("Connected on Port 8080")
});

module.exports = server;
