const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; //this is for "PORT" Heroku

//this is telling what the server what to use as middleware for each request
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

//this gets the server to start
app.listen(port, () => {
    console.log('Server is up!');
});