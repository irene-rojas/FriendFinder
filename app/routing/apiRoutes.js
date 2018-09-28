var friends = require("../data/friends");

// wrap everything in module.exports
module.exports = function(app) {
app.get("/api/friends", function(req, res) {
  res.json(friends);
});
// console.log(friends);

// use app.post to make changes
// use app.delete to remove something
app.post("/api/friends", function(req, res) {
  var bestMatch = {
    name: "",
    photo: "",
    // totalDifference: 1000
  };
  // console.log(bestMatch);
  // var matchScores = bestMatch.scores;
  // what i get from user
  var userData = req.body;
  var userScores = userData.scores;
  // console.log(userScores);

  // first: totalUserScore = sum of their number choices


  var difference = function(friendScore, userScore) {
    return Math.abs(parseInt(friendScore) - parseInt(userScore));
  };

  // for loop to look through all friends
  // for (var i = 0; i < friends.length; i++) {
  //   // on first friend
  //   var currentFriend = friends[i]; //john[object]
  //   var totalDifference = 0; //starts at zero for each new friend
  //     for (var j = 0; j < currentFriend.scores.length; j++) { //going through all the scores for john
  //       // john's first score
  //       var currentFriendScore = currentFriend.scores[j];
  //       // first score from user choice
  //       var currentUserScore = userScores[j];
  //       // adding to total difference of currentFriendScore and currentUserScore
  //       totalDifference += difference(currentUserScore, currentFriendScore);
  //     }
  //     if (totalDifference <= bestMatch.totalDifference) {
  //       bestMatch.name = currentFriend.name;
  //       bestMatch.photo = currentFriend.photo;
  //       bestMatch.totalDifference = totalDifference;
  //     }
  //   // difference between john and user scores
  //   };  


  for (var i = 0; i < friends.length; i++) {
    var currentFriend = friends[i]; //john[object]
    var friendScore = currentFriend.scores;
    // friendTotalScore 

    

  }

  

  // };
  // return total difference  
  // res.json(bestMatch);
  // console.log(difference(matchScores, userScores));
});

};

// --------------------------------------
// OR:  FOR LOOP to get sum of each friend score array and compare to sum of user score array
    // reduce
// look for the least difference
    // Math.abs for entire sum of friend score vs entire sum of user score
// --------------------------------------
// temporary variable to store best score (5 vs 2). only update if difference is less 
// temporary variable is bestMatch (aka currentFriend)