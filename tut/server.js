// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React frontend
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Fallback for all other requests (SPA behavior)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
