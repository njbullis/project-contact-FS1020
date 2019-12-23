'use strict';

let express = require('express');
let db = require('./db');

let router = express.Router();
console.log('asdf');

let readFile = util.promisify(fs.readFile);
//let writeFile = util.promisify(fs.writeFile);
let dbPath = path.resolve('db.json');

router.post('/submissions', function (request, response, next) {
  response.send('Create Submission');
  next();
});

router.get('/contact', async function readDB () {
  let allContacts = await readFile(dbPath);
  return JSON.parse(allContacts);
});

app.use(function (req, res, next, error){
  console.error(err.stack)
  Response.status(500).send('Oops!')
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