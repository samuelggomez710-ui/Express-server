// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const data = require('./data.json');

const app = express();

// Log requests using morgan's 'dev' format
app.use(morgan('dev'));

// Respond with top spots data
app.get('/data', (req, res) => {
    res.status(200).json(data);
});

app.get('/', (req, res) => {
    res.status(200);
    res.type('text/html');
    res.send('Filler text');
});

// Export the app for tests and for the server starter
module.exports = app;