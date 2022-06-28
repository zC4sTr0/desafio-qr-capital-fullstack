const express = require('express');
const app = express();
const homeRoute = require('./routes/home');

app.use(homeRoute);

app.listen(3000, (error) => { 
    if (error) throw error;
    console.log('Server is running on port 3000');
});