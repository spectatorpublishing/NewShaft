const express = require('express');
const app = express();
const os = require('os');
const bodyParser = require('body-parser')

var getDormInfo = require('./routes/getDormInfo');
var deleteDormInfo = require('./routes/deleteDormInfo');

app.use(bodyParser.json())
app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.use('/api/getDormInfo', (req, res) => getDormInfo(req, res) )
app.use('/api/deleteDormInfo', (req, res) => deleteDormInfo(req, res) )

var server = app.listen(8080, () => {
	console.log('Listening on port 8080!')
});

module.exports = server;