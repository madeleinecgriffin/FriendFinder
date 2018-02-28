// ===============================================================================
// DATA
// Below data will hold all of the possible friends who have compeleted the survey
// ===============================================================================

var friendArray = [
  {
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    "scores": [
      "5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"
    ]
  },
  {
    "name": "Jacob Deming",
    "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    "scores": [
      "4",
      "2",
      "5",
      "1",
      "3",
      "2",
      "2",
      "1",
      "3",
      "2"
    ]
  },
  {
    "name": "Jeremiah Scanlon",
    "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    "scores": [
      "5",
      "2",
      "2",
      "2",
      "4",
      "1",
      "3",
      "2",
      "5",
      "5"
    ]
  },
  {
    "name": "Louis T. Delia",
    "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    "scores": [
      "3",
      "3",
      "4",
      "2",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    "name": "Lou Ritter",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
    "scores": [
      "4",
      "3",
      "4",
      "1",
      "5",
      "2",
      "5",
      "3",
      "1",
      "4"
    ]
  },
  {
    "name": "Jordan Biason",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    "scores": [
      "4",
      "4",
      "2",
      "3",
      "2",
      "2",
      "3",
      "2",
      "4",
      "5"
    ]
  },
  {
    "name": "Bob Miller",
    "photo": "https://www.pexels.com/search/cat/",
    "scores": [
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2"
    ]
  },
  {
    "name": "Dindu Nuffin",
    "photo": "https://encyclopediadramatica.rs/DINDUNUFFIN#/media/File:Dindunuffins.jpg",
    "scores": [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
    ]
  },
  {
    "name": "boiu",
    "photo": "https://www.google.com/search?hl=en&tbm=isch&source=hp&biw=1536&bih=759&ei=gnCVWtSAJ8HwsQWx4KyYCQ&q=foower&oq=foower&gs_l=img.3..0i10k1l10.1958.3542.0.3902.8.8.0.0.0.0.51.284.6.6.0....0...1ac.1.64.img..2.6.284.0..0j35i39k1.0.Vr1nlm3oZCU#imgrc=6yNKKABgeF3YNM:",
    "scores": [
      "2",
      "3",
      "3",
      "3",
      "4",
      "2",
      "2",
      "2",
      "2",
      "2"
    ]
  },
  {
    "name": "Carl Jacks",
    "photo": "https://en.wikipedia.org/wiki/Jack_Palance",
    "scores": [
      "3",
      "3",
      "5",
      "5",
      "2",
      "1",
      "3",
      "3",
      "3",
      "3"
    ]
  },
  {
    "name": "sue",
    "photo": "dsadgaegff",
    "scores": [
      "2",
      "3",
      "3",
      "3",
      "2",
      "3",
      "2",
      "2",
      "3",
      "4"
    ]
  },
  {
    "name": "David",
    "photo": "http://www.vetstreet.com/dogs/",
    "scores": [
      "5",
      "5",
      "5",
      "5",
      "3",
      "5",
      "5",
      "5",
      "5",
      "5"
    ]
  },
  {
    "name": "David",
    "photo": "http://www.vetstreet.com/dogs/",
    "scores": [
      "5",
      "5",
      "5",
      "5",
      "3",
      "5",
      "5",
      "5",
      "5",
      "5"
    ]
  },
  {
    "name": "Joe",
    "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F552307347851210752%2FvrXDcTFC_400x400.jpeg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fjoerogan&docid=yTmRkBXi2GmUIM&tbnid=36y7zc4OdCffSM%3A&vet=10ahUKEwjmmeilysbZAhVoj1QKHd99DwcQMwgyKAEwAQ..i&w=400&h=400&bih=760&biw=1536&q=joe%20rogan&ved=0ahUKEwjmmeilysbZAhVoj1QKHd99DwcQMwgyKAEwAQ&iact=mrc&uact=8",
    "scores": [
      "5",
      "5",
      "5",
      "3",
      "2",
      "2",
      "5",
      "1",
      "3",
      "5"
    ]
  },
  {
    "name": "Ian Nowicki",
    "photo": "data:image/jpeg;base64,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",
    "scores": [
      "1",
      "1",
      "3",
      "2",
      "3",
      "3",
      "3",
      "2",
      "5",
      "4"
    ]
  },
  {
    "name": "Ian Nowicki",
    "photo": "data:image/jpeg;base64,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",
    "scores": [
      "1",
      "1",
      "3",
      "2",
      "3",
      "3",
      "3",
      "2",
      "5",
      "4"
    ]
  },
  {
    "name": "Edyta",
    "photo": "http://okp-cdn.okayplayer.com/wp-content/uploads/2016/12/Carrie-Fisher-Princess-Leia-in-Star-Wars-Dies-At-60-715x402.png",
    "scores": [
      "5",
      "5",
      "5",
      "1",
      "5",
      "1",
      "5",
      "5",
      "5",
      "5"
    ]
  },
  {
    "name": "humble durgal",
    "photo": "https://en.wikipedia.org/wiki/Three_Musicians",
    "scores": [
      "5",
      "5",
      "5",
      "5",
      "3",
      "3",
      "3",
      "2",
      "3",
      "2"
    ]
  },
  {
    "name": "Boo",
    "photo": "http://cdn.akc.org/Marketplace/Breeds/Boston_Terrier_SERP.jpg",
    "scores": [
      "5",
      "4",
      "3",
      "2",
      "2",
      "4",
      "4",
      "2",
      "4",
      "4"
    ]
  },
  {
    "name": "jack",
    "photo": "https://images-na.ssl-images-amazon.com/images/I/81VXyIzreCL._SL1500_.jpg",
    "scores": [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
    ]
  },
  {
    "name": "jack",
    "photo": "https://images-na.ssl-images-amazon.com/images/I/81VXyIzreCL._SL1500_.jpg",
    "scores": [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
    ]
  },
  {
    "name": "jack",
    "photo": "https://images-na.ssl-images-amazon.com/images/I/81VXyIzreCL._SL1500_.jpg",
    "scores": [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
    ]
  },
  {
    "name": "jack",
    "photo": "https://images-na.ssl-images-amazon.com/images/I/81VXyIzreCL._SL1500_.jpg",
    "scores": [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
    ]
  },
  {
    "name": "test",
    "photo": "test@gmail.com",
    "scores": [
      "1",
      "4",
      "3",
      "3",
      "3",
      "4",
      "3",
      "4",
      "3",
      "2"
    ]
  },
  {
    "name": "Charles Roberts' Liri",
    "photo": "sgfsfg",
    "scores": [
      "3",
      "3",
      "4",
      "4",
      "2",
      "3",
      "2",
      "4",
      "2",
      "2"
    ]
  },
  {
    "name": "jfajfj",
    "photo": "akjfdl;ka",
    "scores": [
      "3",
      "2",
      "1",
      "3",
      "3",
      "4",
      "3",
      "3",
      "3",
      "3"
    ]
  },
  {
    "name": "David",
    "photo": "http://www.focusit.ca/your-future/industry-profiles/open-text/young-male-intern/",
    "scores": [
      "2",
      "3",
      "3",
      "2",
      "5",
      "2",
      "3",
      "1",
      "2",
      "3"
    ]
  },
  {
    "name": "David",
    "photo": "http://www.focusit.ca/your-future/industry-profiles/open-text/young-male-intern/",
    "scores": [
      "2",
      "3",
      "3",
      "2",
      "5",
      "2",
      "3",
      "1",
      "2",
      "3"
    ]
  },
  {
    "name": "David",
    "photo": "http://www.focusit.ca/your-future/industry-profiles/open-text/young-male-intern/",
    "scores": [
      "2",
      "3",
      "3",
      "2",
      "5",
      "2",
      "3",
      "1",
      "2",
      "3"
    ]
  },
  {
    "name": "Home Simpson",
    "photo": "https://goo.gl/images/zKiHVm",
    "scores": [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
    ]
  },
  {
    "name": "Sawyer",
    "photo": "https://www.google.com/search?q=sailboat+images&sa=X&biw=1215&bih=610&tbm=isch&source=iu&ictx=1&fir=NNFahPOXhr0afM%253A%252Cr1ntalip6z3wpM%252C_&usg=___NcabnksM3lwFH9asHzEPTQDTLI%3D&ved=0ahUKEwjpwuOfn8fZAhUN9mMKHeuOAPgQ9QEIKzAA#imgrc=NNFahPOXhr0afM:",
    "scores": [
      "3",
      "4",
      "4",
      "2",
      "3",
      "1",
      "2",
      "2",
      "5",
      "3"
    ]
  },
  {
    "name": "Susans",
    "photo": "Mamslasssssss",
    "scores": [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
    ]
  },
  {
    "name": "Mary",
    "photo": "www.photo.com",
    "scores": [
      "3",
      "3",
      "2",
      "2",
      "4",
      "3",
      "2",
      "3",
      "2",
      "2"
    ]
  },
  {
    "name": "Jose Perez",
    "photo": "http://shrek.wikia.com/wiki/Shrek_(character)",
    "scores": [
      "3",
      "4",
      "4",
      "4",
      "3",
      "2",
      "3",
      "2",
      "4",
      "3"
    ]
  },
  {
    "name": "Test",
    "photo": "https://www.pexels.com/photo/eye-iris-anatomy-biology-8588/",
    "scores": [
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5"
    ]
  },
  {
    "name": "lsfkjsl",
    "photo": "https://www.biography.com/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_80%2Cw_620/MTQzMjgyNDgwNjIxODIzNTU5/jennifer-lawrence_gettyimages-626382596jpg.jpg",
    "scores": [
      "4",
      "2",
      "1",
      "2",
      "1",
      "1",
      "3",
      "5",
      "4",
      "1"
    ]
  },
  {
    "name": "lsfkjsl",
    "photo": "https://www.biography.com/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_80%2Cw_620/MTQzMjgyNDgwNjIxODIzNTU5/jennifer-lawrence_gettyimages-626382596jpg.jpg",
    "scores": [
      "4",
      "2",
      "1",
      "2",
      "1",
      "1",
      "3",
      "5",
      "4",
      "1"
    ]
  },
  {
    "name": "Ben",
    "photo": "asdf",
    "scores": [
      "2",
      "3",
      "5",
      "2",
      "3",
      "3",
      "3",
      "2",
      "4",
      "3"
    ]
  },
  {
    "name": "Sasha",
    "photo": "https://metrouk2.files.wordpress.com/2017/03/512366437.jpg?w=748&h=498&crop=1",
    "scores": [
      "2",
      "2",
      "5",
      "3",
      "4",
      "3",
      "3",
      "1",
      "4",
      "2"
    ]
  },
  {
    "name": "Sasha",
    "photo": "https://metrouk2.files.wordpress.com/2017/03/512366437.jpg?w=748&h=498&crop=1",
    "scores": [
      "2",
      "2",
      "5",
      "3",
      "4",
      "3",
      "3",
      "1",
      "4",
      "2"
    ]
  },
  {
    "name": "Sasha",
    "photo": "https://metrouk2.files.wordpress.com/2017/03/512366437.jpg?w=748&h=498&crop=1",
    "scores": [
      "2",
      "2",
      "5",
      "3",
      "4",
      "3",
      "3",
      "1",
      "4",
      "2"
    ]
  },
  {
    "name": "Julia ",
    "photo": "wqww.test.com",
    "scores": [
      "2",
      "2",
      "3",
      "2",
      "3",
      "4",
      "4",
      "5",
      "2",
      "3"
    ]
  },
  {
    "name": "daniel",
    "photo": "www.google.com",
    "scores": [
      "2",
      "2",
      "4",
      "3",
      "3",
      "3",
      "2",
      "4",
      "4",
      "3"
    ]
  },
  {
    "name": "Elliot Reed",
    "photo": "https://goo.gl/images/t6cZZS",
    "scores": [
      "5",
      "2",
      "3",
      "1",
      "4",
      "2",
      "4",
      "1",
      "1",
      "3"
    ]
  },
  {
    "name": "jac",
    "photo": "https://www.petmd.com/dog/conditions/digestive/c_dg_salmonellosis",
    "scores": [
      "2",
      "2",
      "3",
      "3",
      "2",
      "3",
      "3",
      "3",
      "4",
      "3"
    ]
  },
  {
    "name": "Akhil Sompalli",
    "photo": "e3d",
    "scores": [
      "3",
      "2",
      "4",
      "4",
      "3",
      "4",
      "5",
      "4",
      "3",
      "2"
    ]
  },
  {
    "name": "Joe",
    "photo": "https://www.pinterest.com/pin/454863631093059223/",
    "scores": [
      "3",
      "4",
      "2",
      "1",
      "1",
      "3",
      "3",
      "1",
      "2",
      "2"
    ]
  },
  {
    "name": "Joe",
    "photo": "https://www.pinterest.com/pin/454863631093059223/",
    "scores": [
      "3",
      "4",
      "2",
      "1",
      "1",
      "3",
      "3",
      "1",
      "2",
      "2"
    ]
  },
  {
    "name": "Joe",
    "photo": "https://www.pinterest.com/pin/454863631093059223/",
    "scores": [
      "3",
      "4",
      "2",
      "1",
      "1",
      "3",
      "3",
      "1",
      "2",
      "2"
    ]
  },
  {
    "name": "Joe",
    "photo": "https://www.pinterest.com/pin/454863631093059223/",
    "scores": [
      "4",
      "2",
      "2",
      "1",
      "1",
      "3",
      "2",
      "1",
      "2",
      "2"
    ]
  },
  {
    "name": "tomn",
    "photo": "https://www.pinterest.com/pin/454863631093059223/",
    "scores": [
      "5",
      "5",
      "5",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
    ]
  },
  {
    "name": "alvin",
    "photo": "www.google.com",
    "scores": [
      "3",
      "4",
      "3",
      "2",
      "4",
      "1",
      "4",
      "4",
      "3",
      "5"
    ]
  },
  {
    "name": "Jimmy",
    "photo": ":)",
    "scores": [
      "4",
      "3",
      "2",
      "4",
      "2",
      "1",
      "5",
      "3",
      "2",
      "5"
    ]
  },
  {
    "name": "haha",
    "photo": "lskjlkas",
    "scores": [
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
    "name": "haha",
    "photo": "lskjlkas",
    "scores": [
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
    "name": "haha",
    "photo": "lskjlkas",
    "scores": [
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
  }
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;