const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  return res.send("Hello Chaiyo!");
});

module.exports = app;
