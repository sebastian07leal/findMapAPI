const express = require('express');
const app = express();

const  { config } = require('./config/index.js');

app.get('/', function(req, res) {
    res.send('helo world');
});

app.get('/json', function (req, res) {
    res.json({ hello: 'world'});
});

app.listen(config.port, function() {
    console.log(`http://localhost:${config.port}`);
});