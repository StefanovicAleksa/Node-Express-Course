const express = require('express');
const app = express();
const { products } = require('./content/data.js');

app.get('/', (req, res) => {
    res.status(200);
    res.contentType('html');
    res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
    const productList = products.map((product) => {
        const {id, name, image} = product;
        return({id, name, image});
    });
    res.status(200).contentType('json').json(productList);
});

// setting up dynamic endpoint with param being productID (: is mark for custom endpoint)
app.get(`/api/products/:productID`, (req, res) => { // Note req param doesn't have to be at the end of url
    const {productID} = req.params; // getting param from request .params which is an object with values
    const product = products.find((product) => product.id === Number(productID));
    // handling if product does not exist
    if(!product) {
        return res.status(404).send('Product Not Found');
    }
    
    res.status(200).contentType('json').json(product);
});

app.all('*', (req, res) => {
    console.error('Resource Not Found');
    res.status(404).send('</h1>Resource Not Found</h1>')
})

app.listen(5000, () => {
    console.log('Server is listening on port: 5000...')
});