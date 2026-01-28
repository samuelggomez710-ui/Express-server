    // import files and packages up here
// The web framework used to build server
const express = require('express');
// Logs every request in the terminal
const morgan = require('morgan');
// Loads your top spots data so you can send it to /data
const data = require('./data.json');

    // create your express server below
const app = express();

    // add your routes and middleware below
// Tell app to use morgan to log requests
app.use(morgan('dev'));
// Lets server load front end file
app.use(express.static(`${__dirname}/..`));
// Serve index.html on root path
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/../index.html`);
});
//When someone visits the server it will respond with the data from data.json, 200 status code means ok
app.get('/data', (req, res) => {
    res.status(200).json(data);
    res.setHeader('Content-Type', 'text/plain');
    // Send back the response body and end the response
    res.end("It's working");
});

    // finally export the express application
// Allows test runner and index.js to import Express app
module.exports = app;
// Test message to see update date in github