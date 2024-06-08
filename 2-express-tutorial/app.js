const express = require('express');
const app = express();
const { products } = require('./content/data.js');

app.get('/', (req, res) => {
    res.status(200);
    res.contentType('html');
    res.send('<h1>Home Page</h1>');
});

app.get('/api/v1/products/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...products]
    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }

    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if(sortedProducts.length < 1) {
        res.status(200).json({success: true, data: []});
    }
    else {
        res.status(200).contentType('json').json(sortedProducts);
    }
});

app.all('*', (req, res) => {
    console.error('Resource Not Found');
    res.status(404).send('</h1>Resource Not Found</h1>')
})

app.listen(5000, () => {
    console.log('Server is listening on port: 5000...')
});