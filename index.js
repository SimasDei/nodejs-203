const express = require('express');
const path = require('path');

const members = require('./models/Members');

const app = express();

const logger = require('./middleware/logger');

// app.use(logger);

/**
 * @get - Members
 */
app.get('/api/members', (req, res) => {
  res.json(members);
});

/**
 * @get - Single Member
 * @params - Member Id
 */
app.get('/api/members/:id', (req, res) => {
  const {id} = req.params;
  const member = members.filter(member => member.id === parseInt(id, 10))[0];
  res.json(member);
})

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT ||  5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));