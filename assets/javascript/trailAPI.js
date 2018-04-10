var lat = 35.779590;
var lng = -78.638179;
var latArray = [];
var lngArray = [];
var queryURL = "https://trailapi-trailapi.p.mashape.com/?lat=" + lat + "&limit=10&lon="+ lng + "&radius=25";
// Perfoming an AJAX GET request to our queryURL
// queryURL += '?' + $.param({
//     'api-key': "sa38JqfW39msh5UFDYOe0Y44RTAEp1jP9K1jsnk52st50qIIvw"
// })
$.ajax({
  url: queryURL,
  dataType: 'json',
  headers: {"X-Mashape-Key": "sa38JqfW39msh5UFDYOe0Y44RTAEp1jP9K1jsnk52st50qIIvw",
  "Accept": "text/plain"},
  method: "get",
  contentType: 'application/json; charset=utf-8',
  success: function (response) {
    console.log(response);
    for (var i = 0; i < 10; i++) {
        var lat = response.places[i].lat;
        latArray.push(lat);
        var lng = response.places[i].lon;
        lngArray.push(lng);
        
        
    }
    console.log(latArray)
    console.log(lngArray)
  },
  error: function (error) {
      alert("Error");
  }
// unirest.get("https://trailapi-trailapi.p.mashape.com/?lat=34.1&limit=25&lon=-105.2&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Denver&q[country_cont]=Australia&q[state_cont]=California&radius=25")
// .headers("X-Mashape-Key", "jtOKYi7zuymshFKxRTzq7kOGreFwp1rRDgxjsnJzwbc4rRtlXF")
// .headers("Accept", "text/plain")
// .end(function (result) {
});


// })

// After the data from the AJAX request comes back
//   .then(function(response) {
//     console.log(response);
  // Saving the image_original_url property
    // var imageUrl = response.data.image_original_url;

    // // Creating and storing an image tag
    // var catImage = $("<img>");

    // // Setting the catImage src attribute to imageUrl
    // catImage.attr("src", imageUrl);
    // catImage.attr("alt", "cat image");

    // // Prepending the catImage to the images div
    // $("#images").prepend(catImage);
//   })
