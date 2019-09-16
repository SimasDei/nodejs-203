const express = require('express');
const path = require('path');

const app = express();

const members = require('./models/Members');

app.get('/api/members', (req, res) => {
  res.json(members);
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT ||  5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));