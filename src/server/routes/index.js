/** Entrypoint for API that intializes all backend routes */

// Initialize backend routes
const getDormInfo = require('./getDormInfo');
const filterDormInfo = require('./filter');
const getExploreInfo = require('./getExploreInfo');
const getAmenities = require('./getAmenities');
const getReviews = require('./getReviews');
const getRelatedArticles = require('./getRelatedArticles');
const getFloorPlans = require('./getFloorPlans');
const getDormPhotos = require('./getDormPhotos');
const getRelatedDorms = require('./getRelatedDorms.js');
const getLotteryNum = require('./getLotteryNum.js');
const getUniqueFloorNumbers = require('./getUniqueFloorNumbers.js');
const getMoreDormInfo = require('./getMoreDormInfo');

// Implement backend routes
module.exports = app => {
	app.use('/api/getAmenities', (req, res) => getAmenities(req, res));
	app.use('/api/getDormInfo', (req, res) => getDormInfo(req, res));
	app.use('/api/getReviews', (req, res) => getReviews(req, res));
	app.use('/api/filterDorm', (req, res) => filterDormInfo(req, res));
	app.use('/api/getExploreInfo', (req, res) => getExploreInfo(req, res));
	app.use('/api/getRelatedArticles', (req, res) => getRelatedArticles(req, res));
	app.use('/api/getFloorPlans', (req, res) => getFloorPlans(req, res));
	app.use('/api/getDormPhotos', (req, res) => getDormPhotos(req, res));
	app.use('/api/getRelatedDorms', (req, res) => getRelatedDorms(req, res));
	app.use('/api/getLotteryNum', (req, res) => getLotteryNum(req, res));
	app.use('/api/getUniqueFloorNumbers', (req, res) => getUniqueFloorNumbers(req, res));
	app.use('/api/getMoreDormInfo', (req, res) => getMoreDormInfo(req, res));
};
