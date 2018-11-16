const express = require('express');
const os = require('os');
const app = express();

var SELECTdorm = require('./routes/SELECTdorm');

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.use('/api/SELECTdorm', (req,res) => { SELECTdorm(req, res) })
app.listen(8080, () => console.log('Listening on port 8080!'));

module.exports = app