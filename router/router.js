'use strict';

const express = require('express');

const router = express.Router();
console.log('asdf');

router.post('/submissions', function (request, response, next) {
  response.send('Create Submission');
  next();
});

router.post('/user', function (request, response, next) {
  response.send('Register User');
  next();
});

router.post('/login', function (request, response, next) {
  response.send('Login User');
  next();
});

router.get('/entries', function (_request, response, next) {
  response.send('Submissions');
  next();
});

module.exports = router;