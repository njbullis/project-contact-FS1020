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


router.get('/entries', function (request, response, next) {
  response.render('Submissions');
  next();
});

async function read() {
  let json = await readFile(dbPath);
  return JSON.parse(json);
}

async function write(dbItems) {
  // The parameters for `null` and `2` are so it's formatted with 2 spaces of indentation
  let json = JSON.stringify(dbItems, null, 2);
  await writeFile(dbPath, json);
}

module.exports = router;