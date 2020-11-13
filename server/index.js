const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.text());

app.get('/api/sizes/:itemId', (req, res) => {

})