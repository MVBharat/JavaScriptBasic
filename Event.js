var button = document.querySelector("#button")

var clickCallback = function (event) {
	console.log("You have clicked on the button")
}

button.addEventListener("click", clickCallback)


// var event = new Event("eat");

// element.addEventListener("eat", function (event) {
// 	console.log("Eating Food");
// }, false);

// element.dispatchEvent(event);