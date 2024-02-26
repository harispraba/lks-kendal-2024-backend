const path = require("path");
const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json(), cors());

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get("/", (req, res) => {
  res.send('Hello World!')
});

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send({
    result: parseInt(a) + parseInt(b)
  });
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});