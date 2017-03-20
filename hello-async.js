setTimeout(function(){ // callback
	console.log('1');
}, 2000);

setTimeout(function(){
	console.log('3');
}, 1000);

console.log('2');

console.log('CHALLENGE starting now in 2 seconds! ');

function printInTwoSeconds (message){
	setTimeout(function(){
		console.log(message);
	}, 2000);
}

printInTwoSeconds('It is two seconds!');