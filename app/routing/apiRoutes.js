// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friendData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {

    var userData = req.body;

    //initialize a variable for storing the difference score for the list of possible friends
    var diffArray = [];

    //cycles through all friends on the list to determine the total difference in score between the user and each possible friend
    //stores these total differences in diffArray
    for (let i = 0; i < friendData.length; i++) {
      var element = friendData[i];

      if (element.friendName != userData.friendName) {
        var totalDiff = 0;

        for (let j = 0; j < element["friendAnswers[]"].length; j++) {
          var storeFriend = element["friendAnswers[]"][j];
          var question = j + 1;
          var storeUser = userData["friendAnswers[]"][j];
          var storeDifference = Math.abs(storeFriend - storeUser);
          totalDiff = totalDiff + storeDifference;
        }
        diffArray.push(totalDiff);
      }
    }

    console.log(diffArray);

    //sets a min difference to go down from
    var minDiff = 40;

    //initialize a variable to store the index of the lowest difference score aka your new best friend's index
    var diffIndex;

    //cycles through the array of total differences to determine the index that has the lowest difference
    for (let i = 0; i < diffArray.length; i++) {
      const element = diffArray[i];
      if (element < minDiff) {
        minDiff = element;
        diffIndex = i;
      }
      else {
        minDiff = minDiff;
      }
    }

    console.log(diffIndex);
    console.log(friendData[diffIndex].friendName);
    //stores the name of the user's new best friend
    var friendMatch = friendData[diffIndex];

    //pushes user to list of friends so they can be compared with future users
    friendData.push(req.body);

    res.json(friendMatch);
  });
}
