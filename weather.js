var request = require('request');

module.exports = function (location, callback) {
	var encodedLocation = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&APPID=c029c3c7808f71b70f2ff8af634b7e7a';

	if(!location) {
		return callback('No location provided');
	}

	request({
		url: url,
		json: true
	}, function(error, response, body){
		if (error) {
			callback('Unable to fetch weather.');
		} else {
			callback("It\'s: " + body.main.temp + " Degrees in " + body.name);
			// 
		}
	});
}