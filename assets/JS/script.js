var firebaseConfig = {
  apiKey: "AIzaSyCqM2f9DeOPI0-KeI_egjercfmcre6JWVQ",
  authDomain: "project-1-db2b6.firebaseapp.com",
  databaseURL: "https://project-1-db2b6.firebaseio.com",
  projectId: "project-1-db2b6",
  storageBucket: "",
  messagingSenderId: "416821496055",
  appId: "1:416821496055:web:00871c0b1b76e1b2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database=firebase.database();
// email log in 
// var provider = new firebase.auth.GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
});


// API informaton
var queryURL = "https://api.foursquare.com/v2/venues/search?near=";
var queryURL2 = "https://api.foursquare.com/v2/venues/search?near=Sandy,UT&query=Movies&v=20150214&m=foursquare&client_secret=Y5GJB4RELAK5I3SVFXZOGNK4LDRTWLMYIA1BNBCKC2VTDLHI&client_id=IKCP0GXREJ5ERW5RTZUIAZQXVWKPDTQ5OPGJX3YEWBZZRWEK";
var apiKey = "&v=20150214&m=foursquare&client_secret=Y5GJB4RELAK5I3SVFXZOGNK4LDRTWLMYIA1BNBCKC2VTDLHI&client_id=IKCP0GXREJ5ERW5RTZUIAZQXVWKPDTQ5OPGJX3YEWBZZRWEK"
var destination;
var category;
var upVotes = 0;

$(document).ready(function(){


$("#button").on("click", function(event){
  event.preventDefault();
  console.log("Search button clicked!!!");



  destination = $("#destination").val().trim();
  category = $("#category").val().trim();

  $("#about").empty();
  $("#destinationPicture").empty();

  console.log(destination);
  console.log(category); 
// debugger;

fetch(`https://api.foursquare.com/v2/venues/search?near=${destination}&query=${category}${apiKey}`)
.then(function(response) {
  // console.log(Promise.PromiseValue)
  // console.log(response.json())
  return response.json();

})
.then(function(myJson) {
  console.log(myJson);
  console.log(myJson.response.venues[0].name);
  console.log(myJson.response.venues[0].location.address);

var venues = myJson.response.venues;
var object = myJson.response.geocode.feature.displayName;
console.log(object);


console.log(venues);
  // Check how to for loop through your response
  for(var i = 0; i < 3; i++){
    
   
    var prefix = venues[0].categories[0].icon.prefix;
    

    $("#about").append("<h5>" + venues[i].name + "</h5>");

    for(var j = 0; j < venues[i].location.formattedAddress.length; j++){
      var address = venues[i].location.formattedAddress[j]
      console.log(address)
      
    }

    $("#about").append("<h5>" + venues[i].location.formattedAddress + "</h5>");
  }

  $("#title").html("<h4>"+ object +"</h4>");

}).catch(function(err) {
      console.log(err)
        // Code for handling errors
});


})

$(".material-icons").on("click",function(event){

  console.log("Hello There This is working!")

})



$("#plus").on("click", function(event) {
 
  
  
  var name = $("#title h4").text();
  
  database.ref("/locations").push(name);
  // event.preventDefault();
  // console.log("plus button clicked");

  // var name = $("#title").val().trim();
  // var value = 0

  // database.ref().push({
  //   name: name,
  //   value: value

  })





})
