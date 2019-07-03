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
var apiKey = "&v=20150214&m=foursquare&client_secret=Y5GJB4RELAK5I3SVFXZOGNK4LDRTWLMYIA1BNBCKC2VTDLHI&client_id=IKCP0GXREJ5ERW5RTZUIAZQXVWKPDTQ5OPGJX3YEWBZZRWEK"
var destination;
var category;
var upVotes = 0;


$("#button").on("click", function(event){
  event.preventDefault();
  console.log("Search button clicked!!!");

  destination = $("#destination").val().trim();
  category = $("#category").val().trim();

  

  console.log(destination);
  console.log(category);
// debugger;
fetch(`https://api.foursquare.com/v2/venues/search?near=${destination}&query=${category}${apiKey}`)
.then(function(response) {
  return response.json();

})
.then(function(myJson) {
  console.log(myJson)
  // console.log(JSON.stringify(myJson));
}).catch(function(err) {
      console.log(err)
        // Code for handling errors
});



})

$(".material-icons").on("click",function(event){

  console.log("Hello There This is working!")

})