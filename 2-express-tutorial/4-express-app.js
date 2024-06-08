// Express App

const express = require('express');
const app = express();

// setting up path module
const path = require('path');

// sets up static middleware (resources that will not change)
app.use(express.static('./navbar-app/public')); // setting up public resources (best practice use folder public to store them)

/* app.get('/', (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.sendFile(path.join(__dirname, './navbar-app/index.html')); // using sendfile method (it requires absolute path to file)
    
}); */
// the above code was unnecessary because we have added index.html as static resource

app.all('*', (req, res) => {
    res.status(404).send('Resource not found');
});

app.listen(5000, () => {
    console.log('Server is listening on port: 5000...');
});