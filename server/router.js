'use strict';

let express = require('express');
let db = require('./db');

let router = express.Router();
console.log('asdf');

//let util = require('util');
//let fs = require('fs');
//let path = require('path');

//let readFile = util.promisify(fs.readFile);
//let writeFile = util.promisify(fs.writeFile);
//let dbPath = path.resolve('db.json');

router.post('/submissions', function (request, response, next) {
  response.send('Create Submission');
  next();
});

router.get('/contact', async function (read, response, next) {
  let dbResponse = await db.read();
  response.send(dbResponse);
  return dbResponse;
  next();
  });
  
router.use(function (err, req, res, next){
  console.error(err.message);
  if(!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
  next();
});

// router.post('/user', function (request, response, next) {
//   response.send('Register User');
//   next();
// });

// router.post('/login', function (request, response, next) {
//   response.send('Login User');
//   next();
// });

// NOTE: I would worry about validation as the first thing to do after you get the non-authetnication routes working
// router.get(function validateUserMiddleware(req, res, next) {
//   let user = req.body;
//   if (!user.Name) {
//     res.send('"Name" is a required field');
//   } else if (!user.Email) {
//   res.send('"Email" is a required field');
//   } else if (!user.Phone) {
//     res.send('"Phone" is a required field');
//   } else {
//     next();
//   }
//   });

module.exports = router;