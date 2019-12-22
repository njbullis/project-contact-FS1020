'use strict';

let util = require('util');
let fs = require('fs');
let path = require('path');
  
// Create versions of `fs` methods we'll be using to return promises
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

// Declare where the DB path is relative from where our `package.json` is
let dbPath = path.resolve('server/db.json');
/**
 * 
 */
async function read() {
  let fileContents = await readFile(dbPath);
  let allEntries = JSON.parse(fileContents)
  return allEntries;
}
/**
 * 
 */
async function write(dbEntries) {
  // The parameters for `null` and `2` are so it's formatted with 2 spaces of indentation
  let json = JSON.stringify(dbEntries, null, 2);
  await writeFile(dbPath, json);
}
/**
 *
 */
async function addEntry(Entry) {
  let dbEntries = await read();
  dbItems.push(entry);
  await write(dbEntries);
}

module.exports = {
  read: read,
  addUser: addUser,
};
