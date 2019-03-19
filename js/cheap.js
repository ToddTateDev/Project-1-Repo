//show
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDoDfAUbIIVeMl3gbfwW5c1JGa8foDsQy4",
    authDomain: "cheap-date-database.firebaseapp.com",
    databaseURL: "https://cheap-date-database.firebaseio.com",
    projectId: "cheap-date-database",
    storageBucket: "cheap-date-database.appspot.com",
    messagingSenderId: "715258876899"
  };
  firebase.initializeApp(config);

var dataRef = firebase.database();

var ingredient = "";
var tvshow = "";

//Capture Button Click
$("#add-ingredient").on("click", function(event){
event.preventDefault();

ingredient = $("#ingredient-input").val().trim();
tvshow = $("tvshow-input").val().trim();

dataRef.ref().push({
  ingredient: ingredient,
    tvshow: tvshow,

});
});

dataRef.ref().on("child_added", function(childSnapshot) {

console.log(childSnapshot.val().ingredient);
console.log(childSnapshot.val().tvshow);




})


var showQueryURL = "http://api.tvmaze.com/schedule?country=US&date=2019-03-18";

$.ajax({
    url: showQueryURL,
    method: "GET"
}).then(function (response) {
    console.log(response.airdate);

})

.then(function(response) {

    console.log(showQueryURL);



})
    


