const express = require("express");
require("dotenv").config();
const app = express();
const port = 4000;
const apiKeyData = [
  {
    name: "Raveendra",
    age: 25,
    city: "Varanasi",
    country: "India",
    email: "raveendra@example.com",
    phone: "9876543210",
    gender: "Male",
    occupation: "Developer",
  },
];
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
app.get("/apiData", (req, res) => {
  res.json({ apiKeyData });
});
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});
