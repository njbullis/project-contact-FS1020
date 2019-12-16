'use strict';

const express = require('express');
const router = require('./router');
const defaultErrorHandler = require('../middleware/default-error-handler');

console.log('asdf');
// Create an instance of an Express server app
const app = express();

// Use the EJS templating engine (comment this out if no webpages are generated)
// app.set('view engine', 'ejs');

// Serve static content, URL paths must start with "/static"
// app.use('/static', express.static('static'));

// Parse incoming JSON
app.use(express.json());

// Add our defined routes from router.js
app.use(router);

// Default error handler should in any of our routes we call next() with an error
app.use(defaultErrorHandler);


// Start the express server
const port = 3000;
app.listen(port, function () {
  console.log(`Express server started on port ${port}.`);
});