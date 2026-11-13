const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const msg = 'Continuous Integration & Delivery Active!';
    res.send(msg);
});

module.exports = app;
