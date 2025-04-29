const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /hashtags/search
router.get('/search', (req, res) => {
  const keyword = req.query.keyword;
  if (!keyword) {
    return res.status(400).json({ error: 'Missing keyword' });
  }

  const sql = "SELECT * FROM posts WHERE content LIKE ?";
  const param = `%#${keyword}%`;

  db.query(sql, [param], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    res.json({ posts: results });
  });
});

module.exports = router; // 🔥 Đảm bảo dòng này tồn tại và đúng
