const express = require('express');
const path = require('path');
const expressHb = require('express-handlebars');

const logger = require('./middleware/logger');
const members = require('./models/Members');

const app = express();
app.engine('handlebars', expressHb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index', {
  title: 'Node-203 : Home',
  members,
}));

// app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/members', require('./routes/api/members.js'))

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT ||  5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));