// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friendData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    
    var userData = req.body;
    var diffArray = [];

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

    var minDiff = 40;
    var diffIndex;

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
    var friendMatch = friendData[diffIndex].friendName;

    friendData.push(req.body);
  });
}
