const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db/index');
const models = require('./models/index');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', (req, res) => {
  models.User.create(JSON.parse(req.body.form))
    .then((userId) => res.status(201).json(userId))
    .catch((err) => res.sendStatus(400));
});

app.post('/location', (req, res) => {
  models.User.saveAddress(JSON.parse(req.body.form))
    .then((results) => res.sendStatus(201))
    .catch((err) => res.sendStatus(400));
});

app.post('/card', (req, res) => {
  models.User.saveCard(JSON.parse(req.body.form))
    .then((results) => res.sendStatus(201))
    .catch((err) => res.sendStatus(400));
});

app.listen(port, () => {
  console.log('Listening for requests at port:', port);
});