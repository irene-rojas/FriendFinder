// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");

// express configuration
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/data/friends.js"));
});

// this is probably wrong
// app.post("/api/friends", function(req, res) {
//   res.sendFile(path.join(__dirname, "./app/data/friends.js"));
// });







// listening command
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });