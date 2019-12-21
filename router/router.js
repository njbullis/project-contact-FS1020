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
  response.send('Submissions');
  next();
});

router.get(async function read() {
  let fileContents = await readFile(dbPath);
  return allUsers=JSON.parse(fileContents);
  return allUsers;
});

router.get(async function write(dbItems) {
  // The parameters for `null` and `2` are so it's formatted with 2 spaces of indentation
  let json = JSON.stringify(dbItems, null, 2);
  await writeFile(dbPath, json);
});

router.get(function validateUserMiddleware(req, res, next) {
  let user = req.body;
  if (!user.Name) {
    res.send('"Name" is a required field');
  } else if (!user.Email) {
  res.send('"Email" is a required field');
  } else if (!user.Phone) {
    res.send('"Phone" is a required field');
  } else {
    next();
  }
  });

module.exports = router;