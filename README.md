# FriendFinder
### a friend finding app using Node, Express, and Javascript

To run the app, go into the main folder, install express, path, and body-parser, and run node server.js.

This app uses several Express servers to compare survey data given by the user to survey data stored from previous users. After the user hits submit, a modal will pop up indicating which of the stored users has the most similar survey answers and indicate that user is their best friend match.

* app
    * data
        * friends.js
            This file stores an array of objects of previous user survey answers. Every time the survey is filled out it creates a new object and adds it to the array of users.
    * public
        * home.html
            This is the document survey they opens onf local port 3000 when running Express. It only contains a button leading to the survey, as well as links to user list and this gitub repo.
        * survey.html
            This creates the survey and modal HTML. Additionally, it contains javascripts that 1) passes the newly submitted data object to the routes apiRoutes.js and 2) receives a post response from the apiRoutes.js that has the data of the closest match for the user. It then displays that match's info in the modal pop up so the user can see their new friend.
    * routing
        * htmlRoutes.js
            Stores the HTML routes for navigatsions. Port 3000 is the home page, 3000/survey is the survey link. 
        * apiRoutes.js
            This file contains the bulk of the logic for this app.
            * It takes in the new user survey data from the survey.html javascript.
            * It compares the user's scores to all of the stored friends from friends.js and stores the total difference is scores to an array
            * It then cycles through that array of difference scores to determine the index of the smallest difference
            * It pulls the friend data from that index and pushes it back to the survey.html file so it displays in the modal pop up