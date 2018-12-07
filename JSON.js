var dog ={
	"name" : "pummy" ,
	"age" : 4,
	"weight" : 19

}

console.log("\n **** Json stringify **** \n")
var dogJson = JSON.stringify(dog)
console.log(dogJson)


var json = '{"name":"sopheya", "age": 2, "weight": 22}'
var dog = JSON.parse(json);
console.log("\n **** Json parsing **** \n")
console.log(dog);


// AJAX

var base = 'https://jsonplaceholder.typicode.com';
// use fetch on the /posts route, and then pass the response along
fetch(base + "/posts").then(function(response){
	// with the response convert it to json , then pass it along
	response.json().then(function(json1){
		// print the json
		console.log(json1)
	});
});

