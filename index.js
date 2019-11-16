const express = require('express');
const app = express();
const favoritesApi = require('./routes/favorites');

const  { config } = require('./config/index.js');

favoritesApi(app);

app.listen(config.port, function() {
    console.log(`http://localhost:${config.port}`);
});