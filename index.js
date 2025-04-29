const express = require('express');
const app = express();
const port = 3001;

const db = require('./db'); // Kết nối DB

// Import routes
const postRoutes = require('./routes/posts');
const likeRoutes = require('./routes/likes');
const followRoutes = require('./routes/follows');
const hashtagRoutes = require('./routes/hashtags');


app.use(express.json());

// Sử dụng routes
app.use('/posts', postRoutes);
app.use('/likes', likeRoutes);
app.use('/follows', followRoutes);
app.use('/hashtags', hashtagRoutes); // ✅ Route cho GET /hashtags/search

// Route test mặc định
app.get('/', (req, res) => {
  res.send('Server is running with MySQL!');
});

app.listen(port, () => {
  console.log(`✅ Server is listening on port ${port}`);
});
