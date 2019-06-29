// var firebaseConfig = {
//   apiKey: "AIzaSyCqM2f9DeOPI0-KeI_egjercfmcre6JWVQ",
//   authDomain: "project-1-db2b6.firebaseapp.com",
//   databaseURL: "https://project-1-db2b6.firebaseio.com",
//   projectId: "project-1-db2b6",
//   storageBucket: "",
//   messagingSenderId: "416821496055",
//   appId: "1:416821496055:web:00871c0b1b76e1b2"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// var firebaseConfig = {
//     apiKey: "AIzaSyDu-IZRwVwHpM8FUVoFDo3GRECFZQd6C_w",
//     authDomain: "travel-e625e.firebaseapp.com",
//     databaseURL: "https://travel-e625e.firebaseio.com",
//     projectId: "travel-e625e",
//     storageBucket: "travel-e625e.appspot.com",
//     messagingSenderId: "434096805274",
//     appId: "1:434096805274:web:548f60062d0386a5"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

// // email log in 
// var provider = new firebase.auth.GoogleAuthProvider();

// firebase.auth().getRedirectResult().then(function(result) {
//     if (result.credential) {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = result.credential.accessToken;
//     }
//     // The signed-in user info.
//     var user = result.user;
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });


// API informaton

var queryURL = "https://api.foursquare.com/v2/venues/search?near=";

var location;

var category;

var apiKey = "&v=20150214&m=foursquare&client_secret=Y5GJB4RELAK5I3SVFXZOGNK4LDRTWLMYIA1BNBCKC2VTDLHI&client_id=IKCP0GXREJ5ERW5RTZUIAZQXVWKPDTQ5OPGJX3YEWBZZRWEK"

$("#button").on("click", function(event){
  event.preventDefault();
  console.log("Search button clicked!!!");

  location = $("#location").val();
  category = $("#category").val();
  console.log(location);
  console.log(category);

// fetch(`https://api.foursquare.com/v2/venues/search?near=${location}&query=${category}${apiKey}`)
// .then(function(response) {
//   return response.json();
// })
// .then(function(myJson) {
//   console.log(myJson)
//   // console.log(JSON.stringify(myJson));
// }).catch(function(err) {
//       console.log(err)
//         // Code for handling errors
// });
  // var URL = queryURL + location + "&query=" + category + apiKey;

  // $.ajax ({
  //   url: URL,
  //   method: "GET"
  // }).then(function(response){
  //   console.log(response);
  // })

})
