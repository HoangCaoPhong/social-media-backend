const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { user_id, content } = req.body;

  if (!user_id || !content) {
    return res.status(400).json({ error: 'Missing user_id or content' });
  }

  const sql = 'INSERT INTO posts (user_id, content) VALUES (?, ?)';
  db.query(sql, [user_id, content], (err, result) => {
    if (err) {
      console.error('Error inserting post:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Post created successfully', postId: result.insertId });
  });
});

module.exports = router;
