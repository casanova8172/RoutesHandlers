const express = require('express');
const router = express.Router();

// GET /books
router.get('/', (req, res) => {
  console.log('GET request received for /books');
  res.send('Here is the list of books!');
});

// POST /books
router.post('/', (req, res) => {
  const bookData = req.body;
  console.log('Book data received:', bookData);
  res.send('Book has been added!');
});

module.exports = router;
