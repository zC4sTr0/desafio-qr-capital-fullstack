const Pool = require("pg").Pool;
const config = require("../../config/database");

async function connect() {
  const pool = new Pool(config);
  await pool.connect((err, client, done) => {
    if (err) {
      console.error("Error connecting: ", err.stack);
      return;
    }
    console.log("Connected to postgres!");
  });
  await pool.query(
    `CREATE TABLE IF NOT EXISTS users 
    (ID SERIAL PRIMARY KEY, 
    name VARCHAR(255), 
    email VARCHAR(255), 
    password VARCHAR(255))`
  );
  return pool;
}

module.exports = connect();
