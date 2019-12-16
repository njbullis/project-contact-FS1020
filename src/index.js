'use strict';

let express = require('express');
let router = require('./router');

let app = express();

// Apply middleware
app.use(express.json()); // Allows us to read JSON sent in `req.body`
app.use(router); // Apply our router as middleware

// Default error handler goes last
app.use(function (req, res, next, error) {

});

let port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
