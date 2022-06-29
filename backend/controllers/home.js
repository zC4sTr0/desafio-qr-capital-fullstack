const path = require('path');


exports.getHomePage = (req, res) => {
    res.send('<h1>Hello World from Home Page</h1>');
};
