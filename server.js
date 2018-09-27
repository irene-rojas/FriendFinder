// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");
var request = require("request");

// express configuration
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

var friends = require("./app/data/friends");
// console.log(friends);

// home
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});

// survey
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/survey.html"));
});

// friends.js
app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/data/friends.js"));
});

app.post("/api/friends", function(req, res) {
  var bestMatch = {
    name: "",
    photo: "",
    totalDifference: 1000
  };
  // console.log(bestMatch);
  // var matchScores = bestMatch.scores;
  // what i get from user
  var userData = req.body;
  var userScores = userData.scores;
  console.log(userScores);


  // for loop to look through all friends
  for (var i = 0; i < friends.length; i++) {
    // on first friend
    var currentFriend = friends[i]; //john[object]
    var totalDifference = 0; //starts at zero for each new friend
      for (var j = 0; j < currentFriend.scores.length; j++) { //going through all the scores for john
        // john's first score
        var currentFriendScore = currentFriend.scores[j];
        // first score from user choice
        var currentUserScore = userScores[j];
        // adding to total difference of currentFriendScore and currentUserScore
        totalDifference += difference(currentUserScore, currentFriendScore);
      }
      if (totalDifference <= bestMatch.totalDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.totalDifference = totalDifference;
      }
    // difference between john and user scores
    };  

  var difference = function(friendScore, userScore) {
    return Math.abs(parseInt(friendScore) - parseInt(userScore));
  };

  // };
  // return total difference  
  // res.json(bestMatch);
  console.log(difference(matchScores, userScores));
});



// --------------------------------------
// OR:  FOR LOOP to get sum of each friend score array and compare to sum of user score aray
    // reduce
// look for the least differenece
    // Math.abs for entire sum of friend score vs entire sum of user score
// --------------------------------------


// supposedly to activate the css file
// app.use(express.static("public"));
// I ended up putting the CSS in the html files


// listening command
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });