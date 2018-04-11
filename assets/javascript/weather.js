    /*Description:
    used two api URl for weather information: one for current and one for forecast.
    On starting page, gets the user geo location and thus obtained latittude and longitude which is 
    used by another api (google api) to get the name of location and passed to weather api url.
    */


function getCity(city) {
   // var city = "nc/cary";

    //API for wether forecast, use one of the below two api key
    var queryURL = "http://api.wunderground.com/api/87d18b0282c9396c/forecast/q/"+city+".json"; 
    //var queryURL = "http://api.wunderground.com/api/e58ab528f4132c06/forecast/q/"+city+".json";

    $.ajax({
        url: queryURL,
        method: "GET"
        })
        
        .then (function(response) {
            console.log(queryURL);
            console.log(response);
            console.log(response.forecast.txt_forecast.date);
            var x = document.createElement("IMG");
            x.setAttribute("src", response.forecast.txt_forecast.forecastday[0].icon_url);
            x.setAttribute("width", "70");
            x.setAttribute("height", "auto");
            x.setAttribute("alt", "The Pulpit Rock");            
            console.log(x);
            $("#duration1").html(response.forecast.txt_forecast.forecastday[0].title);
            $("#forecat_first").html(x);
            $("#forecat_first_description").html(response.forecast.txt_forecast.forecastday[0].fcttext);
            
            var y = document.createElement("IMG");
            y.setAttribute("src", response.forecast.txt_forecast.forecastday[1].icon_url);
            y.setAttribute("width", "70");
            y.setAttribute("height", "auto");
            y.setAttribute("alt", "The Pulpit Rock");       
            console.log(y);
            $("#duration2").html(response.forecast.txt_forecast.forecastday[1].title);
            $("#forecat_second").html(y);
            $("#forecat_second_description").html(response.forecast.txt_forecast.forecastday[1].fcttext);
            
            var z = document.createElement("IMG");
            z.setAttribute("src", response.forecast.txt_forecast.forecastday[2].icon_url);
            z.setAttribute("width", "70");
            z.setAttribute("height", "auto");
            z.setAttribute("alt", "The Pulpit Rock");       
            console.log(z);
            $("#duration3").html(response.forecast.txt_forecast.forecastday[2].title);
            $("#forecat_third").html(z);
            $("#forecat_third_description").html(response.forecast.txt_forecast.forecastday[2].fcttext);
        
        });
        
    //API url (use one of the two.)
    var queryURL2 = "http://api.wunderground.com/api/87d18b0282c9396c/conditions/q/"+city+".json"
    //var queryURL2 = "http://api.wunderground.com/api/e58ab528f4132c06/conditions/q/"+city+".json"
    console.log(queryURL2);

    $.ajax({
        url: queryURL2,
        method: "GET"
        })
        
        .then (function(response) {
            if (response.current_observation) {
                    console.log(response);
                
                    var x = document.createElement("IMG");
                    x.setAttribute("src", response.current_observation.icon_url);
                    x.setAttribute("width", "70");
                    x.setAttribute("height", "auto");
                    x.setAttribute("alt", "The Pulpit Rock");        
                    console.log(x);        
                    $("#current_condition").html(response.current_observation.weather); 
                    $("#current_img").html(x);
                    $("#current_data").html("<p>Temperature: "+response.current_observation.temperature_string + "</p></br>"+
                                            "<p>Feels like: "+response.current_observation.feelslike_f+" F (" + response.current_observation.feelslike_c+ " C)</p></br>"+
                                            "<p>Precipitation today (inch): "+response.current_observation.precip_today_in+ "</p></br>");
                    $("#current_data2").html("<p>Relative Humidity: "+response.current_observation.relative_humidity + "</p></br>"+
                                            "<p>Wind: "+response.current_observation.wind_string + "</p></br>"+
                                            "<p>Visibility: "+response.current_observation.visibility_mi + " miles</p></br>"+
                                    "<p>Atmospheric Pressure (mb): "+response.current_observation.pressure_mb+ "</p></br>");
            } else {
                $("#weather_box").html("<h1>Can not get the Weather information.Please give the location again in search area. Please write state short name/city name (ex: NC/Cary) for US and country short name/city (ex: NP/Kathmandu) for other countries. </h1>"); 
            }
        });
};

$("#userSearch").click(function(){
    city= $("#locationInput").val().trim();
    $("#userLocation").html("");
    $("#userLocation").html(city);
    getCity(city);
    
   
});

function getLocation() {
   
        navigator.geolocation.getCurrentPosition(showPosition);        
}
 

function showPosition(position) {
    var getLatitude = position.coords.latitude;
    var getLongitude = position.coords.longitude;
    console.log(getLatitude);
    console.log(getLongitude);
    var apiCode = "AIzaSyBxbpX0AuckHtRbiG6fA8EFQoX6WDeZYFk";
    //var queryURL1 = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + getLatitude+"," + getLongitude+ "&sensor=true";
    var queryURL1 = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + getLatitude + "," + getLongitude + "&key=" + apiCode;
   
    console.log(queryURL1);
    $.ajax({
    url: queryURL1,
    method: "GET"
    })
    
        .then (function(response) {
        console.log(response);
        console.log(response.results[0].address_components[5].short_name);
        console.log(response.results[0].address_components[2].long_name);
        state=response.results[0].address_components[5].short_name;
        cityName=response.results[0].address_components[2].long_name;
        var city= state+"/"+cityName;
        $("#userLocation").html(cityName +", " +state);
        getCity(city);
        });
        
}

$( document ).ready(function() {

    if (navigator.geolocation) {
         getLocation();
      //   getCity();
    }
    else {
        console.log("not available");
    
    }     

});

