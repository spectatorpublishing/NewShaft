// lmao
const express = require('express');
const app = express();
const os = require('os');
const bodyParser = require('body-parser')
var cors = require('cors');
app.use(cors())

var fakeRequest = {
	"dorm": "barnard"
}
var getDormInfo = require('./routes/getDormInfo');
var filterDormInfo = require('./routes/filter');
var postReview = require('./routes/postReview');
var getExploreInfo = require('./routes/getExploreInfo');

app.use(bodyParser.json())
app.use(express.static('dist'));

app.use('/api/getDormInfo', (req, res) => getDormInfo(req, res) );
app.use('/api/filterDorm', (req, res) => filterDormInfo(req, res));
app.use('/api/postReview', (req, res) => postReview(req, res));
app.use('/api/getExploreInfo', (req, res) => getExploreInfo(req,res));

var server = app.listen(8080, () => {
	console.log('Listening on port 8080!')
});

module.exports = server;
