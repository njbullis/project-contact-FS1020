'use strict';

let util = require('util');
let fs = require('fs');
let path = require('path');
  
// Create versions of `fs` methods we'll be using to return promises
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

// Declare where the DB path is relative from where our `package.json` is
let dbPath = path.resolve('db.json');
/**
 * 
 */
async function read() {
  let json = await readFile(dbPath);
  return JSON.parse(json);
}

/**
 * 
 */
async function write(dbContacts) {
  // The parameters for `null` and `2` are so it's formatted with 2 spaces of indentation
  let json = JSON.stringify(dbContacts, null, 2);
  await writeFile(dbPath, json);
}
/**
 *
 */
async function addContact(contact) {
  let dbContacts = await read();
  dbContacts.push(contact);
  await write(dbContacts);
}

module.exports = {
  read: read,
  addContact: addContact,
};
