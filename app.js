/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();


var https = require("https");

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});


app.get('/weather', function (req, res) {

		var weatherInfo;
		callback = function(response) {
		  var str = '';

		  //another chunk of data has been recieved, so append it to `str`
		  response.on('data', function (chunk) {
		    str += chunk;
		  });

		  //the whole response has been recieved, so we just print it out here
		  response.on('end', function () {
		  	weatherInfo = JSON.parse(str);
		    //console.log(weatherInfo.observation.temp);
		    res.end(str);
		  });
		}

		var lat = req.query.latitude;
		var lng = req.query.longitude;
		https.request("https://41779667-33a3-4370-9378-946219874ede:RJI1u2JZWH@twcservice.mybluemix.net:443/api/weather/v1/geocode/" + lat + "/" + lng + "/observations.json?units=m&language=en-US", callback).end();

});