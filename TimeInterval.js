function sayHello(){
	console.log("Hello");
}

// set time out function
var time = setTimeout(sayHello, 2* 1000);
// cleare time
clearTimeout(time)

// set interval

var seconds = 0;
function printTime() {
	seconds++;
	console.log("Seconds elapsed " + seconds)

	if(seconds === 10){
		console.log("10 sec has elapsed")
		// clearInterval after some time
		clearInterval(interval)
	}
}
var interval = setInterval(printTime, 1000)