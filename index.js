// Entrypoint into application
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
// require('dotenv').config();

app.use(cors())

const mountRoutes = require('./server/routes')

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mountRoutes(app)

const path = require('path')
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, './client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/./client/build/index.html'))
})

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Connected on port ${port}`))

module.exports = server;