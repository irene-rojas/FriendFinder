// // dependencies
var path = require("path");


module.exports = function(app) {
// get home
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../../public/home.html"));
});

// get survey
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../../public/survey.html"));
});

};
