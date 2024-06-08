// Express

const express = require('express');

// initiating http server with express
const app = express();

// seting up get method on url '/'
app.get('/', (req, res) => {
    res.status(200); // sending status code for response
    res.contentType('text/html'); // setting content type
    res.send('<h1>Home Page</h1>'); // sending body and ending the request
});

app.get('/about', (req, res) => {
    res.status(200);
    res.send('<h1>About Page</h1>'); // express auto sets content type (or at least it should)
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
});

// setting up server on port 5000
app.listen(5000, () => {
    console.log('Server is listening on port: 5000...');
});