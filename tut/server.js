// server.js
const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000;

// Fallback for all other requests (SPA behavior)
app.get('/', (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
