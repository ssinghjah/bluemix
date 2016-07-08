	    var map;
      var marker;
      var infowindow;

      function initMap() 
      {

      	 var contentString = '<div id="content">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading"><span id="temperature"></span> &deg;C</h1>'+
	      '</div>';


      	var myLatLng = {lat: 35.772113, lng: -78.674100};
      	
      	map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 10
        });


      	marker = new google.maps.Marker({
						    position: myLatLng,
						    title: 'Weather'
						  });

        infowindow = new google.maps.InfoWindow({
    		content: contentString
  		});

        
	    google.maps.event.addListener(map, 'click', function(event) {
    		var position = event.latLng;
    		getWeather(position);	
		});
   	}
