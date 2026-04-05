const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Node.js Service is Live!</h1><p>Deployed via Port.io Golden Path.</p>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
