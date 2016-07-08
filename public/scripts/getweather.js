function getWeather(position)
{
	$.ajax({
      type: "GET",
      url: "/weather?latitude=" + position.lat() +"&longitude=" + position.lng(),
      traditional: true,
      }).done(
          function(response) 
          {
          	  var resp = JSON.parse(response);
              marker.setPosition(position);
              infowindow.open(map, marker);  	
              marker.setMap(map);
              $("#temperature").html(resp.observation.temp);
          });
}
