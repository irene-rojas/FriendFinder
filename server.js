// dependencies
var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");
// var http = require("http");
// var request = require("request");

// express configuration
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// supposedly to activate the css file
// app.use(express.static("public"));
// I ended up putting the CSS in the html files

// listening command
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });