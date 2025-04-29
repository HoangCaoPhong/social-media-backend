const express = require('express');
const router = express.Router();
const db = require('../db');

// API POST /follows
router.post('/', (req, res) => {
  const { follower_id, followed_id } = req.body;

  if (!follower_id || !followed_id) {
    return res.status(400).json({ error: 'Missing follower_id or followed_id' });
  }

  if (follower_id === followed_id) {
    return res.status(400).json({ error: 'Cannot follow yourself' });
  }

  const checkSql = 'SELECT * FROM follows WHERE follower_id = ? AND followed_id = ?';
  db.query(checkSql, [follower_id, followed_id], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    if (rows.length > 0) {
      return res.status(409).json({ message: 'Already following' });
    }

    const insertSql = 'INSERT INTO follows (follower_id, followed_id) VALUES (?, ?)';
    db.query(insertSql, [follower_id, followed_id], (err, result) => {
      if (err) return res.status(500).json({ error: 'Database error' });

      res.status(201).json({ message: 'Followed successfully', followId: result.insertId });
    });
  });
});

module.exports = router; // ✅ Cực kỳ quan trọng!
