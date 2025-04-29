const express = require('express');
const router = express.Router();
const db = require('../db');

// API POST /likes
router.post('/', (req, res) => {
  const { user_id, post_id } = req.body;

  if (!user_id || !post_id) {
    return res.status(400).json({ error: 'Missing user_id or post_id' });
  }

  const checkSql = 'SELECT * FROM likes WHERE user_id = ? AND post_id = ?';
  db.query(checkSql, [user_id, post_id], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    if (rows.length > 0) {
      return res.status(409).json({ message: 'Already liked' });
    }

    const insertSql = 'INSERT INTO likes (user_id, post_id) VALUES (?, ?)';
    db.query(insertSql, [user_id, post_id], (err, result) => {
      if (err) return res.status(500).json({ error: 'Database error' });

      res.status(201).json({ message: 'Post liked successfully', likeId: result.insertId });
    });
  });
});

module.exports = router; // 👈 ĐẢM BẢO KHÔNG BỊ SAI!
