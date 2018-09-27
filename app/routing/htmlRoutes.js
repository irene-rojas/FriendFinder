// // dependencies
// var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");
// var http = require("http");

// express configuration
// var app = express();
// var PORT = process.env.PORT || 8080;
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


module.exports = function(app) {
// get home
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/home.html"));
});

// get survey
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/survey.html"));
});

};


// listening command
// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
//   });