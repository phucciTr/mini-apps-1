const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static('public'));

app.listen(port, () => {
  console.log('Listening for requests at port:', port);
});