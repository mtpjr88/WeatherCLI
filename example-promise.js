// function doWork(data, callback){
// 	callback('done');
// }

// function doWorkPromise(data){
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function(){
// 			reject('everything is broken!');
// 		},1000);
// 		// reject({
// 		// 	error: 'something bad happened'
// 		// });
// 	});
// }

// doWorkPromise('some data').then(function(data){
// 	console.log(data);
// }, function(error){
// 	console.log(error);
// });

var request = require('request');

function getWeather(location){
	return new Promise(function(resolve, reject){

		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&APPID=c029c3c7808f71b70f2ff8af634b7e7a';

		if(!location) {
			return reject('No location provided');
		}

		request({
			url: url,
			json: true
		}, function(error, response, body){
			if (error) {
				reject('Unable to fetch weather.');
			} else {
				resolve("It\'s: " + body.main.temp + " Degrees in " + body.name);
				// 
			}
		});
	});

}

getWeather('san francisco').then(function(currentWeather){
	console.log(currentWeather);
}, function(error){
	console.log(error);
})



