const express = require("express");
require("dotenv").config();
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("raveendratwitter");
});
app.get("/login", (req, res) => {
  res.send("<h1>Plese Login</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>Youtube</h2>");
});

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});
