const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db/index');
const models = require('./models/index');
console.log('models = ', models);


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', (req, res) => {
  models.User.create(JSON.parse(req.body.form));
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log('Listening for requests at port:', port);
});