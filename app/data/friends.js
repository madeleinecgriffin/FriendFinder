// ===============================================================================
// DATA
// Below data will hold all of the possible friends who have compeleted the survey
// ===============================================================================

var friendArray = [
  {
    friendName: "Sleepy Mittens",
    friendImage: "http://www.petwave.com/-/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-3.ashx",
    "friendAnswers[]": [
      "2",
      "1",
      "1",
      "1",
      "1",
      "3",
      "2",
      "2",
      "2",
      "2"
    ]
  },
  {
    friendName: "Buttercup",
    friendImage: "http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/10-kitten-cuteness-1.jpg",
    "friendAnswers[]": [
      "5",
      "1",
      "1",
      "1",
      "1",
      "2",
      "2",
      "2",
      "5",
      "2"
    ]
  },
  {
    friendName: "Mr Sassy Whiskers",
    friendImage: "https://www.petmd.com/sites/default/files/cat%20and%20bee%20418336594.jpg",
    "friendAnswers[]": [
      "2",
      "4",
      "1",
      "1",
      "1",
      "2",
      "2",
      "1",
      "2",
      "1"
    ]
  },
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;