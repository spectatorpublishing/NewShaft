/** Entrypoint for API that intializes all backend routes */

// Initialize backend routes
const getDormInfo = require('./getDormInfo');
const getDorms = require('./getDorms');
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
const updateVoteCount = require('./updateVoteCount.js');
const getQuickReview = require('./getQuickReview.js');
const getMoreDormInfo = require('./getMoreDormInfo');
const getFilteredDorms = require('./getFilteredDorms')

// Implement backend routes
module.exports = app => {
	app.use('/api/getAmenities', (req, res) => getAmenities(req, res));
	app.use('/api/getDorms', (req, res) => getDorms(req, res));
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
	app.use('/api/updateVoteCount', (req, res) => updateVoteCount(req, res));
	app.use('/api/getQuickReview', (req, res) => getQuickReview(req, res));
	app.use('/api/getFilteredDorms', (req, res) => getFilteredDorms(req, res));
};
