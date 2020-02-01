const express = require("express");
const path = require("path");
const app = express();


const request = require('request');

app.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/public", express.static("./public"));


app.listen(3000);

