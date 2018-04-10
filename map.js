var map, infoWindow;
var lat = 35.779590;
var lng = -78.638179;
var latArray = []
var lngArray = []

// Perfoming an AJAX GET request to our queryURL
// queryURL += '?' + $.param({
//     'api-key': "sa38JqfW39msh5UFDYOe0Y44RTAEp1jP9K1jsnk52st50qIIvw"

function initMap() {
    /*
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 35.851, lng: -78.796 },
    zoom: 8
  });
  */
 // infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.

    
    var queryURL = "https://trailapi-trailapi.p.mashape.com/?lat=" + lat + "&limit=10&lon="+ lng + "&radius=25";
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
      var myLatLng = { lat: 0, lng: 0};
      var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.851, lng: -78.796 },
        zoom: 8
      });
      for (var i = 0; i < 10; i++) {
          var lat = response.places[i].lat;
          latArray.push(lat);
          var lng = response.places[i].lon;
          lngArray.push(lng);
          $("#trails").append(response.places[i].name + "<br>")
        //   var myLatLng = { lat: parseInt(lat), lng: parseInt(lng)};
            var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: map,
            title: response.places[i].name
          })
          console.log(marker.position)
          
      }
    }
})

}
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//       var latitude = pos.lat;
//     var longitude = pos.lng;
//       infoWindow.setPosition(pos);
//       infoWindow.setContent('Location found.');
//       infoWindow.open(map);
//       map.setCenter(pos);
//     }, function () {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//     'Error: The Geolocation service failed.' :
//     'Error: Your browser doesn\'t support geolocation.');
//   infoWindow.open(map);
// }

    
//       console.log(latArray)
//       console.log(lngArray)
//       for (var j = 0; j < 10; j++) {


//         //   var myLatLng = { lat: parseInt(latArray[0]), lng: parseInt(lngArray[0]) };

//       for(var i = 0; i < response.length; i++) {
    
//         // Current object
//         var obj = json[i];

    
//         // Adding a new marker for the object
//         var marker = new google.maps.Marker({
//           position: new google.maps.LatLng(latArray[i],lngArray[i]),
//           map: map,
//           title: response.places[i].name // this works, giving the marker a title with the correct title
//         });
//     }
//     },
//     error: function (error) {
//         alert("Error");
//     }
//   // unirest.get("https://trailapi-trailapi.p.mashape.com/?lat=34.1&limit=25&lon=-105.2&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Denver&q[country_cont]=Australia&q[state_cont]=California&radius=25")
//   // .headers("X-Mashape-Key", "jtOKYi7zuymshFKxRTzq7kOGreFwp1rRDgxjsnJzwbc4rRtlXF")
//   // .headers("Accept", "text/plain")
//   // .end(function (result) {
//   });

// function dropPins() {
//     for (var j = 0; j < 10; j++) {


// //   var myLatLng = { lat: parseInt(latArray[0]), lng: parseInt(lngArray[0]) };
// var myLatLng = { lat: parseInt(latArray[j]), lng: parseInt(lngArray[j])};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     // zoom: 4,
//     center: myLatLng
//   });

//   var marker = new google.maps.Marker({
//     position: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
//     map: map,
//     title: 'Hello World!'
  
//   });
// }
// }
// $(document).ready(function (){
// dropPins()
// }) 


// }