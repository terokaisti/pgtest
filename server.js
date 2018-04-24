'use strict';

const express = require('express');
const { getTs } = require('./db');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', async (req, res) => {
  const ts = await getTs();
  res.send(ts);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
