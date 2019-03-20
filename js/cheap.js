// // Capture Time Button Click
$("#add-time").on("click", function (event) {
  event.preventDefault();
  var tvQueryURL = "http://api.tvmaze.com/schedule?country=US&date=2019-03-24";
  var time = $("#time").val().trim();
  var unixTime = moment(time, "HHmm").unix()

  $.ajax({
    url: tvQueryURL,
    method: "GET"
  }).then(function (response) {



    var tvResults = response.filter(show => {
      return moment(show.airtime, "HH:mm").unix() >= unixTime;
    });
    console.log(tvResults);

    for (var i = 0; i < 3; i++) {
      var showImage = tvResults[i].show.image.medium;
      var showName = tvResults[i].show.name;
      var showURL = tvResults[i].show.url;


      // create a variable called 'tvResults' that takes the original results
      // set back from the API, and filters it to only keep the shows with an
      // airtime exactly AT or AFTER the time the user specifies...


      $(".tvimg" + (i + 1)).attr("src", showImage);
      $(".tvimg" + (i + 1)).attr("url", showURL);
      $(".tvbox" + (i + 1)).prepend($(".showName").text(showName));
      $(".showName" + (i + 1)).text(showName);

      $("img").on("click", function (event) {
        var url = $(this).attr("url");
        console.log(url);
        window.location = url;
      })

    }



  })
})



//Capture  Food Button Click
$("#add-ingredient").on("click", function (event) {
  event.preventDefault();
  var ingredient = $("#ingredient").val().trim();

  console.log(ingredient);
  var ingredientQueryURL = "https://api.edamam.com/search?q=" + ingredient + "&app_id=9c1f98e9&app_key=aaea5f847e32e06cf25133ccb9fdb4c0%20";


  $.ajax({
    url: ingredientQueryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var results = response.hits;
    console.log(results);

    for (var i = 0; i < results.length; i++) {
      var image = results[i].recipe.image;
      var recName = results[i].recipe.label;
      var recURL = results[i].recipe.shareAs;

      // var html = 
      $(".img" + (i + 1)).attr("src", image);
      $(".img" + (i + 1)).attr("url", recURL);
      $(".box" + (i + 1)).prepend($(".recipeName").text(recName));
      $(".recipeName" + (i + 1)).text(recName);

      $("img").on("click", function (event) {
        var url = $(this).attr("url");
        console.log(url);
        window.location = url;
      })
    }
  })
})



