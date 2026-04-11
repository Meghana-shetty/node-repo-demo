// index.js
const express = require('express');
const app = express();

// Use the PORT provided by Render, or 10000 as a default
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('<h1>Node.js Service is Live!</h1>');
});

// IMPORTANT: Listen on 0.0.0.0 and the dynamic PORT
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is actually running on port ${PORT}`);
});
