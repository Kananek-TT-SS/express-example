const express = require("express");

const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  return res.send("Hello Chaiyo!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
