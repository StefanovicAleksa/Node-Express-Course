const express = require('express');
const app = express();
const { products } = require('./content/data.js');

app.get('/', (req, res) => {
    res.status(200);
    res.contentType('json');
    res.json(products);
});

app.listen(5000, () => {
    console.log('Server is listening on port: 5000...')
});