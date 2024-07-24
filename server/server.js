const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const db = require('./database');

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Internal server error' });
    } else if (row) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Invalid email or password' });
    }
  });
});

app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (err) => {
    if (err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.json({ success: false, message: 'Email already exists' });
      } else {
        res.status(500).json({ success: false, message: 'Internal server error' });
      }
    } else {
      res.json({ success: true });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
