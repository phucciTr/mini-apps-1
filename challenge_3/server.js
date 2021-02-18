const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', (req, res) => {
  console.log('req.body = ', req.body);
  console.log('req.body = ', JSON.parse(req.body.form));
  res.status(201);
});

app.listen(port, () => {
  console.log('Listening for requests at port:', port);
});