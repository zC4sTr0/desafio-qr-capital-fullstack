const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "QRCapital",
    password: "alwayslearning",
    database: "desafioQR"
});


module.exports = pool.promise();
