const express = require("express");
const app = express();
const homeRoute = require("./app/routes/home.js");
const db = require("./app/database/database.js");

app.use(homeRoute);

app.listen(process.env.PORT || 3001, (error) => {
  if (error) throw error;
  console.log("Server is running on port 3001");
});
