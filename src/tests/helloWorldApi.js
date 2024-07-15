const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

module.exports = app;
