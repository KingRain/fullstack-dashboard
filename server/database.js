// backend/database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run('CREATE TABLE users (email TEXT PRIMARY KEY, password TEXT)');
  
});

module.exports = db;
