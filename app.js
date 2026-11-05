const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Works hereee!');
});

module.exports = app;

