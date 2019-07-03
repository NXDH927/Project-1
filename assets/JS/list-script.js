// Your web app's Firebase configuration
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

  var database = firebase.database();
  var name = "Unknown";
  var value = 0;

  database.ref("/locations").on("child_added",function(snapshot) {
    name = snapshot.val();
    console.log(name);

  $(".secondary-content").text(name);
  // $(".secondary-content").text(value);
    },

  

    function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    

});